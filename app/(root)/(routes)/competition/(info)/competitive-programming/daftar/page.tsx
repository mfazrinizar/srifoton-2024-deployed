"use client";

import CompetitionRegistration from "@/components/Root/Competition/CompetitionRegistration";
import useClose from "@/hooks/useClose";

export default function CPRegistration() {
  // useClose(true);
  return (
    <>
      <CompetitionRegistration
        branch="competitive programming"
        guideBookLink="https://drive.google.com/file/d/1g5H0oEY__iBdnKqHXIK58imSRC4_PnsM/view"
      />
    </>
  );
}
