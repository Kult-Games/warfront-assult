import Image from "next/image";
import HeroBgImg from "@/public/imgs/hero-bg-img1.webp";
import MobileHeroBgImg from "@/public/imgs/mobile-hero-bg-img.webp";
import TextShadowImg from "@/public/imgs/hero-text-shadow-img.png";
import ButtonShadowImg from "@/public/imgs/hero-button-shadow-img.png";
// import TextGoldenBgImg from "@/public/imgs/text-bg-golden-img.png";

const hero = () => {
  return (
    <section className="overflow-hidden relative w-screen h-screen lg:h-full">
      <Image
        alt="img"
        src={HeroBgImg}
        placeholder="blur"
        priority
        className="object-cover object-center inset-0 h-full w-full hidden md:block"
      />
      <Image
        src={MobileHeroBgImg}
        alt="img"
        placeholder="blur"
        priority
        className=" md:hidden object-cover object-center h-full w-full "
      />
      <div className="absolute inset-0 top-0">
        <div className="container relative h-full w-full flex justify-center items-center flex-col">
          <Image src={TextShadowImg} alt="img" className="" />
          <div className="absolute bottom-0 mb-[85px] md:mb-[350px] lg:mb-[140px] 2xl:mb-[300px]">
            <div className="flex flex-col items-center ">
              <h2
                className="bg-text text-stroke font-alumiSans font-bold text-2xl lg:text-[40px] text-white uppercase leading-none"
                style={{ letterSpacing: "0.39em" }}
              >
                warfront
              </h2>

              <h1 className="bg-text text-stroke font-alumiSans font-extrabold text-[128px] lg:text-[171px] uppercase leading-[125px] 2xl:leading-none [-webkit-text-stroke-width:0.5px] [-webkit-text-stroke-color:#FFF]">
                assault
              </h1>
            </div>
            <div className="flex flex-col items-center gap-[50px] ">
              <p className="hidden md:block font-alumiSans font-medium lg:font-semibold text-xl text-white text-center w-[70%] lg:w-[57%] ">
                Prepare for the ultimate war experience as you step onto the
                front lines. Command your troops, strategize your moves, and
                lead your faction to victory. The battlefield awaits your
                tactical brilliance and fearless leadership.
              </p>
              <p className="md:hidden font-alumiSans font-medium text-xl text-white text-center w-[85%] mt-3">
                Prepare for the ultimate war experience as you step onto the
                front lines. The battlefield awaits your tactical brilliance and
                fearless leadership.
              </p>
              <div className="relative flex items-center justify-center ">
                <Image src={ButtonShadowImg} alt="img" className="absolute" />
                <div className="flex flex-col md:flex-row gap-6">
                  <button className="px-8 py-4 border font-montserrat text-base uppercase z-20">
                    pre-register
                  </button>
                  <button className="px-8 py-4 border font-montserrat text-base uppercase z-20">
                    pre-register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default hero;
