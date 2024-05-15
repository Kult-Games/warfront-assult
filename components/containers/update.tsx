import React from "react";
import Image from "next/image";
import KeepUpToDateBgImg from "@/public/imgs/keep-up-to-date-bg-img.png";
import KeepUpToDateBgGradientimg from "@/public/imgs/keep-up-to-date-bg-img-gradient.png";
import KeepUpToDateBgFlameImg from "@/public/imgs/keep-up-to-date-bg-img-gradient1.png";

const Update = () => {
  return (
    <section className="relative overflow-hidden w-full h-full">
      <div>
        <Image
          src={KeepUpToDateBgImg}
          alt="img"
          className="object-cover w-full inset-0 -z-20"
        />
        <Image
          src={KeepUpToDateBgGradientimg}
          alt="img"
          className="absolute top-0 inset-0 object-cover w-full h-full"
        />
        <Image
          src={KeepUpToDateBgFlameImg}
          alt="img"
          className="absolute top-0 inset-0 object-cover w-full h-full"
        />
      </div>
      <div className="absolute z-20 top-0 flex justify-center items-center w-full h-full ">
        <div className="flex flex-col justify-center items-center gap-20">
          <h1 className="font-alumiSans font-bold text-[80px] uppercase border-b-2 leading-none">
            keep up to the date
          </h1>
          <div className="flex flex-col items-center gap-10">
            <div className="w-full flex justify-center gap-6">
              <input
                type="text"
                placeholder="Enter your email here......"
                className="font-alumiSans font-medium text-xl w-[40%] pl-7 bg-transparent border backdrop-blur outline-none"
              />
              <button className="px-8 py-4 border font-montserrat text-base uppercase">
                pre-register
              </button>
            </div>
            <p className="text-center w-[58%] font-alumiSans text-xl text-white">
              The Warfront beckons, and the Syndicate's grasp tightens. Will you
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
