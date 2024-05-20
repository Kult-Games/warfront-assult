import React from "react";
import Image from "next/image";
import CommandBgImg from "@/public/imgs/command-bg-img.webp";
import CommaandBoxImg from "@/public/imgs/commend-box-img.png";
import MobileCommandBgImg from "@/public/imgs/mobile-command-bg-img.webp";
import MobileCommandBoxImg from "@/public/imgs/mobile-commend-box-img.png";
import TextGoldenGradientImg from "@/public/imgs/command-text-gradient.png";

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
        className="md:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
      <Image
        src={CommaandBoxImg}
        alt="img"
        className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
      <div className="absolute  w-[85%] md:w-[70%] lg:w-[67%] xl:w-[47%] 2xl:w-[35%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="containe flex flex-col gap-3 md:gap-16 lg:gap-12 justify-center items-center">
          <div className="relative flex justify-center">
            <h1 className="bg-text font-alumiSans uppercase font-extrabold text-[32px] md:text-[40px] lg:text-[64px] text-white text-center w-[83%] leading-[30px] lg:leading-none">
              Command Your Squad, Conquer the Frontline!
            </h1>
            <Image
              src={TextGoldenGradientImg}
              alt="img"
              // className="absolute border -top-[50] lg:-top-[75px] lg:-left-[50px]"
              className="absolute  -top-[30px] lg:-top-[75px]"
            />
          </div>
          <p className="font-alumiSans font-semibold text-[18px] lg:font-medium lg:text-2xl text-white text-center px-4 lg:px-0 w-[85%] md:w-[95%] lg:w-full">
            {/* Amidst a world plunged into the throes of global conflict,
            governments vied for control, and alliances shattered like fragile
            glass. The chaos birthed a new breed of warriors, elite operatives
            known as &quot; Sentinels,&quot; who stood as the last line of
            defense against the encroaching darkness. */}
            Warfront Assault delivers an electrifying multiplayer experience
            where every second counts. Players navigate through explosive game
            modes like Kill Confirmed and Rush, each demanding sharp tactics and
            teamwork. Equip yourself from an extensive arsenal, and adapt to the
            evolving battlefield. Prepare for adrenaline-pumping action and
            strategic gameplay that challenges your combat skills at every turn
          </p>
        </div>
      </div>
    </section>
  );
};

export default Command;
