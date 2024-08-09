import React from "react";
import CardCrook from "@/components/Root/CardCrook.dasboard";
import FormAccountData from "@/components/Dashboard/FormAccountData";
import FormRegistration from "@/components/Auth/FormRegistration";
import Image from "next/image";

export default function page() {
  return (
    <section
      id="registration"
      className="flex flex-col justify-end space-y-10 pb-16 lg:flex-row lg:space-x-8 lg:space-y-2 lg:p-0"
    >
      <div className="left-[6.2917vw] flex flex-col space-y-8 text-center text-white lg:fixed">
        <h3 className="font-monument text-xl xl:text-2xl">
          Create Your Account
        </h3>
        <p className="text-lg xl:text-xl">
          Hai, silakan buat akunmu terlebih dahulu <br /> di bawah sini!
        </p>
        <Image
          src={"/img/maskot.png"}
          width={300}
          height={300}
          alt="maskot"
          className="mx-auto hidden size-96 lg:block object-contain"
        ></Image>
      </div>
      <CardCrook className="mx-auto !w-full bg-red-500 font-monument lg:!w-1/2">
        <img
          src="./img/stamp.png"
          alt="stamp"
          className="absolute right-4 top-4 hidden size-20 md:right-12 md:top-4 lg:right-6 lg:top-2 lg:block lg:size-32"
        />
        <h3 className="text-center text-xl">Registration</h3>
        <FormRegistration />
      </CardCrook>
    </section>
  );
}
