import Image from "next/image";
import HeroBgImg from "@/public/imgs/hero-bg-img-2.png";
import MobileHeroBgImg from "@/public/imgs/hero-bg-img-2-sm.png";
import TextShadowImg from "@/public/imgs/hero-text-shadow-img.png";
import ButtonShadowImg from "@/public/imgs/hero-button-shadow-img.png";
// import TextGoldenBgImg from "@/public/imgs/text-bg-golden-img.png";
import AptosLogo from "@/public/imgs/aptos-logo.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden  w-screen h-screen lg:h-full">
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
        <div className="container relative h-full w-full flex justify-center items-center flex-col ">
          <Image
            src={TextShadowImg}
            alt="img"
            className="h-full w-full hidden md:block  opacity-60"
          />
          <div className=" md:hidden absolute w-full opacity-60 bg-shadow"></div>
          <div className="absolute bottom-0 mb-[150px] md:mb-[350px] lg:mb-[140px] 2xl:mb-[200px]">
            <div className="flex flex-col items-center">
              <h2
                className="bg-text font-alumiSans font-bold text-2xl lg:text-[45px] text-white uppercase leading-none lg:leading-none tracking-[39%]"
                style={{ letterSpacing: "0.39em" }}
                // style={{ letterSpacing: "39%" }}
              >
                warfront
              </h2>

              <h1 className="bg-text  font-alumiSans font-extrabold text-[140px] lg:text-[195px] uppercase leading-[125px] 2xl:leading-none ">
                assault
              </h1>
            </div>
            <div className="flex flex-col items-center gap-10">
              <p className="md:block font-alumiSans font-medium lg:font-semibold text-xl text-white text-center w-[80%] lg:w-[57%] ">
                Engage in the ultimate combat experience on Aptos Your
                battlefield, your rules. Deploy now!
              </p>
              <div className="relative flex items-center justify-center ">
                <Image src={ButtonShadowImg} alt="img" className="absolute" />
                <div className="flex flex-col md:flex-row gap-6">
                  <button className="kave-btn px-8 py-4 flex items-center gap-3 font-medium">
                    COMING SOON ON
                    <Image
                      src={AptosLogo}
                      alt="aptos-logo"
                      className="w-[100px] h-[25px]"
                    />
                  </button>
                  {/* <button className="px-8 py-4 border font-montserrat text-base uppercase z-20">
                    pre-register
                  </button> */}
                  {/* <button className="px-8 py-4 border font-montserrat text-base uppercase z-20">
                    pre-register
                  </button>
                  <button className="px-8 py-4 border font-montserrat text-base uppercase z-20">
                    pre-register
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
