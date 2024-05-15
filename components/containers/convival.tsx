import React from "react";
import Image from "next/image";
import ConvivalTextImg from "@/public/imgs/convival-text-img.png";
import ConvivalBgImg from "@/public/imgs/convival-bg-img.png";
import ConvivalCharacterImg from "@/public/imgs/convival-character-img1.png";
import ConvivalTextureImg from "@/public/imgs/convival-texture-img.png";

const Convival = () => {
  return (
    <section className="relative">
      <Image
        src={ConvivalBgImg}
        alt="img"
        className="object-cover w-full inset-0 -z-10"
      />
      <div className="container flex justify-center items-center absolute bottom-0 h-full">
        <div className=" ">
          <Image src={ConvivalTextImg} alt="img" className="" />
          <h1 className="font-alumiSans font-extrabold text-[80px] uppercase">
            genesis pass
          </h1>
          <p className="font-alumiSans font-semibold text-2xl">
            Before the official launch of Warfront Assault the first AAA game by
            Convival Studio,We are set to unveil the &quot;Convival Genesis Pass&quot; –
            an exclusive and highly coveted NFT from Convival Studio.
          </p>
          <div>
            <h3 className="font-alumiSans font-semibold text-2xl">NFT Drop:</h3>
            <p className="font-alumiSans font-semibold text-[20px]">
              Pass holders stand a chance to receive NFT drops featuring in-game
              items, skins, and mystery boxes.
            </p>
          </div>
        </div>
        <div>
          <Image src={ConvivalCharacterImg} alt="img" />
          {/* <Image src={ConvivalTextureImg} alt="img" /> */}
        </div>
      </div>
    </section>
  );
};

export default Convival;
