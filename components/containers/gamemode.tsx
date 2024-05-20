"use client";

import React from "react";
import Image from "next/image";
import GameModebgImg from "@/public/imgs/game-mode-bg-img1.png";

import KillConfirmdBgImg from "@/public/imgs/kill-confirmed-bg-img.webp";
import TeamDathmatchBgImg from "@/public/imgs/team-deathmatch-bg-img.webp";
import FreeForAllBgImg from "@/public/imgs/free-for-all-bg-img.webp";
import CaptureTheFlagBgImg from "@/public/imgs/capture-the-flag-img.webp";
import SearchDestroyImg from "@/public/imgs/search-destroy-bg-img.webp";
import ConquestBgImg from "@/public/imgs/conquest-bg-img.webp";
import RusBgImg from "@/public/imgs/rush-bg-img.webp";

import OneTextImg from "@/public/imgs/01-img.png";
import TwoTextImg from "@/public/imgs/02-img.png";
import ThreeTextImg from "@/public/imgs/03-img.png";
import FourTexteImg from "@/public/imgs/04-img.png";
import FiveTextImg from "@/public/imgs/05-img.png";
import SixTextImg from "@/public/imgs/06-img.png";
import SevenTextImg from "@/public/imgs/07-img.png";

import LeftArrowImg from "@/public/imgs/left-arrow-img.png";
import RightArrowImg from "@/public/imgs/right-arrow-img.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper/modules";
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
    <section id="game-mode" className="relative">
      <div className="flex flex-col items-center justify-center ">
        <Image
          src={GameModebgImg}
          alt="img"
          className="object-cover w-full h-56 inset-0 opacity-60"
        />
        <h1 className=" bg-text font-alumiSans font-extrabold text-[32px] lg:text-[80px] absolute">
          OUR GAME MODES
        </h1>
      </div>
      <div className="relative ">
        <Swiper
          modules={[EffectFade, Navigation]}
          effect={"fade"}
          loop={true}
          navigation={{
            prevEl: ".slide-prev",
            nextEl: ".slide-next",
          }}
        >
          <div className="absolute bottom-12 z-20 left-[44%] lg:left-[48%] flex gap-8">
            <button className="slide-prev">
              <Image
                src={LeftArrowImg}
                alt="img"
                className="cursor-pointer h-[40px] w-[40px] lg:h-[60px] lg:w-[60px]"
              />
            </button>
            <button className="slide-next">
              <Image
                src={RightArrowImg}
                alt="img"
                className="cursor-pointer h-[40px] w-[40px] lg:h-[60px] lg:w-[60px]"
              />
            </button>
          </div>
          <SwiperSlide>
            <Image
              src={KillConfirmdBgImg}
              alt="img"
              className="object-cover h-[389px] w-[749px] md:h-full md:w-full inset-0 -z-10"
            />

            <div className="container absolute bottom-0 lg:left-[10%] mb-20 lg:mb-24 2xl:mb-32">
              <div className="flex gap-5 lg:gap-10 justify-between">
                <Image
                  src={OneTextImg}
                  alt="img"
                  // className="h-[144px] w-[130px] md:h-auto md:w-auto"
                  className="h-[144px] w-[130px] lg:h-[300px] lg:w-[385px]"
                />

                <div className="w-[60%] flex flex-col relative">
                  <h1 className="font-alumiSans font-bold text-[32px] lg:text-[120px] text-white uppercase leading-none">
                    kill confirmed
                  </h1>
                  <p className="font-alumiSans font-medium text-base lg:text-2xl lg:w-[65%]">
                    Players confirm kills by collecting dog tags from fallen
                    enemies.
                  </p>

                  <div className="flex gap-1 lg:gap-6 absolute bottom-4 lg:bottom-8">
                    <div className="bg-[#FF6600] w-6 lg:w-16 h-2"></div>
                    <div className="border border-[#ABABAB] w-6 lg:w-16 h-2 rounded-sm"></div>
                    <div className="border border-[#ABABAB] w-6 lg:w-16 h-2 rounded-sm"></div>
                    <div className="border border-[#ABABAB] w-6 lg:w-16 h-2 rounded-sm"></div>
                    <div className="border border-[#ABABAB] w-6 lg:w-16 h-2 rounded-sm"></div>
                    <div className="border border-[#ABABAB] w-6 lg:w-16 h-2 rounded-sm"></div>
                    <div className="border border-[#ABABAB] w-6 lg:w-16 h-2 rounded-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src={TeamDathmatchBgImg}
              alt="img"
              className="object-cover h-[389px] w-[749px] md:h-full md:w-full inset-0 -z-10"
            />

            <div className="container absolute bottom-0 lg:left-[10%] mb-20 lg:mb-24 2xl:mb-32">
              <div className="flex gap-5 lg:gap-10 justify-between">
                <Image
                  src={TwoTextImg}
                  alt="img"
                  // className="h-[144px] w-[130px] md:h-auto md:w-auto"
                  className="h-[144px] w-[130px] lg:h-[300px] lg:w-[385px]"
                />

                <div className="w-[60%] flex flex-col ">
                  <h1 className="font-alumiSans font-bold text-[32px] lg:text-[120px] text-white uppercase leading-none">
                    TEAM DEATHMATCH
                  </h1>
                  <p className="font-alumiSans font-medium text-base lg:text-2xl lg:w-[85%]">
                    Classic team-based battle, focusing on achieving a set
                    number of kills
                  </p>
                  {/* <p className="lg:hidden font-alumiSans font-medium text-base lg:text-2xl w-full">
                    Will you rise as a Sentinel, forge your legacy, and shape
                    the course of history?
                  </p> */}
                  <div className="flex gap-1 lg:gap-6 absolute bottom-4 lg:bottom-8">
                    <div className="border border-[#ABABAB] w-5 lg:w-16 h-2 rounded-sm"></div>
                    <div className="bg-[#FF6600] w-6 lg:w-16 h-2"></div>
                    <div className="border border-[#ABABAB] w-6 lg:w-16 h-2 rounded-sm"></div>
                    <div className="border border-[#ABABAB] w-6 lg:w-16 h-2 rounded-sm"></div>
                    <div className="border border-[#ABABAB] w-6 lg:w-16 h-2 rounded-sm"></div>
                    <div className="border border-[#ABABAB] w-6 lg:w-16 h-2 rounded-sm"></div>
                    <div className="border border-[#ABABAB] w-6 lg:w-16 h-2 rounded-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src={FreeForAllBgImg}
              alt="img"
              className="object-cover h-[389px] w-[749px] md:h-full md:w-full inset-0 -z-10"
            />

            <div className="container absolute bottom-0 lg:left-[10%] mb-20 lg:mb-24 2xl:mb-32">
              <div className="flex gap-5 lg:gap-10 justify-between">
                <Image
                  src={ThreeTextImg}
                  alt="img"
                  // className="h-[144px] w-[130px] md:h-auto md:w-auto"
                  className="h-[144px] w-[130px] lg:h-[300px] lg:w-[385px]"
                />

                <div className="w-[60%] flex flex-col ">
                  <h1 className="font-alumiSans font-bold text-[32px] lg:text-[120px] text-white uppercase leading-none">
                    FREE FOR ALL
                  </h1>
                  <p className=" font-alumiSans font-medium text-base lg:text-2xl lg:w-[85%]">
                    A free-for-all mode where every player competes individually
                    to achieve the highest kill count
                  </p>
                  {/* <p className="lg:hidden font-alumiSans font-medium text-base lg:text-2xl w-full">
                    Will you rise as a Sentinel, forge your legacy, and shape
                    the course of history?
                  </p> */}
                  <div className="flex gap-1 lg:gap-6 absolute bottom-4 lg:bottom-8">
                    <div className="border border-[#ABABAB] w-6 lg:w-16 h-2 rounded-sm"></div>
                    <div className="border border-[#ABABAB] w-6 lg:w-16 h-2 rounded-sm"></div>
                    <div className="bg-[#FF6600] w-6 lg:w-16 h-2"></div>
                    <div className="border border-[#ABABAB] w-6 lg:w-16 h-2 rounded-sm"></div>
                    <div className="border border-[#ABABAB] w-6 lg:w-16 h-2 rounded-sm"></div>
                    <div className="border border-[#ABABAB] w-6 lg:w-16 h-2 rounded-sm"></div>
                    <div className="border border-[#ABABAB] w-6 lg:w-16 h-2 rounded-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src={CaptureTheFlagBgImg}
              alt="img"
              className="object-cover h-[389px] w-[749px] md:h-full md:w-full inset-0 -z-10"
            />

            <div className="container absolute bottom-0 lg:left-[10%] mb-20 lg:mb-24 2xl:mb-32">
              <div className="flex gap-5 lg:gap-10 justify-between">
                <Image
                  src={FourTexteImg}
                  alt="img"
                  // className="h-[144px] w-[130px] md:h-auto md:w-auto"
                  className="h-[144px] w-[130px] lg:h-[300px] lg:w-[385px]"
                />

                <div className="w-[60%] flex flex-col ">
                  <h1 className="font-alumiSans font-bold text-[32px] lg:text-[120px] text-white uppercase leading-none">
                    CAPTURE THE FLAG
                  </h1>
                  <p className="hidden md:block font-alumiSans font-medium text-base lg:text-2xl w-[65%]">
                    Teams must infiltrate the enemy base, capture their flag,
                    and return it to their own base.
                  </p>
                  <p className="lg:hidden font-alumiSans font-medium text-base lg:text-2xl w-full">
                    Will you rise as a Sentinel, forge your legacy, and shape
                    the course of history?
                  </p>
                  <div className="flex gap-1 lg:gap-6 absolute bottom-4 lg:bottom-8">
                    <div className="border border-[#ABABAB] w-6 lg:w-16 h-2 rounded-sm"></div>
                    <div className="border border-[#ABABAB] w-6 lg:w-16 h-2 rounded-sm"></div>
                    <div className="border border-[#ABABAB] w-6 lg:w-16 h-2 rounded-sm"></div>
                    <div className="bg-[#FF6600] w-6 lg:w-16 h-2"></div>
                    <div className="border border-[#ABABAB] w-6 lg:w-16 h-2 rounded-sm"></div>
                    <div className="border border-[#ABABAB] w-6 lg:w-16 h-2 rounded-sm"></div>
                    <div className="border border-[#ABABAB] w-6 lg:w-16 h-2 rounded-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src={SearchDestroyImg}
              alt="img"
              className="object-cover h-[389px] w-[749px] md:h-full md:w-full inset-0 -z-10"
            />

            <div className="container absolute bottom-0 lg:left-[10%] mb-20 lg:mb-24 2xl:mb-32">
              <div className="flex gap-5 lg:gap-10 justify-between">
                <Image
                  src={FiveTextImg}
                  alt="img"
                  // className="h-[144px] w-[130px] md:h-auto md:w-auto"
                  className="h-[144px] w-[130px] lg:h-[300px] lg:w-[385px]"
                />

                <div className="w-[60%] flex flex-col">
                  <h1 className="font-alumiSans font-bold text-[32px] lg:text-[120px] text-white uppercase leading-none lg:leading-[100px] ">
                    SEARCH AND DESTROY
                  </h1>
                  <p className="font-alumiSans font-medium text-base lg:text-2xl lg:w-[95%]">
                    A classic mode where one team plants a bomb, and the other
                    defends or defuses
                  </p>
                  {/* <p className="lg:hidden font-alumiSans font-medium text-base lg:text-2xl w-full">
                    Will you rise as a Sentinel, forge your legacy, and shape
                    the course of history?
                  </p> */}
                  <div className="flex gap-1 lg:gap-6 absolute bottom-4 lg:bottom-8">
                    <div className="border border-[#ABABAB] w-6 lg:w-16 h-2 rounded-sm"></div>
                    <div className="border border-[#ABABAB] w-6 lg:w-16 h-2 rounded-sm"></div>
                    <div className="border border-[#ABABAB] w-6 lg:w-16 h-2 rounded-sm"></div>
                    <div className="border border-[#ABABAB] w-6 lg:w-16 h-2 rounded-sm"></div>
                    <div className="bg-[#FF6600] w-6 lg:w-16 h-2"></div>
                    <div className="border border-[#ABABAB] w-6 lg:w-16 h-2 rounded-sm"></div>
                    <div className="border border-[#ABABAB] w-6 lg:w-16 h-2 rounded-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src={ConquestBgImg}
              alt="img"
              className="object-cover h-[389px] w-[749px] md:h-full md:w-full inset-0 -z-10"
            />

            <div className="container absolute bottom-0 lg:left-[10%] mb-20 lg:mb-24 2xl:mb-32">
              <div className="flex gap-5 lg:gap-10 justify-between">
                <Image
                  src={SixTextImg}
                  alt="img"
                  // className="h-[144px] w-[130px] md:h-auto md:w-auto"
                  className="h-[144px] w-[130px] lg:h-[300px] lg:w-[385px]"
                />

                <div className="w-[60%] flex flex-col ">
                  <h1 className="font-alumiSans font-bold text-[32px] lg:text-[120px] text-white uppercase leading-none">
                    Conquest
                  </h1>
                  <p className="font-alumiSans font-medium text-base lg:text-2xl lg:w-[65%]">
                    Teams vie for control over key points on the map to gain
                    point
                  </p>
                  {/* <p className="lg:hidden font-alumiSans font-medium text-base lg:text-2xl w-full">
                    Will you rise as a Sentinel, forge your legacy, and shape
                    the course of history?
                  </p> */}
                  <div className="flex gap-1 lg:gap-6 absolute bottom-4 lg:bottom-8">
                    <div className="border border-[#ABABAB] w-6 lg:w-16 h-2 rounded-sm"></div>
                    <div className="border border-[#ABABAB] w-6 lg:w-16 h-2 rounded-sm"></div>
                    <div className="border border-[#ABABAB] w-6 lg:w-16 h-2 rounded-sm"></div>
                    <div className="border border-[#ABABAB] w-6 lg:w-16 h-2 rounded-sm"></div>
                    <div className="border border-[#ABABAB] w-5 lg:w-16 h-2 rounded-sm"></div>
                    <div className="bg-[#FF6600] w-6 lg:w-16 h-2"></div>
                    <div className="border border-[#ABABAB] w-6 lg:w-16 h-2 rounded-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src={RusBgImg}
              alt="img"
              className="object-cover h-[389px] w-[749px] md:h-full md:w-full inset-0 -z-10"
            />

            <div className="container absolute bottom-0 lg:left-[10%] mb-20 lg:mb-24 2xl:mb-32">
              <div className="flex gap-5 lg:gap-10 justify-between">
                <Image
                  src={SevenTextImg}
                  alt="img"
                  // className="h-[144px] w-[130px] md:h-auto md:w-auto"
                  className="h-[144px] w-[130px] lg:h-[300px] lg:w-[385px]"
                />

                <div className="w-[60%] flex flex-col ">
                  <h1 className="font-alumiSans font-bold text-[32px] lg:text-[120px] text-white uppercase leading-none">
                    RUSH
                  </h1>
                  <p className="font-alumiSans font-medium text-base lg:text-2xl lg:w-[65%]">
                    An attack/defense mode where attackers aim to plant bombs,
                    and defenders strive to prevent it
                  </p>
                  {/* <p className="lg:hidden font-alumiSans font-medium text-base lg:text-2xl w-full">
                    Will you rise as a Sentinel, forge your legacy, and shape
                    the course of history?
                  </p> */}
                  <div className="flex gap-1 lg:gap-6 absolute bottom-4 lg:bottom-8">
                    <div className="border border-[#ABABAB] w-6 lg:w-16 h-2 rounded-sm"></div>
                    <div className="border border-[#ABABAB] w-6 lg:w-16 h-2 rounded-sm"></div>
                    <div className="border border-[#ABABAB] w-6 lg:w-16 h-2 rounded-sm"></div>
                    <div className="border border-[#ABABAB] w-6 lg:w-16 h-2 rounded-sm"></div>
                    <div className="border border-[#ABABAB] w-6 lg:w-16 h-2 rounded-sm"></div>
                    <div className="border border-[#ABABAB] w-6 lg:w-16 h-2 rounded-sm"></div>
                    <div className="bg-[#FF6600] w-5 lg:w-16 h-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* <div className="flex gap-8 lg:gap-12 absolute bottom-10 lg:bottom-12  left-[45%] lg:left-[41%] z-10"> */}
        </Swiper>
      </div>
    </section>
  );
};

export default Gamemode;
