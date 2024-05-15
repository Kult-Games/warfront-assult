import React from "react";
import Image from "next/image";
import KeepUpToDateBgImg from "@/public/imgs/keep-up-to-date-bg-img.png";
import KeepUpToDateBgGradientimg from "@/public/imgs/keep-up-to-date-bg-img-gradient.png";

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
      </div>
      <div className="absolute top-0 flex justify-center items-center w-full h-full ">
        <div className="flex flex-col justify-center items-center gap-20">
          <h1 className="font-syncopate font-bold text-[40px] tracking-[10px] uppercase border-b-2">
            keep up to the date
          </h1>
          <div className="flex flex-col items-center gap-10">
            <div className="w-full flex justify-center gap-6">
              <input type="text" placeholder="Enter your email here......" className="w-[60%] pl-7 bg-transparent border backdrop-blur" />
              <button className="px-8 py-4 border font-montserrat text-base uppercase">
                pre-register
              </button>
            </div>
            <p className="text-center w-[75%]">
              In the mystical realm of Elysium, darkness is spreading,
              threatening to consume the once vibrant lands. As the chosen hero
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Update;
