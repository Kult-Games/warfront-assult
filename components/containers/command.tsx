import React from "react";
import Image from "next/image";
import CommandBgImg from "@/public/imgs/command-bg-img.webp";
import CommaandBoxImg from "@/public/imgs/commend-box-img.png";
import MobileCommandBgImg from "@/public/imgs/mobile-command-bg-img.png";
import MobileCommandBoxImg from "@/public/imgs/mobile-commend-box-img.png";

const Command = () => {
  return (
    <section className="overflow-hidden relative w-screen h-full">
      <Image
        src={MobileCommandBgImg}
        alt="img"
        className="lg:hidden h-full w-full"
      />
      <Image
        alt="img"
        src={CommandBgImg}
        placeholder="blur"
        priority
        className="hidden lg:block object-cover w-full inset-0 -z-10"
      />
      <Image
        src={MobileCommandBoxImg}
        alt="img"
        // className=" lg:hidden absolute  "style={{top:"50%", left:"50%", transform:translate(-50%,-50%)}}
        className="lg:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
      <Image
        src={CommaandBoxImg}
        alt="img"
        className="hidden lg:block absolute self-center mx-auto inset-0"
      />
      <div className="absolute w-[70%] lg:w-[50%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <div className="containe flex flex-col gap-6 lg:gap-12 justify-center items-center">
          <h1 className="font-alumiSans uppercase font-extrabold text-[32px] lg:text-[64px] text-white text-center w-[80%] leading-[40px] lg:leading-none">
            The Warfront awaits your command
          </h1>
          <p className="font-alumiSans font-semibold text-[18px] lg:font-medium lg:text-2xl text-white text-center px-4 lg:px-0 w-[88%] lg:w-[91%]">
            Amidst a world plunged into the throes of global conflict,
            governments vied for control, and alliances shattered like fragile
            glass. The chaos birthed a new breed of warriors, elite operatives
            known as &quot; Sentinels,&quot; who stood as the last line of
            defense against the encroaching darkness.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Command;
