import React from "react";
import NftBgImg from "@/public/imgs/nft-bg-img.png";
import NftBgGradientImg from "@/public/imgs/nft-bg-gradient.png";
import NftBgCharactorImg from "@/public/imgs/nft-bg-character.png";
import Image from "next/image";

const Nft = () => {
  return (
    <section className="relative">
      <div>
        <Image
          src={NftBgImg}
          alt="img"
          objectFit="cover"
          objectPosition="center"
          className="w-full h-full"
        />
        <Image
          alt="img"
          src={NftBgGradientImg}
          objectFit="cover"
          objectPosition="center"
          className="absolute top-0 h-full w-full"
        />
      </div>
      <div className="container">
        <div className="absolute -top-28 right-0">
          <Image
            src={NftBgCharactorImg}
            alt="img"
            className="border"
          />
        </div>
      </div>
    </section>
  );
};

export default Nft;
