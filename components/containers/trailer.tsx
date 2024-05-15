import React from "react";
import Image from "next/image";
import TrailerBgImg from "@/public/imgs/trailer-bg-img.png";
import TrailerCharImg from "@/public/imgs/trailer-character.png";

const Trailer = () => {
  return (
    <section className="overflow-hidden relative w-full h-full">
      <Image
        src={TrailerBgImg}
        alt="img"
        className="object-cover w-full inset-0 -z-10"
      />
      <div className="flex">
        <video
          width="892"
          height="502"
          controls
          preload="none"
          className="absolute self-center mx-auto inset-0"
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
        {/* <Image
          src={TrailerCharImg}
          alt="img"
          className=" absolute top-0 -right-16 h-[600px] w-[750px]"
        /> */}
      </div>
    </section>
  );
};

export default Trailer;
