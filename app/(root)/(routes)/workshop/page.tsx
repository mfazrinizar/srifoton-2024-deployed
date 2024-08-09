"use client";

import OverviewHero from "@/components/Root/OverviewHero";
import IDcard from "@/components/ui/IDcard";
import { Flashcard, Flashcards, Benefits } from "@/components/Root/Flashcards";
import { QNA, SpeechBubble } from "@/components/Root/QNA";
import { Timeline, TimelineCard } from "@/components/Root/Timeline";
import React from "react";
import { useRef } from "react";

type Props = {};

export default function Workshop({}: Props) {
  const workshopRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <OverviewHero
        id="hero-workshop"
        header="workshop"
        subheader="srifoton 2024"
        src="/img/workshop-logo-2.png"
        onClick={() =>
          workshopRef.current?.scrollIntoView({ behavior: "smooth" })
        }
      >
        “Kickstart your web development journey”
      </OverviewHero>
      <IDcard
        title="our speaker"
        name="nama speaker"
        src1="/img/gallery1.png"
        src2="/img/gallery1.png"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
        Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
        mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
        tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
        suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus
        ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales
      </IDcard>
      <div ref={workshopRef}>
        <Flashcards id="workshop-option" title="workshop options">
          <Flashcard
            title="workshop offline ticket"
            previewTitle="offline ticket"
            href="workshop/daftar"
            price="80.000"
            per="person"
          >
            <p>
              Workshop SRIFOTON bertema "Kickstart Your Web Development Journey"
              menyajikan materi pemrograman dan sesi live coding untuk
              pengembangan situs web dasar, dipandu oleh instruktur berkompeten.
            </p>
            <Benefits>
              <p>E-Sertifikat</p>
              <p>Menambah relasi</p>
              <p>Pengalaman pembuatan proyek</p>
              <p>Snack</p>
            </Benefits>
          </Flashcard>
          <Flashcard
            title="workshop online ticket"
            previewTitle="online ticket"
            href="workshop/daftar"
            price="50.000"
            per="person"
          >
            <p>
              Workshop SRIFOTON bertema "Kickstart Your Web Development Journey"
              menyajikan materi pemrograman dan sesi live coding untuk
              pengembangan situs web dasar, dipandu oleh instruktur berkompeten.
            </p>
            <Benefits>
              <p>E-Sertifikat</p>
              <p>Menambah relasi</p>
              <p>Pengalaman pembuatan proyek</p>
            </Benefits>
          </Flashcard>
          <Flashcard
            title={
              <>
                workshop online + <br /> talkshow
              </>
            }
            previewTitle="combo package 1"
            href="workshop/daftar"
            price="80.000"
            per="person"
          >
            <p>
              SRIFOTON menawarkan workshop "Kickstart Your Web Development
              Journey" dan talkshow "Effective Ways to Build and Maintain a
              Personal Brand in the Digital Era," yang membahas keterampilan web
              dasar dan personal branding. Dipandu oleh ahli, paket ini
              meningkatkan keterampilan digital dan profesional.
            </p>
            <Benefits>
              <p>E-Sertifikat</p>
              <p>Menambah relasi</p>
              <p>Pengalaman pembuatan proyek</p>
              <p>Snack + Lunch</p>
            </Benefits>
          </Flashcard>
          <Flashcard
            title={
              <>
                workshop offline + <br /> talkshow
              </>
            }
            previewTitle="combo package 2"
            href="workshop/daftar"
            price="80.000"
            per="person"
          >
            <p>
              Workshop SRIFOTON bertema "Kickstart Your Web Development Journey"
              menyajikan materi pemrograman dan sesi live coding untuk
              pengembangan situs web dasar, dipandu oleh instruktur berkompeten.
            </p>
            <Benefits>
              <p>E-Sertifikat</p>
              <p>Menambah relasi</p>
              <p>Pengalaman pembuatan proyek</p>
              <p>Snack</p>
            </Benefits>
          </Flashcard>
        </Flashcards>
      </div>
      <Timeline title="workshop timeline">
        <TimelineCard span="23 Sept - 20 Augs">
          Open Registration Competition
        </TimelineCard>
        <TimelineCard span="23 Sept - 20 Augs">
          Open Registration Competition
        </TimelineCard>
        <TimelineCard span="23 Sept - 20 Augs">
          Open Registration Competition
        </TimelineCard>
        <TimelineCard span="23 Sept - 20 Augs">
          Open Registration Competition
        </TimelineCard>
        <TimelineCard span="23 Sept - 20 Augs">
          Open Registration Competition
        </TimelineCard>
        <TimelineCard span="23 Sept - 20 Augs">
          Open Registration Competition
        </TimelineCard>
        <TimelineCard span="23 Sept - 20 Augs">
          Open Registration Competition
        </TimelineCard>
        <TimelineCard span="23 Sept - 20 Augs">
          Open Registration Competition
        </TimelineCard>
      </Timeline>
      {/* <section className="flex flex-col gap-[30px] lg:hidden">
        <div className="px-11">
          <SectionHeader text="WORKSHOP QNA" />
        </div>
        <Accordion
          type="single"
          collapsible
          className="text-sm font-normal text-white"
        >
          <AccordionItem value="accord-1">
            <AccordionTrigger>
              Apa yang harus dibawa atau disiapkan oleh peserta?
            </AccordionTrigger>
            <AccordionContent>
              Peserta hanya perlu membawa laptop.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="accord-2">
            <AccordionTrigger>
              Apakah boleh mengikuti workshop meskipun belum mengenal materi
              seminarnya sama sekali?
            </AccordionTrigger>
            <AccordionContent>
              Tentu saja boleh, karena kami akan mempelajari materi dasar yang
              ramah untuk pemula.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="accord-3">
            <AccordionTrigger>
              Apakah materi workshop tetap dapat diperoleh jika kami tidak dapat
              mengikuti seminar tersebut?
            </AccordionTrigger>
            <AccordionContent>
              Materi akan kami kirimkan melalui grup WhatsApp setelah acara
              selesai.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="accord-4">
            <AccordionTrigger>
              Apakah diperbolehkan membawa makanan/minuman sendiri selama acara
              berlangsung?
            </AccordionTrigger>
            <AccordionContent>
              Peserta diperbolehkan membawa makanan dan minuman sendiri, namun
              kami juga menyediakan camilan dan minuman selama acara.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="accord-5">
            <AccordionTrigger>
              Apakah akan ada rekaman tayangan ulang?
            </AccordionTrigger>
            <AccordionContent>
              Tidak, karena acara ini sepenuhnya dilaksanakan secara offline.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section> */}
      <QNA id="workshop-qna" title="workshop qna">
        <SpeechBubble
          id="speech1"
          question="Apa yang harus dibawa atau disiapkan oleh peserta?"
        >
          Peserta hanya perlu membawa laptop.
        </SpeechBubble>
        <SpeechBubble
          id="speech2"
          question="Apakah boleh mengikuti workshop meskipun belum mengenal materi seminarnya sama sekali?"
        >
          Tentu saja boleh, karena kami akan mempelajari materi dasar yang ramah
          untuk pemula.
        </SpeechBubble>
        <SpeechBubble
          id="speech3"
          question="Apakah materi workshop tetap dapat diperoleh jika kami tidak dapat mengikuti seminar tersebut?"
        >
          Materi akan kami kirimkan melalui grup WhatsApp setelah acara selesai.
        </SpeechBubble>
        <SpeechBubble
          id="speech4"
          question="Apakah diperbolehkan membawa makanan/minuman sendiri selama acara berlangsung?"
        >
          Peserta diperbolehkan membawa makanan dan minuman sendiri, namun kami
          juga menyediakan camilan dan minuman selama acara.
        </SpeechBubble>
        <SpeechBubble
          id="speech5"
          question="Apakah akan ada rekaman tayangan ulang?"
        >
          Tidak, karena acara ini sepenuhnya dilaksanakan secara offline.
        </SpeechBubble>
      </QNA>
    </>
  );
}
