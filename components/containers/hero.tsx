import Image from "next/image";
import HeroBgImg from "@/public/imgs/hero-bg.png";
import HeroBgGradientImg from "@/public/imgs/hero-bg-gradient.png";
import HeroCharactorImg from "@/public/imgs/hero-character.png";

import React from "react";

const hero = () => {
  return (
    <section className="w-full h-full overflow-hidden relative">
      <div className="inset-0 overflow-hidde">
        <Image
          src={HeroBgImg}
          alt="img"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
        <Image
          src={HeroBgGradientImg}
          alt="img"
          className="w-full h-full relative"
        />
      </div>
      <div className="absolute top-0 w-full h-full z-20">
        <div className="flex items-center h-full relative">
          <Image src={HeroCharactorImg} alt="img" className="" />
          <div className="absolute flex flex-col items-center gap-[39px] right-0 w-[70%] mt-10">
            <div className="flex flex-col items-center">
              <h3 className="font-syncopate uppercase font-bold text-[48px] tracking-[10px] borde">
                warfront
              </h3>
              <h1 className="font-montserrat text-[190px] font-extrabold uppercase leading-[150px] borde">
                assault
              </h1>
            </div>
            <div className="flex flex-col items-center gap-10">
              <p className="text-xl font-light font-montserrat text-center w-[64%]">
                Prepare for the ultimate war experience as you step onto the
                front lines. Command your troops, strategize your moves, and
                lead your faction to victory. The battlefield awaits your
                tactical brilliance and fearless leadership.
              </p>
              <div className="flex gap-6">
                <button className="font-montserrat font-medium text-base px-8 py-4 border">
                  PRE-REGISTER
                </button>
                <button className="font-montserrat font-medium text-base px-8 py-4 border">
                  PRE-REGISTER
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default hero;
