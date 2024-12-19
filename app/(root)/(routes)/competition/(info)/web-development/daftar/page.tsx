"use client";

import CompetitionRegistration from "@/components/Root/Competition/CompetitionRegistration";
// import useClose from "@/hooks/useClose";

export default function WebDevtRegistration() {
  // useClose(true);
  return (
    <>
      <CompetitionRegistration
        branch="web development"
        guideBookLink="https://drive.google.com/file/d/15UDFqJCMATxb37RtiBtWk1WSIcgJr4EL/view?usp=sharing"
      />
    </>
  );
}
