import Image from "next/image";
import HeroBgImg from "@/public/imgs/hero-bg.png";
import HeroBgGradientImg from "@/public/imgs/hero-bg-gradient.png";
import HeroCharactorImg from "@/public/imgs/hero-character.png";

import React from "react";

const hero = () => {
  return (
    <section className="w-full h-screen overflow-hidden relative">
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
          className="w-full h-screen relative"
        />
      </div>
      <div className="absolute top-0 w-full">
        <div className="flex border items-center">
          <Image src={HeroCharactorImg} alt="img" className="border " />
          <div className="text-white">
            <h3 className="font-syncopate uppercase font-bold text-[48px]">warfront</h3>
            <h1 className="font-montserrat text-[190px] font-extrabold uppercase ">assault</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default hero;
