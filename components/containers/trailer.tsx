import React from "react";
import Image from "next/image";
import TrailerBgImg from "@/public/imgs/tariler-bg-img.webp";
import MobileTrailerBgImg from "@/public/imgs/mobile-trailer-bg-img.webp";
// import MobileTrailerCharImg from "@/public/imgs/mobile-trailer-character-img.png";

const Trailer = () => {
  return (
    <section className="overflow-hidden relative w-full h-full">
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
      <div className="hidden fle">
        <video
          width="892"
          height="502"
          controls
          preload="none"
          className=" absolute self-center mx-auto inset-0 w-[316px] h-[178px] lg:w-[892px] lg:h-[502px]"
        >
          <source src="/path/to/video.mp4" type="video/mp4" />
          <track
            src="/path/to/captions.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* <Image
        src={MobileTrailerCharImg}
        alt="img"
        className=" absolute top-0 right-0 h-[90%]"
      /> */}
    </section>
  );
};

export default Trailer;
