import Hero from "@/components/Root/Workshop/Hero";
import IDcard from "@/components/Root/Workshop/IDcard";
import { Flashcard, Flashcards, Benefits } from "@/components/Root/Workshop/Flashcards";
import WorkshopOption from "@/components/Root/Workshop/WorkshopOption";
import { QNA, SpeechBubble } from "@/components/Root/Workshop/QNA";
import { Timeline, TimelineCard } from "@/components/Root/Timeline";
import React, { Suspense } from "react";

type Props = {};

export default function Workshop({}: Props) {
  return (
    <>
      <Hero id="hero-workshop" header="workshop" subheader="srifoton 2024" type="overview" src="/img/gallery1.png" href="/register">
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.”
      </Hero>
      <IDcard title="our speaker" name="nama speaker" src1="/img/gallery1.png" src2="/img/gallery1.png">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales
      </IDcard>
      <Flashcards id="workshop-option" title="workshop options" >
        <Flashcard title= "workshop offline ticket" previewTitle= "offline ticket" href= "/register" price="80.000" per="person">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur
          </p>
          <Benefits>
            <p>E-Sertifikat</p>
            <p>Doorprize dan Relasi</p>
            <p>Free Basic Class Dicoding</p>
            <p>Snack + Free Lunch</p>
          </Benefits>
        </Flashcard>
        <Flashcard title= "workshop online ticket" previewTitle= "online ticket" href= "/register" price="50.000" per="person">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur
          </p>
          <Benefits>
            <p>E-Sertifikat</p>
            <p>Doorprize dan Relasi</p>
            <p>Free Basic Class Dicoding</p>
          </Benefits>
        </Flashcard>
      </Flashcards>
      <Timeline title="workshop timeline">
        <TimelineCard span="23 Sept - 20 Augs">Open Registration Competition</TimelineCard>
        <TimelineCard span="23 Sept - 20 Augs">Open Registration Competition</TimelineCard>
        <TimelineCard span="23 Sept - 20 Augs">Open Registration Competition</TimelineCard>
        <TimelineCard span="23 Sept - 20 Augs">Open Registration Competition</TimelineCard>
        <TimelineCard span="23 Sept - 20 Augs">Open Registration Competition</TimelineCard>
        <TimelineCard span="23 Sept - 20 Augs">Open Registration Competition</TimelineCard>
        <TimelineCard span="23 Sept - 20 Augs">Open Registration Competition</TimelineCard>
        <TimelineCard span="23 Sept - 20 Augs">Open Registration Competition</TimelineCard>
      </Timeline>
      <QNA id="workshop-qna" title="workshop qna">
        <SpeechBubble question="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in?">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. 11111
        </SpeechBubble>
        <SpeechBubble question="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in?">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. 22222
        </SpeechBubble>
        <SpeechBubble question="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in?">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. 33333
        </SpeechBubble>
        <SpeechBubble question="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in?">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. 44444
        </SpeechBubble>
        <SpeechBubble question="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in?">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. 55555
        </SpeechBubble>
      </QNA>
    </>
  );
}