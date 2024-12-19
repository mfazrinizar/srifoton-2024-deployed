import React, { useState, useEffect, useRef } from "react";
import { CalendarDays, NotebookText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Messages from "./Messages";
import { FaWhatsapp } from "react-icons/fa";
import { storage, auth, db } from "@/lib/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  collection,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { toast } from "sonner";
import useAuthOrNullRedirect from "@/hooks/useAuthOrNullRedirect";
import { waRoutes } from "@/lib/link";
import { PDFDownloadLink, PDFViewer, BlobProvider } from "@react-pdf/renderer";
import Ticket from "../Ticket";
import { Workshop } from "@/lib/types/workshopTypes";
import { Talkshow } from "@/lib/types/talkshowTypes";

type Props = {
  title?: string;
  name: string;
  date: string;
  message: string;
  project: boolean;
  talkshow?: Talkshow;
  workshop?: Workshop;
  loading: boolean;
};

export default function FlashCard({
  title,
  name,
  date,
  message,
  project,
  talkshow,
  workshop,
  loading,
}: Props) {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [submissionUrl, setSubmissionUrl] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const user = useAuthOrNullRedirect(false);

  useEffect(() => {
    const fetchSubmission = async () => {
      let collectionName;
      if (title === "UI/UX Design") {
        collectionName = "ui_ux_designs";
      } else if (title === "Web Development") {
        collectionName = "web_developments";
      }

      if (collectionName) {
        const q = query(
          collection(db, collectionName),
          where("user_id", "==", user?.uid),
        );
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          const submissionData = querySnapshot.docs[0].data().submission;
          setSubmissionUrl(submissionData || null);
        }
      }
    };

    fetchSubmission();
  }, [title, user?.uid]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      const fileExtension = selectedFile.name.split(".").pop()?.toLowerCase();
      if (fileExtension !== "zip") {
        toast.error("Hanya file ZIP yang diperbolehkan!");
        return;
      }
      if (selectedFile.size > 25 * 1024 * 1024) {
        toast.error("File tidak boleh lebih besar dari 25 MB!");
        return;
      }
      setFile(selectedFile);
    }
  };

  const handleSubmission = async () => {
    if (!file) {
      toast.error("Mohon pilih file terlebih dahul u.");
      return;
    }
    try {
      setUploading(true);
      const user = auth.currentUser;
      if (!user) {
        toast.error("Anda harus login untuk submit.");
        return;
      }

      let collectionName, collectionDir;
      if (title === "UI/UX Design") {
        collectionName = "ui_ux_designs";
        collectionDir = "uiux-design";
      } else if (title === "Web Development") {
        collectionName = "web_developments";
        collectionDir = "web-development";
      }

      const generateRandomString = (length: number) => {
        const characters =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let result = "";
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
          result += characters.charAt(
            Math.floor(Math.random() * charactersLength),
          );
        }
        return result;
      };

      const randomFileName = `${generateRandomString(10) + user.uid}.zip`;
      const storageRef = ref(
        storage,
        `competitions/${collectionDir}/${name}/${randomFileName}`,
      );

      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);

      if (collectionName) {
        const q = query(
          collection(db, collectionName),
          where("user_id", "==", user.uid),
        );
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          const docRef = querySnapshot.docs[0].ref;
          await updateDoc(docRef, { submission: downloadURL });
          setSubmissionUrl(downloadURL);
          toast.success("Submission berhasil!");
        } else {
          toast.error("Data tidak ditemukan. Silakan hubungi admin.");
        }
      } else {
        toast.error("Unknown competition type.");
      }
    } catch (error) {
      toast.error("Gagal mengumpulkan.");
    } finally {
      setUploading(false);
      setFile(null);
    }
  };

  const groupLink = waRoutes.find((route) => route.linkTo === title)?.address;

  return (
    <div className="relative flex flex-col space-y-6 overflow-x-hidden border-2 border-black px-4 py-4">
      <h4 className="text-lg text-[#868365]">{title}</h4>
      <h3 className="text-xs uppercase md:text-xl">{name}</h3>
      <div className="flex items-center space-x-4 text-xs">
        <CalendarDays className="size-4" />
        <p className="content-center">{date}</p>
      </div>
      <Messages message={message} />

      <div className="bottom-4 right-4 flex flex-wrap items-end gap-2 md:absolute">
        {project && (
          <div className="flex flex-col gap-2">
            {!submissionUrl ? (
              <>
                <input
                  type="file"
                  onChange={handleFileChange}
                  accept=".zip"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                />
                <Button
                  className="flex h-12 items-center justify-center gap-x-2 border-4 border-background bg-transparent px-2 font-monument text-xs text-background hover:bg-background/90 hover:text-white md:text-base"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={uploading}
                >
                  <NotebookText className="size-4" />
                  {file
                    ? file.name.length > 10
                      ? `${file.name.substring(0, 10)}...`
                      : file.name
                    : "Choose File"}
                </Button>
                {file && (
                  <Button
                    className="flex h-12 items-center justify-center gap-x-2 border-4 border-background bg-transparent px-2 font-monument text-xs text-background hover:bg-background/90 hover:text-white md:text-base"
                    onClick={handleSubmission}
                    disabled={uploading}
                  >
                    <NotebookText className="size-4" />
                    {uploading ? (
                      <div className="spinner"></div>
                    ) : (
                      "Submit Work"
                    )}
                  </Button>
                )}
              </>
            ) : (
              <a
                className="flex h-12 items-center justify-center gap-x-2 border-4 border-background bg-transparent px-2 font-monument text-xs text-background hover:bg-background/90 hover:text-white md:text-base"
                href={submissionUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <NotebookText className="size-4" />
                Download Work
              </a>
            )}
          </div>
        )}
        <div className="flex flex-col items-end">
          {talkshow?.is_verified && (
            <div className="mb-2">
              <PDFViewer
                key={`${talkshow?.id}-${talkshow?.ticket_number}`}
                className="h-24 w-full"
              >
                <Ticket
                  name={talkshow?.name}
                  noTicket={talkshow?.ticket_number ?? ""}
                  isWorkshop={false}
                />
              </PDFViewer>
            </div>
          )}
          {workshop?.is_verified && (
            <div className="mb-2">
              <PDFViewer
                key={`${workshop?.id}-${workshop?.ticket_number}`}
                className="h-24 w-full"
              >
                <Ticket
                  name={workshop?.name}
                  noTicket={workshop?.ticket_number ?? ""}
                  isWorkshop={true}
                />
              </PDFViewer>
            </div>
          )}
          <div className="flex gap-2">
            {talkshow && (
              <BlobProvider
                document={
                  <Ticket
                    name={talkshow.name}
                    noTicket={talkshow.ticket_number ?? ""}
                    isWorkshop={false}
                  />
                }
              >
                {({ url, loading }) => (
                  <Button
                    size={"sm"}
                    className="flex h-12 items-center justify-center gap-x-2 bg-background/90 font-monument text-xs text-white hover:bg-background disabled:opacity-60 md:text-base"
                    disabled={!talkshow.is_verified}
                    onClick={() => {
                      if (url) {
                        window.open(url);
                      }
                    }}
                  >
                    <a
                      href={
                        url
                          ? url
                          : "https://srifoton.hmifunsri.com/dashboard/activities"
                      }
                      className="w-full"
                    >
                      {loading ? "Loading Ticket..." : "Download Ticket"}
                    </a>
                  </Button>
                )}
              </BlobProvider>
            )}

            {workshop && (
              <BlobProvider
                document={
                  <Ticket
                    name={workshop.name}
                    noTicket={workshop.ticket_number ?? ""}
                    isWorkshop={true}
                  />
                }
              >
                {({ url, loading }) => (
                  <Button
                    size={"sm"}
                    className="flex h-12 items-center justify-center gap-x-2 bg-background/90 font-monument text-xs text-white hover:bg-background disabled:opacity-60 md:text-base"
                    disabled={loading || url === null || !workshop.is_verified}
                    onClick={() => {
                      if (url) {
                        window.open(url);
                      }
                    }}
                  >
                    <a
                      href={
                        url
                          ? url
                          : "https://srifoton.hmifunsri.com/dashboard/activities"
                      }
                      className="w-full"
                    >
                      {loading ? "Loading Ticket..." : "Download Ticket"}
                    </a>
                  </Button>
                )}
              </BlobProvider>
            )}

            {groupLink && (
              <a href={groupLink} target="_blank" rel="noopener noreferrer">
                <Button className="flex h-12 items-center justify-center gap-x-2 bg-background/90 font-monument text-xs text-white hover:bg-background disabled:opacity-60 md:text-base">
                  <FaWhatsapp />
                  <p>Join Group</p>
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
