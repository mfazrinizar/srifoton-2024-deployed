"use client";

import InfoHero from "@/components/Root/InfoHero";
import { QNA, SpeechBubble } from "@/components/Root/QNA";
import { Timeline, TimelineCard } from "@/components/Root/Timeline";
import React from "react";
import ContactPerson from "@/components/Root/ContactPerson";
// import useClose from "@/hooks/useClose";

type Props = {};

export default function UIUXInfo({}: Props) {
  // useClose(true);
  return (
    <>
      <InfoHero
        id="hero-ui-ux"
        header="ui/ux design"
        subheader="srifoton 2024"
        src="/img/ui-ux.png"
        href="ui-ux/daftar"
        guideHref="https://drive.google.com/file/d/1vter2VFboUKNjMbPlTW3sfZenIunPbeB/view?usp=sharing"
        card1title="Keterampilan Desain"
        card1content="Mengasah keterampilan desain, prinsip, estetika, fungsionalitas."
        card2title="Inovasi dan Kreativitas"
        card2content="Mengembangkan pola pikir yang inovatif dan kreatif"
      >
        UI/UX Design adalah proses pembuatan antarmuka yang mengutamakan
        keindahan dan pengalaman pengguna, bertujuan membuat situs web atau
        aplikasi lebih menarik dan memuaskan. Kompetisi ini terdiri dari dua
        babak: penyisihan, di mana peserta mengirimkan desain sesuai format yang
        ditentukan, dan final, di mana peserta yang lolos seleksi juri
        mempresentasikan desainnya melalui video conference. Tema kompetisi
        UI/UX Design SRIFOTON 2024 adalah &quot;Digital Innovation for a
        Sustainable Future,&quot; dengan fokus pada desain di bidang ekonomi,
        pendidikan, atau lingkungan.
      </InfoHero>
      <Timeline title="competition timeline">
        <TimelineCard span="10 Aug - 10 Oct">Pendaftaran</TimelineCard>
        <TimelineCard span="11 Oct">Technical Meeting</TimelineCard>
        <TimelineCard span="12 Oct - 15 Oct">Pengumpulan Karya</TimelineCard>
        <TimelineCard span="24 Oct">Pengumuman Finalis</TimelineCard>
        <TimelineCard span="26 Oct">Presentasi Final</TimelineCard>
        <TimelineCard span="3 Nov">Pengumuman </TimelineCard>
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
        contactPerson1="kian fikram ayyubi"
        WA1="0878-9781-4879"
        Line1="fikramayyubi30"
        WaHref1="https://api.whatsapp.com/send?phone=6287897814879&text=Halo"
        LineHref1="https://line.me/R/ti/p/fikramayyubi30"
        contactPerson2="Nazwa Abelia Nabira"
        WA2="0853-8181-3122"
        Line2="nxabell"
        WaHref2="https://api.whatsapp.com/send?phone=6285381813122&text=Halo"
        LineHref2="https://line.me/R/ti/p/nxabell"
      />
    </>
  );
}
