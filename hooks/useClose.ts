import { useEffect, useRef } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const useClose = (isClose: boolean) => {
  const router = useRouter();
  const hasShownToast = useRef(false);

  useEffect(() => {
    if (isClose && !hasShownToast.current) {
      toast.error("Kompetisi telah ditutup. Selamat Berjuang!");
      hasShownToast.current = true;
      router.push("/competition");
    } else {
      return;
    }
  }, [isClose, router]);
};

export default useClose;
