import React from "react";
import Image from "next/image";
import RoadBgImg from "@/public/imgs/roadmap-bg-img.png"
import PolygonImg from "@/public/imgs/polygon-img.png"

const Roadmap = () => {
  return (
    <section className="relative w-full h-full">
      <Image
        src={RoadBgImg}
        alt="dark background img"
        className="w-full h-full object-cover object-center"
      />

      <div className="absolute w-full top-0 flex justify-center">
        <h1 className="font-alumiSans font-extrabold text-[80px] uppercase mt-[130px]">game roadmap</h1>
        <div>
            <div>
              
            </div>

        </div>


      </div>
      
    </section>
  );
};

export default Roadmap;
