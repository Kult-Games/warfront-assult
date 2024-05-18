"use client"
import React from "react";
// import Lottie from "lottie-react";
import Image from "next/image";
import ConvivalTextImg from "@/public/imgs/convival-text-img.png";
import ConvivalBgImg from "@/public/imgs/convival-bg-img.webp";
import MobileConvivalBgImg from "@/public/imgs/mobile-convival-bg-img.webp";
import ConvivalCharacterImg from "@/public/imgs/convival-character-img1.webp";
// import ConvivalTextureImg from "@/public/imgs/convival-texture-img.png";
import VipPassIcon from "@/public/icons/vip-pass-icon.svg";
import NftIcon from "@/public/icons/nft-icon.svg";
import GamePassIcon from "@/public/icons/game-pass-icon.svg";
import DiscountIcon from "@/public/icons/discount-icon.svg";
import ValueAddIcon from "@/public/icons/value-add-icon.svg";
import TokenSaleImg from "@/public/icons/token-sale-icon.svg";
// import BoxAnimation from "@/public/animation/Weapon-crete.json";

const Convival = () => {
  return (
    <section className="relative">
      {/* <Lottie animationData={BoxAnimation} loop={true} /> */}
      <Image
        src={ConvivalBgImg}
        alt="img"
        className=" hidden md:block object-cover inset-0 "
      />
      <Image
        src={MobileConvivalBgImg}
        alt="img"
        className="top-0 lg:hidden object-cover inset-0 "
      />
      <div className="absolute w-full h-full top-0 flex justify-center items-center ">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20  justify-center items-center h-full">
          <div className="flex flex-col items-center lg:items-start gap-10 ">
            <div className="mt-10 ">
              <Image
                src={ConvivalTextImg}
                alt="img"
                className="h-[30px] w-[170px] md:h-[70px] md:w-[330px] lg:h-full lg:w-full"
              />
              <h1 className="bg-text text-stroke font-alumiSans font-extrabold text-[40px] md:text-[80px] uppercase leading-none">
                genesis pass
              </h1>
            </div>
            <p className="font-alumiSans font-semibold text-2xl text-[#C0C0C0] text-center lg:text-start">
              Before the official launch of Warfront Assault the first AAA game
              by Convival Studio,We are set to unveil the &quot;Convival Genesis
              Pass&quot; – an exclusive and highly coveted NFT from Convival
              Studio.
            </p>

            <div className="flex flex-col items-center md:items-start gap-14 md:gap-16 ">
              <Image
                src={ConvivalCharacterImg}
                alt="img"
                className="lg:hidden"
              />
              <div className=" w-full flex flex-col lg:flex-row gap-5 items-center lg:items-start">
                <Image src={VipPassIcon} alt="icon" />
                <div className="space-y-4 font-alumiSans text-[#C0C0C0] text-center lg:text-start flex flex-col items-center lg:items-start">
                  <h3 className="text-2xl font-semibold leading-none text-white">
                    VIP Pass:
                  </h3>
                  <p className="font-alumiSans text-xs md:text-xl font-semibold leading-none w-[95%] md:w-[80%]">
                    Holders of the Convival Genesis Pass will enjoy VIP access,
                    adorned with a Convival badge, to all events hosted by
                    Convival Studio globally.
                  </p>
                </div>
              </div>
              <div className="w-full flex flex-col lg:flex-row  gap-5 items-center lg:items-start ">
                <Image src={NftIcon} alt="icon" />
                <div className="space-y-4 font-alumiSans text-[#C0C0C0] text-center lg:text-start lg:pl-5  flex flex-col items-center lg:items-start">
                  <h3 className="text-2xl font-semibold leading-none text-white">
                    NFT Drop:
                  </h3>
                  <p className="font-alumiSans text-xs md:text-xl font-semibold leading-none  w-[95%] md:w-[80%] ">
                    Pass holders stand a chance to receive NFT drops featuring
                    in-game items, skins, and mystery boxes.
                  </p>
                </div>
              </div>
              <div className="w-full flex flex-col lg:flex-row  gap-5 items-center lg:items-start ">
                <Image src={GamePassIcon} alt="icon" />
                <div className="space-y-4 font-alumiSans text-[#C0C0C0] text-center lg:text-start flex flex-col items-center lg:items-start">
                  <h3 className="text-2xl font-semibold leading-none text-white">
                    Early Access Game Pass:
                  </h3>
                  <p className="font-alumiSans text-xs md:text-xl font-semibold leading-none  w-[95%] md:w-[80%] ">
                    Owners of the Genesis NFT will gain early access to premium
                    features within our gaming platform, allowing them to
                    explore new releases and features ahead of other users.
                  </p>
                </div>
              </div>
              <div className="w-full flex flex-col lg:flex-row  gap-5 items-center lg:items-start">
                <Image src={DiscountIcon} alt="icon" />
                <div className="space-y-4 font-alumiSans text-[#C0C0C0] text-center lg:text-start flex flex-col items-center lg:items-start">
                  <h3 className="text-2xl font-semibold leading-none text-white">
                    Special Discounts:
                  </h3>
                  <p className="font-alumiSans text-xs md:text-xl font-semibold leading-none  w-[95%] md:w-[80%] ">
                    Enjoy exclusive discounts on in-game purchases,
                    incentivizing users to engage more deeply with
                    Convival&apos;s ecosystem and maximize their gaming
                    enjoyment.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10 lg:gap-12">
            <Image
              src={ConvivalCharacterImg}
              alt="img"
              className="hidden lg:block"
            />
            <div className="w-full flex flex-col lg:flex-row  gap-5 items-center lg:items-start">
              <Image src={ValueAddIcon} alt="icon" />
              <div className="space-y-4 font-alumiSans text-[#C0C0C0] text-center lg:text-start flex flex-col items-center lg:items-start">
                <h3 className="text-2xl font-semibold leading-none text-white">
                  Developer Insights & value addition:
                </h3>
                <p className="font-alumiSans text-xs md:text-xl font-semibold leading-none  w-[95%] md:w-[80%]">
                  Gain exclusive access to developer insights and
                  behind-the-scenes content, offering a unique perspective into
                  the game development process. NFT holders can contribute
                  feedback and suggestions for future updates.
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col lg:flex-row  gap-5 items-center lg:items-start">
              <Image src={TokenSaleImg} alt="icon" />
              <div className="space-y-4 font-alumiSans text-[#C0C0C0] text-center lg:text-start flex flex-col items-center lg:items-start">
                <h3 className="text-2xl font-semibold leading-none text-white">
                  Reservations for the Limited Edition NFT Drops & Token Sale:
                </h3>
                <p className="font-alumiSans text-xs md:text-xl font-semibold leading-none  w-[95%] md:w-[80%]">
                  Secure reservations for Limited Edition NFT Drops and
                  participate in the Convival Studio Tokens sale at Public
                  Round, ensuring priority access to special releases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Convival;
