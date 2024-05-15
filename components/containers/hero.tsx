import Image from "next/image";
import HeroBgImg from "@/public/imgs/hero-bg-img1.webp";
import TextShadowImg from "@/public/imgs/hero-text-shadow-img.png";
import ButtonShadowImg from "@/public/imgs/hero-button-shadow-img.png";
import TextGoldenBgImg from "@/public/imgs/text-bg-golden-img.png";

const hero = () => {
  return (
    <section className="overflow-hidden relative w-screen h-full ">
      <Image
        alt="img"
        src={HeroBgImg}
        placeholder="blur"
        priority
        className="object-cover inset-0"
      />
      <div className="absolute inset-0 top-0">
        <div className="container relative h-full w-full flex justify-center items-center flex-col">
          <Image src={TextShadowImg} alt="img" className="" />
          <div className="absolute bottom-0 mb-[117px] 2xl:mb-[300px]">
            <div className="flex flex-col items-center ">
              <h2
                className="font-alumiSans font-bold text-[40px] text-white uppercase leading-none"
                style={{ letterSpacing: "0.39em" }}
              >
                warfront
              </h2>

              <h1 className="font-alumiSans font-extrabold text-[171px] uppercase leading-[140px] 2xl:leading-none">
                assault
                {/* <span className="bg-clip-text text-transparent" style={{backgroundImage:`url(${TextGoldenBgImg})`}}>assault</span> */}
                {/* <Image
                src={TextGoldenBgImg}
                alt="img"/> */}
              </h1>
            </div>
            <div className="flex flex-col items-center gap-[50px] mt-2">
              <p className="font-alumiSans font-semibold text-xl text-white text-center w-[57%]">
                Prepare for the ultimate war experience as you step onto the
                front lines. Command your troops, strategize your moves, and
                lead your faction to victory. The battlefield awaits your
                tactical brilliance and fearless leadership.
              </p>
              <div className="relative flex items-center justify-center ">
                <Image src={ButtonShadowImg} alt="img" className="absolute" />
                <div className="flex gap-6  ">
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
