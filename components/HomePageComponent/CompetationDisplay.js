import Image from "next/image";
import React from "react";
import comp from "@/public/asset/comp.png";
import comp1 from "@/public/asset/comp1.png";
import comp2 from "@/public/asset/comp2.png";
import { Public_Sans } from "next/font/google";
import localFont from "next/font/local";

const publicaSans = localFont({
  src: "../../public/fonts/PublicaSans.otf",
});
export default function CompetationDisplay() {
  return (
    <div className="pt-[51px] bg-[#EEEFFC] xs:min-w-full md:min-w-[55%] md:h-[700px] md:mb-[60px]">
      <div
        className={` leading-[24px]  text-center  md:mt-5 md:pt-0 mb-10  ${publicaSans.className}`}
      >
        <p className=" leading-[24px] tracking-wide  relative text-black text-[26px] font-bold font-['Publica Sans']">
          Explore Our Exciting{" "}
          <Image
            src={comp1}
            alt="comp"
            className=" md:hidden w-[55px] h-[55px] absolute -top-10 left-2 sm:left-[20%] "
          />
          <Image
            src={comp2}
            alt="comp"
            className="w-[59px] md:hidden  absolute -top-10 right-0 sm:right-[20%]"
          />
        <span className=" block leading-[28px]  text-[#d63970] text-[26px] font-bold font-['Publica Sans']">
          Live Competitions
        </span>
        </p>
      </div>

      <div className="w-srceen sm:w-full  flex items-center justify-center pb-10">
        <Image
          src={comp}
          alt="comp"
          className=" w-11/12 sm:w-[auto] sm:h-[500px]"
        />
      </div>
    </div>
  );
}
