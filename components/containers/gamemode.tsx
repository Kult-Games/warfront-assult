import React from "react";
import Image from "next/image";
import GameModebgImg from "@/public/imgs/game-mode-bg-img1.png";
import KillConfirmedImg from "@/public/imgs/kill-confirmed-bg-img.png";
import OneTextImg from "@/public/imgs/01-img.png";
import LeftArrowImg from "@/public/imgs/left-arrow-img.png";
import RightArrowImg from "@/public/imgs/right-arrow-img.png";
const Gamemode = () => {
  return (
    <section className="relative">
      <div className="flex flex-col items-center justify-center ">
        <Image
          src={GameModebgImg}
          alt="img"
          className="object-cover w-full inset-0"
        />
        <h1 className="font-alumiSans font-extrabold text-[80px] absolute">
          EXPLORE VARIOUS GAME MODES
        </h1>
      </div>
      <div className="relative">
        <Image
          src={KillConfirmedImg}
          alt="img"
          className="object-cover w-full inset-0 -z-10"
        />

        <div className="container">
          <div className="absolute bottom-0 mb-24 2xl:mb-32 flex gap-24">
            <Image src={OneTextImg} alt="img" />

            <div className="flex flex-col">
              <h1 className="font-alumiSans font-bold text-[120px] text-white uppercase leading-none">
                kill confirmed
              </h1>
              <p className="font-alumiSans font-medium text-2xl w-[65%]">
                The Warfront beckons, and the Syndicate&apos;s grasp tightens.
                Will you rise as a Sentinel, forge your legacy, and shape the
                course of history? The Warfront awaits your command.
              </p>
              <div className="flex gap-10">
                {/* <div className="bg-red-500 h-16 w-[6px]"></div> */}
                <div className="bg-red-500 h-16 w-[6px] rotate-90 ml-8 rounded-sm border border-[#ABABAB]"></div>
                <div className="border border-[#ABABAB] h-16 w-[6px] rotate-90 ml-8 rounded-sm"></div>
                <div className="border border-[#ABABAB] h-16 w-[6px] rotate-90 ml-8 rounded-sm"></div>
                <div className="border border-[#ABABAB] h-16 w-[6px] rotate-90 ml-8 rounded-sm"></div>
                <div className="border border-[#ABABAB] h-16 w-[6px] rotate-90 ml-8 rounded-sm"></div>
                <div className="border border-[#ABABAB] h-16 w-[6px] rotate-90 ml-8 rounded-sm"></div>
                <div className="border border-[#ABABAB] h-16 w-[6px] rotate-90 ml-8 rounded-sm"></div>
              </div>
              <div className="flex gap-12 ">
                <Image
                  src={LeftArrowImg}
                  alt="img"
                  className="cursor-pointer"
                />
                <Image
                  src={RightArrowImg}
                  alt="img"
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gamemode;
