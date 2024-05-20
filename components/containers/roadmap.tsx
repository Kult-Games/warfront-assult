"use client";
import React from "react";
import Image from "next/image";
import RoadMapBgImg from "@/public/imgs/roadmap-bg-img.webp"
import RoadMapImg from "@/public/imgs/roadmap-img.png";
import PolygonImg from "@/public/imgs/polygon-img.png";
import LeftArrowImg from "@/public/imgs/left-arrow-img.png";
import RightArrowImg from "@/public/imgs/right-arrow-img.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Roadmap = () => {
  return (
    <section className="relative w-full h-full max-lg:pb-44">
      <Image
        src={RoadMapBgImg}
        alt="dark background img"
        // className="w-full h-[622px] lg:w-full lg:h-full object-cover"
        className="w-full h-[625px] lg:w-full lg:h-full object-cover"
      />

      <div className="absolute top-0 w-full h-full ">
        <div className="container w-full h-full flex flex-col items-center justify-center gap-5">
          <h1 className="bg-text text-stroke font-alumiSans font-extrabold text-[40px] lg:text-[80px] uppercase text-center leading-none mt-16">
            game roadmap
          </h1>
          <div className="w-full flex flex-col gap-1 lg:gap-20">
            <div className="flex justify-between lg:gap-6 lg:self-end px-12">
              <button className="slide-prev ">
                <Image
                  src={LeftArrowImg}
                  alt="img"
                  className="cursor-pointer h-[36px] w-[36px] lg:h-[60px] lg:w-[60px]"
                />
              </button>
              <button className="slide-next">
                <Image
                  src={RightArrowImg}
                  alt="img"
                  className="cursor-pointer h-[36px] w-[36px] lg:h-[60px] lg:w-[60px]"
                />
              </button>
            </div>

            {/* <div className="flex gap-10 flex-col lg:flex-row items-center justify-center border-t-4">
              <Swiper slidesPerView={4}>
              <SwiperSlide>
              <div className="relative w-[280px] h-[487px]  backdrop-blur bg-white bg-opacity-10 flex flex-col justify-center items-center">
                <div className="absolute -top-[48px] flex justify-center items-center">
                  <Image src={PolygonImg} alt="img" className="" />
                  <div className="absolute flex flex-col items-center uppercase">
                    <h3 className=" font-alumiSans font-semibold text-[40px] leading-none">
                      q1
                    </h3>
                    <p className="font-alumiSans font-normal text-2xl">2024</p>
                  </div>
                </div>
                <Image
                  src={RoadMapImg}
                  alt="img"
                  className="mt-[71px] w-[241px] h-[148px]"
                />
                <div className="p-4 flex flex-col gap-6">
                  <h2 className="font-alumiSans font-normal text-2xl text-white uppercase text-start">
                    coming soon
                  </h2>
                  <p className="font-alumiSans font-medium text-xl">
                    Prepare for the ultimate war experience as you step onto the
                    front lines. Command your troops, strategize your moves, and
                    lead your faction to victory. The battlefield awaits your
                    tactical brilliance and fearless leadership.
                  </p>
                </div>
              </div>
              </SwiperSlide>
              
              </Swiper>
            </div> */}

            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: ".slide-prev",
                nextEl: ".slide-next",
              }}
              breakpoints={{
                480: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              className="w-full flex"
            >
              <SwiperSlide className=" pt-12">
                <div className="relative w-[280px] h-[400px]  bg-[linear-gradient(360deg,rgba(48,42,42,0.12)_0%,rgba(185,185,185,0.12)_100%)] backdrop-blur-lg flex flex-col justify-center items-center mx-auto overflow-visible border-t-4">
                  <div className="absolute -top-[48px] flex justify-center items-center z-10">
                    <Image src={PolygonImg} alt="img" className="" />
                    <div className="absolute flex flex-col items-center uppercase">
                      <h3 className=" font-alumiSans font-semibold text-[40px] leading-none">
                        q1
                      </h3>
                      <p className="font-alumiSans font-normal text-2xl">
                        2024
                      </p>
                    </div>
                  </div>
                  {/* <Image
                    src={RoadMapImg}
                    alt="img"
                    className="mt-[71px] w-[241px] h-[148px]"
                  /> */}
                  <div className="p-4 flex flex-col gap-6">
                    <h2 className="font-alumiSans font-normal text-2xl text-white uppercase text-start">
                    Partnership & Inception
                    </h2>
                    <ul className="font-alumiSans font-medium text-xl list-disc ml-5">
                     <li>Strategic Alliance: Form a pivotal partnership with Aptos Network, leveraging blockchain technology to enhance the game</li>
                     <li>Development Kickoff: Officially commence the development of the game</li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" pt-12">
                <div className="relative w-[280px] h-[400px]  bg-[linear-gradient(360deg,rgba(48,42,42,0.12)_0%,rgba(185,185,185,0.12)_100%)] backdrop-blur-lg flex flex-col justify-center items-center mx-auto border-t-4">
                  <div className="absolute -top-[48px] flex justify-center items-center">
                    <Image src={PolygonImg} alt="img" className="" />
                    <div className="absolute flex flex-col items-center uppercase">
                      <h3 className=" font-alumiSans font-semibold text-[40px] leading-none">
                        q2
                      </h3>
                      <p className="font-alumiSans font-normal text-2xl">
                        2024
                      </p>
                    </div>
                  </div>
                  {/* <Image
                    src={RoadMapImg}
                    alt="img"
                    className="mt-[71px] w-[241px] h-[148px]"
                  /> */}
                  <div className="p-4 flex flex-col gap-6">
                    <h2 className="font-alumiSans font-normal text-2xl text-white uppercase text-start">
                    Launch & Community Building
                    </h2>
                    <ul className="font-alumiSans font-medium text-xl list-disc ml-5">
                     <li>Global Launch: Roll out  on all major platforms, becoming the biggest game on Aptos</li>
                     <li>Community Engagement: Foster a vibrant community through interactive events, Q&A sessions, and social media campaigns.</li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" pt-12">
                <div className="relative w-[280px] h-[400px] bg-[linear-gradient(360deg,rgba(48,42,42,0.12)_0%,rgba(185,185,185,0.12)_100%)] backdrop-blur-lg flex flex-col justify-center items-center mx-auto border-t-4">
                  <div className="absolute -top-[48px] flex justify-center items-center">
                    <Image src={PolygonImg} alt="img" className="" />
                    <div className="absolute flex flex-col items-center uppercase">
                      <h3 className=" font-alumiSans font-semibold text-[40px] leading-none">
                        q3
                      </h3>
                      <p className="font-alumiSans font-normal text-2xl">
                        2024
                      </p>
                    </div>
                  </div>
                  {/* <Image
                    src={RoadMapImg}
                    alt="img"
                    className="mt-[98px] w-[241px] h-[148px]"
                  /> */}
                  <div className="p-4 flex flex-col gap-6 mt-5">
                    <h2 className="font-alumiSans font-normal text-2xl text-white uppercase text-start">
                    Feature Expansion & Beta Testing
                    </h2>
                    <ul className="font-alumiSans font-medium text-xl list-disc ml-5">
                     <li>New Game Modes: Introduce thrilling new game modes, weapons, and maps.</li>
                     <li>Beta Testing: Release beta versions of upcoming features, allowing players to test and provide feedback on new content.</li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" pt-12 ">
                <div className="relative w-[280px] h-[400px] bg-[linear-gradient(360deg,rgba(48,42,42,0.12)_0%,rgba(185,185,185,0.12)_100%)] backdrop-blur-lg flex flex-col justify-center items-center mx-auto border-t-4">
                  <div className="absolute -top-[48px] flex justify-center items-center">
                    <Image src={PolygonImg} alt="img" className="" />
                    <div className="absolute flex flex-col items-center uppercase">
                      <h3 className=" font-alumiSans font-semibold text-[40px] leading-none">
                        q4
                      </h3>
                      <p className="font-alumiSans font-normal text-2xl">
                        2024
                      </p>
                    </div>
                  </div>
                  {/* <Image
                    src={RoadMapImg}
                    alt="img"
                    className="mt-[71px] w-[241px] h-[148px]"
                  /> */}
                  <div className="p-4 flex flex-col gap-6">
                    <h2 className="font-alumiSans font-normal text-2xl text-white uppercase text-start">
                    Competitive Play & Continuous Development
                    </h2>
                    <ul className="font-alumiSans font-medium text-xl list-disc ml-5">
                     <li>Tournaments & Events: Host competitive events and tournaments to engage players</li>
                     <li>Seasonal Updates: Launch seasonal content updates, introducing new challenges and missions.</li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" pt-12">
                <div className="relative w-[280px] h-[400px]  bg-[linear-gradient(360deg,rgba(48,42,42,0.12)_0%,rgba(185,185,185,0.12)_100%)] backdrop-blur-lg flex flex-col justify-center items-center mx-auto border-t-4">
                  <div className="absolute -top-[48px] flex justify-center items-center">
                    <Image src={PolygonImg} alt="img" className="" />
                    <div className="absolute flex flex-col items-center uppercase">
                      <h3 className=" font-alumiSans font-semibold text-[40px] leading-none">
                        q1
                      </h3>
                      <p className="font-alumiSans font-normal text-2xl">
                        2025
                      </p>
                    </div>
                  </div>
                  {/* <Image
                    src={RoadMapImg}
                    alt="img"
                    className="mt-[90px] w-[241px] h-[148px]"
                  /> */}
                  <div className="p-4 flex flex-col gap-6 mt-5">
                    <h2 className="font-alumiSans font-normal text-2xl text-white uppercase text-start">
                    Establishing as an Industry Leader
                    </h2>
                    <ul className="font-alumiSans font-medium text-xl list-disc ml-5">
                     <li>Expert Recognition: Cement &quot;Warfront Assault&quot; and Convival Studio as leaders in the gaming industry.</li>
                     <li>Expanding Horizons: Explore partnerships and collaborations with other industry experts to further enhance the game&apos;s ecosystem.</li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
              
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
