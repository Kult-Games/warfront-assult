"use client";

import React, { useState } from "react";
import Image from "next/image";
import TrailerBgImg from "@/public/imgs/tariler-bg-img.png";
import MobileTrailerBgImg from "@/public/imgs/mobile-trailer-bg-img.webp";
import PlayIcon from "@/public/icons/play-icon.svg";
// import MobileTrailerCharImg from "@/public/imgs/mobile-trailer-character-img.png";

const Trailer = () => {
  const [show, setShow] = useState(false);
  return (
    <section className="overflow-hidden relative w-full h-full flex items-center justify-center">
      <Image
        src={TrailerBgImg}
        alt="img"
        className="hidden md:block object-cover object-center w-full h-full "
      />
      <Image
        src={MobileTrailerBgImg}
        alt="img"
        className="md:hidden object-cover object-center w-full h-full "
      />
      <button onClick={() => setShow(true)} className="absolute z-30">
        <Image src={PlayIcon} alt="icon"  />
      </button>
      {show && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50">
          <div
            onClick={() => setShow(false)}
            className="absolute top-5 right-5"
          >
            X
          </div>
          <video autoPlay controls className="w-[80%] h-auto">
            <source src="/imgs/teaser.mp4" type="video/mp4" />
          </video>
        </div>
      )}
      {/* <Image
        src={MobileTrailerCharImg}
        alt="img"
        className=" absolute top-0 right-0 h-[90%]"
      /> */}
    </section>
  );
};

export default Trailer;
