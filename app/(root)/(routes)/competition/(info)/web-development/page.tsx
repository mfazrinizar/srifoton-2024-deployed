"use client";

import InfoHero from "@/components/Root/InfoHero";
import { QNA, SpeechBubble } from "@/components/Root/QNA";
import { Timeline, TimelineCard } from "@/components/Root/Timeline";
import React from "react";
import ContactPerson from "@/components/Root/ContactPerson";
// import useClose from "@/hooks/useClose";

type Props = {};

export default function WebDevelopmentInfo({}: Props) {
  // useClose(true);
  return (
    <>
      <InfoHero
        id="hero-webdev"
        header="web development"
        subheader="srifoton 2024"
        src="/img/web-dev.png"
        href="web-development/daftar"
        guideHref="https://drive.google.com/file/d/15UDFqJCMATxb37RtiBtWk1WSIcgJr4EL/view?usp=sharing"
        card1title="Pengembangan Soft Skills"
        card1content="Meningkatkan keterampilan dalam berbagai teknologi web"
        card2title="Keterampilan Teknis"
        card2content="mengembangkan soft skills seperti manajemen waktu, komunikasi, dan presentasi."
      >
        Web Development adalah cabang lomba dalam Srifoton yang diselenggarakan
        oleh HMIF Universitas Sriwijaya. Lomba ini menguji kemampuan peserta
        dalam berkreasi dan berinovasi melalui pembuatan website untuk
        menyelesaikan masalah. Dengan tema &quot;Future Web: Developing
        Sustainable Digital Solutions,&quot; peserta diajak mengembangkan solusi
        digital yang berkontribusi pada salah satu atau lebih dari 17 Tujuan
        Pembangunan Berkelanjutan (SDG) PBB. Peserta diharapkan menciptakan
        inovasi web yang membantu mengatasi tantangan global berdasarkan SDG
        tersebut.
      </InfoHero>
      <Timeline title="competition timeline">
        <TimelineCard span="10 Aug - 10 Oct">Pendaftaran</TimelineCard>
        <TimelineCard span="11 Oct">Technical Meeting</TimelineCard>
        <TimelineCard span="11 Oct - 20 Oct">Pengumpulan Karya</TimelineCard>
        <TimelineCard span="3 Nov">Pengumuman Pemenang</TimelineCard>
      </Timeline>
      <QNA id="competition-qna" title="competition qna">
        <SpeechBubble
          id="speech1"
          question="Apakah karya yang akan diperlombakan boleh menggunakan karya yang sudah pernah diikutsertakan dalam kompetisi lain?"
        >
          Tidak diperbolehkan. Apabila ketahuan melakukan hal tersebut, maka
          panitia SRIFOTON berhak memberikan sanksi terhadap peserta yang
          bersangkutan
        </SpeechBubble>
        <SpeechBubble
          id="speech2"
          question="Jika saya telah mengikuti salah satu cabang lomba SRIFOTON 2024, Apakah saya boleh juga mengikuti cabang lomba yang lain?"
        >
          Boleh, Peserta dapat mengikuti semua cabang lomba tetapi hanya bisa
          menjadi ketua tim untuk satu cabang lomba saja (misal: menjadi ketua
          tim untuk lomba UI/UX Design saja)
        </SpeechBubble>
        <SpeechBubble
          id="speech3"
          question="Bolehkah satu tim terdiri atas anggota yang berbeda universitas atau perguruan tinggi?"
        >
          Tidak boleh. Setiap tim harus beranggotakan mahasiswa yang berasal
          dari satu universitas atau perguruan tinggi yang sama
        </SpeechBubble>
        <SpeechBubble
          id="speech4"
          question="Jika tim saya dinyatakan lolos ke tahap final tetapi kami tidak dapat hadir pada acara presentasi final maka konsekuensi apa yang akan didapat?"
        >
          Tim tersebut akan dinyatakan mengundurkan diri dari tahap presentasi
          final
        </SpeechBubble>
        <SpeechBubble
          id="speech5"
          question="Berapakah minimal dan jumlah maksimal anggota dalam satu tim?"
        >
          Peserta dapat mendaftar pada kompetisi ini secara individu ataupun
          dengan membentuk tim selama anggota tim tidak lebih dari 3 orang
        </SpeechBubble>
      </QNA>
      <ContactPerson
        contactPerson1="darrell satriano"
        WA1="0812-7114-8877"
        Line1="darrell.s"
        WaHref1="https://api.whatsapp.com/send?phone=6281271148877&text=Halo"
        LineHref1="https://line.me/R/ti/p/darrell.s"
        contactPerson2="Muhammad Raffi Tri Ariady"
        WA2="0877-6193-2815"
        Line2="raffi3ariady"
        WaHref2="https://api.whatsapp.com/send?phone=6287761932815&text=Halo"
        LineHref2="https://line.me/R/ti/p/raffi3ariady"
      />
    </>
  );
}
