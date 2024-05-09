import React from "react";
import Image from "next/image";
import HeroBgImg from "@/public/imgs/hero-bg.png";

const StroyLine = () => {
  return (
    <section className="">
      {/* <Image
        src={HeroBgImg}
        alt="img"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority
      /> */}
      <Image
        src={HeroBgImg}
        alt="img"
        // layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      {/* <h1>test</h1> */}
    </section>
  );
};

export default StroyLine;
