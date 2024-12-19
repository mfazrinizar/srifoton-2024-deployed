"use client";

import CompetitionRegistration from "@/components/Root/Competition/CompetitionRegistration";
import useClose from "@/hooks/useClose";

export default function EsportRegistration() {
  // useClose(true);
  return (
    <>
      <CompetitionRegistration
        branch="e-sport"
        guideBookLink="https://drive.google.com/file/d/1zsyPt-Bhk5KBGGdFG77vE96fkFUFjQ-d/view?usp=sharing"
      />
    </>
  );
}
