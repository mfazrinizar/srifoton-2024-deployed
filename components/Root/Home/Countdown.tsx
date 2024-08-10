"use client";

import Time from "./Time";
import CardCrook from "../CardCrook";
import useCountdown from "@/hooks/useCountdown";
import Image from "next/image";

function DoubleDot() {
  return (
    <span className="mx-1 text-xl md:mx-3 md:text-3xl lg:mx-4 lg:text-5xl xl:mx-5 xl:text-6xl">
      :
    </span>
  );
}

export default function Countdown() {
  let { days, hours, minutes, seconds } = useCountdown({
    targetTime: "09/12/2024 23:59:59",
  });

  return (
    <section id="countdown">
      <div className="flex w-full justify-center">
        <CardCrook className="relative mx-[7.5vw] !w-full w-full md:!w-full">
          <Image
            src="/img/gear.png"
            alt="gear"
            className="absolute left-[2.8%] top-[8%] !w-[15%] object-contain"
            quality={100}
            width={216}
            height={171}
            loading="eager"
          />
          <Image
            src="/img/hourglass.png"
            alt="hourglass"
            className="absolute bottom-0 right-0 !w-[15%] object-contain"
            quality={100}
            width={144}
            height={232}
            loading="eager"
          />
          <div className="mx-auto mb-[12%] mt-[10%] flex flex-col items-center justify-center text-center">
            <h3 className="w-[90%] align-top text-xs text-text-300 sm:text-xl lg:text-3xl xl:text-[45px]">
              OPENING CEREMONY
              <div className="mt-1 rounded-md border-2 border-[#868365] bg-[#868365] md:mt-3 md:h-1 lg:mt-4 xl:mt-5"></div>
            </h3>
            <div className="mx-auto mt-5 flex items-center justify-center md:mt-10 lg:mt-16 lg:gap-4 xl:mt-20">
              <Time value={days} desc={"Hari"} />
              <DoubleDot />
              <Time value={hours} desc={"Jam"} />
              <DoubleDot />
              <Time value={minutes} desc={"Menit"} />
              <DoubleDot />
              <Time value={seconds} desc={"Detik"} />
            </div>
          </div>
        </CardCrook>
      </div>
    </section>
  );
}
