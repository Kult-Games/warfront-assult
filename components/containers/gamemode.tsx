"use client";

import React from "react";
import Image from "next/image";
import GameModebgImg from "@/public/imgs/game-mode-bg-img1.png";
import KillConfirmedImg from "@/public/imgs/kill-confirmed-bg-img.png";
import TDMImg from "@/public/imgs/team-deathmatch-img.png";
import FreeForAllImg from "@/public/imgs/free-for-all-img.png";
import CaptureTheFlag from "@/public/imgs/capture-the-flag-img.png";
import OneTextImg from "@/public/imgs/01-img.png";
import ThreeTextImg from "@/public/imgs/03-img.png";
import FourTextImg from "@/public/imgs/04-img.png";
import TwoTextImg from "@/public/imgs/02-img.png";
import LeftArrowImg from "@/public/imgs/left-arrow-img.png";
import RightArrowImg from "@/public/imgs/right-arrow-img.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Gamemode = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index: any, className: any) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <section className="relative">
      <div className="flex flex-col items-center justify-center ">
        <Image
          src={GameModebgImg}
          alt="img"
          className="object-cover w-full inset-0 opacity-60"
        />
        <h1 className=" bg-text font-alumiSans font-extrabold text-2xl lg:text-[80px] absolute z-20">
          EXPLORE VARIOUS GAME MODES
        </h1>
      </div>
      <div className="relative">
        <Swiper
          modules={[EffectFade, Navigation]}
          effect={"fade"}
          navigation={{
            prevEl: ".slide-prev",
            nextEl: ".slide-next",
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image
              src={KillConfirmedImg}
              alt="img"
              className="object-cover w-full inset-0 -z-10"
            />

            <div className="container absolute bottom-0 mb-24 2xl:mb-32">
              <div className="flex gap-10 justify-between">
                <Image src={OneTextImg} alt="img" className="" />

                <div className="w-[60%] flex flex-col ">
                  <h1 className="font-alumiSans font-bold text-[120px] text-white uppercase leading-none">
                    kill confirmed
                  </h1>
                  <p className="font-alumiSans font-medium text-2xl w-[65%]">
                    The Warfront beckons, and the Syndicate&apos;s grasp
                    tightens. Will you rise as a Sentinel, forge your legacy,
                    and shape the course of history? The Warfront awaits your
                    command.
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
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src={TDMImg}
              alt="img"
              className="object-cover w-full inset-0 -z-10"
            />

            <div className="container absolute bottom-0 mb-24 2xl:mb-32">
              <div className="flex gap-24 justify-between">
                <Image src={TwoTextImg} alt="img" className="" />

                <div className="flex flex-col w-[60%]">
                  <h1 className="font-alumiSans font-bold text-[120px] text-white uppercase leading-none">
                    team deathmatch
                  </h1>
                  <p className="font-alumiSans font-medium text-2xl w-[65%]">
                    The Warfront beckons, and the Syndicate&apos;s grasp
                    tightens. Will you rise as a Sentinel, forge your legacy,
                    and shape the course of history? The Warfront awaits your
                    command.
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
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={FreeForAllImg}
              alt="img"
              className="object-cover w-full inset-0 -z-10"
            />

            <div className="container absolute bottom-0 mb-24 2xl:mb-32">
              <div className="flex gap-24 justify-between">
                <Image src={ThreeTextImg} alt="img" />

                <div className="flex flex-col w-[60%]">
                  <h1 className="font-alumiSans font-bold text-[120px] text-white uppercase leading-none">
                    Free For All
                  </h1>
                  <p className="font-alumiSans font-medium text-2xl w-[65%]">
                    The Warfront beckons, and the Syndicate&apos;s grasp
                    tightens. Will you rise as a Sentinel, forge your legacy,
                    and shape the course of history? The Warfront awaits your
                    command.
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
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={CaptureTheFlag}
              alt="img"
              className="object-cover w-full inset-0 -z-10"
            />

            <div className="container absolute bottom-0 mb-24 2xl:mb-32">
              <div className="flex gap-24 justify-between">
                <Image src={FourTextImg} alt="img" />

                <div className="flex flex-col w-[60%]">
                  <h1 className="font-alumiSans font-bold text-[120px] text-white uppercase leading-none">
                    CAPTURE THE FLAG
                  </h1>
                  <p className="font-alumiSans font-medium text-2xl w-[65%]">
                    The Warfront beckons, and the Syndicate&apos;s grasp
                    tightens. Will you rise as a Sentinel, forge your legacy,
                    and shape the course of history? The Warfront awaits your
                    command.
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
                </div>
              </div>
            </div>
          </SwiperSlide>
          <div className="flex gap-12 absolute bottom-12 left-[41%] z-10">
            <button className="slide-prev">
            <Image src={LeftArrowImg} alt="img" className="cursor-pointer" />
            </button>
            <button  className="slide-next">
            <Image src={RightArrowImg} alt="img" className="cursor-pointer" />
            </button>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Gamemode;
