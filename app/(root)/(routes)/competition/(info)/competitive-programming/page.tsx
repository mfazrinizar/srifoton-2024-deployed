"use client";

import InfoHero from "@/components/Root/InfoHero";
import { QNA, SpeechBubble } from "@/components/Root/QNA";
import { Timeline, TimelineCard } from "@/components/Root/Timeline";
import React from "react";
import ContactPerson from "@/components/Root/ContactPerson";
// import useClose from "@/hooks/useClose";

type Props = {};

export default function CompetitiveProgrammingInfo({}: Props) {
  // useClose(true);

  return (
    <>
      <InfoHero
        id="hero-cp"
        header="competitive programming"
        subheader="srifoton 2024"
        src="/img/comp-programming.png"
        href="competitive-programming/daftar"
        guideHref="https://drive.google.com/file/d/17X6PKH13AGZ9SVMiC9HANX-pVfIdvYxk/view?usp=sharing"
        card1title="Algoritma dan Struktur Data"
        card1content="Memperdalam pengetahuan teknis dan keterampilan pemrograman"
        card2title="Problem Solving"
        card2content="Melatih kemampuan untuk memecahkan masalah secara efektif dan efisien"
      >
        Competitive Programming adalah sebuah kompetisi yang menantang peserta
        untuk memecahkan masalah-masalah kompleks menggunakan kemampuan
        pemrograman mereka. Kompetisi ini biasanya mencakup serangkaian
        tantangan yang memerlukan pemahaman struktur data, logika matematika,
        dan kemampuan problem-solving yang efektif. Dalam lomba ini, peserta
        bisa berpartisipasi secara individu atau dalam tim dan harus
        menyelesaikan berbagai masalah dalam waktu yang telah ditentukan. Setiap
        masalah memiliki tingkat kesulitan yang bervariasi dan menguji berbagai
        aspek dari kemampuan pemrograman.
      </InfoHero>
      <Timeline title="competition timeline">
        <TimelineCard span="10 Aug - 10 Oct">Pendaftaran</TimelineCard>
        <TimelineCard span="11 Oct">Technical Meeting</TimelineCard>
        <TimelineCard span="12 Oct">Babak Penyisihan</TimelineCard>
        <TimelineCard span="13 Oct">Pengumuman Finalis</TimelineCard>
        <TimelineCard span="19 Oct">Babak Final</TimelineCard>
        <TimelineCard span="3 Nov">Pengumuman </TimelineCard>
      </Timeline>
      <QNA id="competition-qna" title="competition qna">
        <SpeechBubble
          id="speech1"
          question="Bagaimana cara mendaftarkan tim pada kompetisi Competitive Programming SRIFOTON 2024?"
        >
          Peserta dalam mendaftarkan tim melalui website SRIFOTON
        </SpeechBubble>
        <SpeechBubble
          id="speech2"
          question="Berapa jumlah minimal dan maksimal anggota dalam satu tim?"
        >
          Peserta dapat mendaftar pada kompetisi ini secara individu ataupun
          dengan membentuk tim selama anggota tim tidak lebih dari 2 orang
        </SpeechBubble>
        <SpeechBubble
          id="speech3"
          question="Apa konsekuensi yang akan diperoleh jika tim melanggar syarat dan ketentuan kompetisi?"
        >
          Jika tim melanggar syarat dan ketentuan dari kompetisi maka tim akan
          diskualifikasi
        </SpeechBubble>
        <SpeechBubble
          id="speech4"
          question="Apakah akun Hackerrank akan disediakan oleh panitia?"
        >
          Tidak, Peserta akan mempersiapkan akun Hackerank masing-masing,
          kemudian di data pada form
        </SpeechBubble>
        <SpeechBubble
          id="speech5"
          question="Bolehkah dalam satu tim mendaftar jika berasal dari jenjang pendidikan berbeda dan dari jurusan yang berbeda?"
        >
          Diperbolehkan. Asalkan setiap tim beranggotakan mahasiswa yang berasal
          dari satu universitas atau perguruan tinggi yang sama.
        </SpeechBubble>
      </QNA>
      <ContactPerson
        contactPerson1="Rakha Abhirama"
        WA1="0882-8638-5975"
        Line1="rakha1604"
        WaHref1="https://api.whatsapp.com/send?phone=6288286385975&text=Halo"
        LineHref1="https://line.me/R/ti/p/rakha1604"
      />
    </>
  );
}
