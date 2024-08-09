import CompetitionRegistration from "@/components/Root/Competition/CompetitionRegistration";
import { auth } from "@/lib/firebase";
import { toast } from "sonner";

export default function UIUXtRegistration() {
  if (auth.currentUser === null) {
    toast.error("Anda harus login terlebih dahulu untuk bisa mendaftar!");
  }

  return (
    <>
      <CompetitionRegistration branch="ui/ux design" guideBookLink="https://docs.google.com/document/d/1lK2H4Uk4oLfyTIiwnXfyDLzwlc3_Q3nCuU48bGWjlzs/edit?usp=drivesdk" />
    </>
  );
}
