import React from "react";
import Image from "next/image";
import RoadMapBgImg from "@/public/imgs/roadmap-bg-img.png";
import PolygonImg from "@/public/imgs/polygon-img.png";
import LeftArrowImg from "@/public/imgs/left-arrow-img.png";
import RightArrowImg from "@/public/imgs/right-arrow-img.png";

const Roadmap = () => {
  return (
    <section className="relative w-full h-full">
      <Image
        src={RoadMapBgImg}
        alt="dark background img"
        className="w-full h-full object-cover"
      />

      <div className="absolute top-0 w-full h-full ">
        <div className="container w-full h-full flex flex-col items-center justify-center">
          <h1 className="font-alumiSans font-extrabold text-[80px] uppercase text-center leading-none mt-16">
            game roadmap
          </h1>
          <div className="flex flex-col gap-20">
            <div className="flex gap-6 self-end">
              <Image src={LeftArrowImg} alt="img" />
              <Image alt="img" src={RightArrowImg} />
            </div>

            <div className="flex gap-10 flex-row items-center justify-center border-t-4">
              <div className="relative w-[280px] h-[487px] bg-gradient-to-tr from-[#302A2A] to-[#B9B9B9]  backdrop-blur flex flex-col justify-center items-center">
                <div className="absolute -top-[48px] flex justify-center items-center">
                  <Image src={PolygonImg} alt="img" className="" />
                  <div className="absolute flex flex-col items-center uppercase">
                    <h3 className=" font-alumiSans font-semibold text-[40px] leading-none">
                      q1
                    </h3>
                    <p className="font-alumiSans font-normal text-2xl">2024</p>
                  </div>
                </div>
                <video
                  width="320"
                  height="240"
                  controls
                  preload="none"
                  className="mt-[71px] w-[241px] h-[148px]"
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
                <div className="p-4 flex flex-col gap-6">
                  <h2 className="font-alumiSans font-normal text-2xl text-white uppercase text-start">
                    coming soon
                  </h2>
                  <p className="font-alumiSans font-medium text-xl">
                    Prepare for the ultimate war experience as you step onto the
                    front lines. Command your troops, strategize your moves, and
                    lead your faction to victory. The battlefield awaits your
                    tactical brilliance and fearless leadership.
                  </p>
                </div>
              </div>
              <div className="relative w-[280px] h-[487px] bg-gradient-to-tr from-[#302A2A] to-[#B9B9B9] backdrop-blur flex flex-col justify-center items-center">
                <div className="absolute -top-[48px] flex justify-center items-center">
                  <Image src={PolygonImg} alt="img" className="" />
                  <div className="absolute flex flex-col items-center uppercase">
                    <h3 className=" font-alumiSans font-semibold text-[40px] leading-none">
                      q2
                    </h3>
                    <p className="font-alumiSans font-normal text-2xl">2024</p>
                  </div>
                </div>
                <video
                  width="320"
                  height="240"
                  controls
                  preload="none"
                  className="mt-[71px] w-[241px] h-[148px]"
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
                <div className="p-4 flex flex-col gap-6">
                  <h2 className="font-alumiSans font-normal text-2xl text-white uppercase text-start">
                    coming soon
                  </h2>
                  <p className="font-alumiSans font-medium text-xl">
                    Prepare for the ultimate war experience as you step onto the
                    front lines. Command your troops, strategize your moves, and
                    lead your faction to victory. The battlefield awaits your
                    tactical brilliance and fearless leadership.
                  </p>
                </div>
              </div>
              <div className="relative w-[280px] h-[487px] bg-gradient-to-tr from-[#302A2A] to-[#B9B9B9] backdrop-blur flex flex-col justify-center items-center">
                <div className="absolute -top-[48px] flex justify-center items-center">
                  <Image src={PolygonImg} alt="img" className="" />
                  <div className="absolute flex flex-col items-center uppercase">
                    <h3 className=" font-alumiSans font-semibold text-[40px] leading-none">
                      q3
                    </h3>
                    <p className="font-alumiSans font-normal text-2xl">2024</p>
                  </div>
                </div>
                <video
                  width="320"
                  height="240"
                  controls
                  preload="none"
                  className="mt-[71px] w-[241px] h-[148px]"
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
                <div className="p-4 flex flex-col gap-6">
                  <h2 className="font-alumiSans font-normal text-2xl text-white uppercase text-start">
                    coming soon
                  </h2>
                  <p className="font-alumiSans font-medium text-xl">
                    Prepare for the ultimate war experience as you step onto the
                    front lines. Command your troops, strategize your moves, and
                    lead your faction to victory. The battlefield awaits your
                    tactical brilliance and fearless leadership.
                  </p>
                </div>
              </div>
              <div className="relative w-[280px] h-[487px] bg-gradient-to-tr from-[#302A2A] to-[#B9B9B9] backdrop-blur flex flex-col justify-center items-center">
                <div className="absolute -top-[48px] flex justify-center items-center">
                  <Image src={PolygonImg} alt="img" className="" />
                  <div className="absolute flex flex-col items-center uppercase">
                    <h3 className=" font-alumiSans font-semibold text-[40px] leading-none">
                      q4
                    </h3>
                    <p className="font-alumiSans font-normal text-2xl">2024</p>
                  </div>
                </div>
                <video
                  width="320"
                  height="240"
                  controls
                  preload="none"
                  className="mt-[71px] w-[241px] h-[148px]"
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
                <div className="p-4 flex flex-col gap-6">
                  <h2 className="font-alumiSans font-normal text-2xl text-white uppercase text-start">
                    coming soon
                  </h2>
                  <p className="font-alumiSans font-medium text-xl">
                    Prepare for the ultimate war experience as you step onto the
                    front lines. Command your troops, strategize your moves, and
                    lead your faction to victory. The battlefield awaits your
                    tactical brilliance and fearless leadership.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
