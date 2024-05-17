import React from "react";
import Image from "next/image";
import KeepUpToDateBgImg from "@/public/imgs/keep-up-to-date-bg-img.webp";
import MobileKeepUpToDateBgImg from "@/public/imgs/mobile-keep-up-to-date-bg-img.webp";
// import KeepUpToDateBgGradientimg from "@/public/imgs/keep-up-to-date-bg-img-gradient.png";
// import KeepUpToDateBgFlameImg from "@/public/imgs/keep-up-to-date-bg-img-gradient1.png";

const Update = () => {
  return (
    <section className="relative overflow-hidden w-full h-full mt-20">
      <div>
        <Image
          src={MobileKeepUpToDateBgImg}
          alt="img"
          className="lg:hidden top-0 inset-0 object-cover w-full h-full"
        />
        <Image
          src={KeepUpToDateBgImg}
          alt="img"
          className="hidden lg:block  top-0 inset-0 object-cover w-full h-full"
        />
        {/* <Image
          src={KeepUpToDateBgFlameImg}
          alt="img"
          className="absolute top-0 inset-0 object-cover w-sereen h-full"
        /> */}
      </div>
      <div className="absolute z-20 top-0 flex justify-center items-center w-full h-full ">
        <div className="container flex flex-col justify-center items-center gap-10 lg:gap-20">
          <h1 className="bg-text text-stroke  font-alumiSans font-bold text-[40px] lg:text-[80px] uppercase border-b-2 leading-none">
            keep up to the date
          </h1>
          <div className="flex flex-col items-center gap-10">
            <div className="w-full flex flex-col lg:flex-row  justify-center gap-6">
              <input
                type="text"
                placeholder="Enter your email here......"
                className="py-4 font-alumiSans font-medium text-xl lg:w-[40%] h-full pl-7 bg-transparent border backdrop-blur outline-none"
              />
              <button className="px-8 py-4 border font-montserrat text-base uppercase">
                pre-register
              </button>
            </div>
            <p className="text-center  lg:w-[58%] font-alumiSans text-xl text-white">
              The Warfront beckons, and the Syndicate&apos;s grasp tightens. Will you
              rise as a Sentinel, forge your legacy, and shape the course of
              history? The Warfront awaits your command.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Update;
