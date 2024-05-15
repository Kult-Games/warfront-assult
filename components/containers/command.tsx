import React from "react";
import Image from "next/image";
import CommandBgImg from "@/public/imgs/command-bg-img.webp";
import CommaandBoxImg from "@/public/imgs/commend-box-img.png";

const Command = () => {
  return (
    <section className="overflow-hidden relative w-screen h-full">
      <Image
        alt="img"
        src={CommandBgImg}
        placeholder="blur"
        priority
        className="object-cover w-full inset-0 -z-10"
      />
      <Image
        src={CommaandBoxImg}
        alt="img"
        className="absolute self-center mx-auto inset-0"
      />
      <div className="absolute self-center mx-auto inset-0 w-[46%] h-[50%] flex flex-col gap-12 items-center justify-center">
        <h1 className="font-alumiSans uppercase font-extrabold text-[64px] text-white text-center w-[80%] leading-none">The Warfront awaits your command</h1>
        <p className="font-alumiSans font-medium text-2xl text-white text-center">
          Amidst a world plunged into the throes of global conflict, governments
          vied for control, and alliances shattered like fragile glass. The
          chaos birthed a new breed of warriors, elite operatives known as
          &quot; Sentinels,&quot; who stood as the last line of defense against the
          encroaching darkness.
        </p>
      </div>
    </section>
  );
};

export default Command;
