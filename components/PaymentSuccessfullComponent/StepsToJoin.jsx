import Image from "next/image";
import React from "react";
import join1 from "@/public/asset/step1.png";
import join2 from "@/public/asset/step2.png";
import join3 from "@/public/asset/step3.png";
import join4 from "@/public/asset/step4.png";
import join5 from "@/public/asset/step5.png";
import join6 from "@/public/asset/step6.png";
import join7 from "@/public/asset/step7.png";
import join8 from "@/public/asset/step8.png";

import { Inter, Poppins } from "next/font/google";
import localFont from "next/font/local";
const publicaSans = localFont({
  src: "../../public/fonts/PublicaSans.otf",
});
const caros = localFont({
  src: "../../public/fonts/Caros.otf",
});

export default function StepsToJoin() {
  return (
    <div className=" bg-[#1b1d30] pt-[44px] lg:pt-[66px] flex flex-col items-center justify-center pb-[50px] lg:pb-[113px]">
      <h1
        className={`${publicaSans.className} text-center w-10/12 text-[#d63970] text-[26px] lg:text-[50px] font-semibold leading-[28.5px] lg:leading-[55px] tracking-[-0.408px]`}
      >
        Step-by-Step Guide
        <span
          className={`${publicaSans.className} text-[#eeeffc] text-[26px] lg:text-[50px] font-semibold leading-[28.5px] lg:leading-[55px] `}
        >
          {" "}
          to Participate in Our Competitions!
        </span>
      </h1>
      <div className=" flex flex-col justify-center items-center gap-[30px] mt-[44px] lg:mt-[66px]">
        <p
          className={`${caros.className} w-[90%] lg:w-[100%] text-start text-[#eeeffc] text-base lg:text-[24px] font-medium font-['Caros'] leading-tight lg:leading-[22px]`}
        >
          {" "}
          Follow these easy steps:
        </p>
        <div className=" mx-auto flex items-center justify-center flex-col lg:flex-row  lg:justify-evenly mt-[20px] lg:mt-[50px] lg:w-full lg:gap-x-[140px] ">
          <div className=" flex flex-col items-center justify-center gap-y-[31px] lg:gap-y-[81px]  ">
            <Image
              src={join1}
              alt="join1"
              className=" w-[90%] md:w-[60%] lg:hidden "
            />
            <Image
              src={join4}
              alt="join1"
              className=" w-[90%] md:w-[60%] lg:hidden "
            />

            <Image
              src={join5}
              alt="join1"
              className=" lg:w-[472px] lg:h-[120px] lg:inline hidden "
            />
            <Image
              src={join6}
              alt="join1"
              className=" lg:w-[472px] lg:h-[120px] lg:inline hidden "
            />
          </div>
          <div className="mt-[31px] lg:mt-0 flex flex-col items-center justify-center gap-y-[31px] lg:gap-y-[81px] ">
            <Image
              src={join3}
              alt="join1"
              className=" w-[90%] md:w-[60%] lg:hidden "
            />
            <Image
              src={join2}
              alt="join1"
              className=" w-[90%] md:w-[60%] lg:hidden "
            />

            <Image
              src={join7}
              alt="join1"
              className=" lg:w-[472px] lg:h-[120px] lg:inline hidden "
            />
            <Image
              src={join8}
              alt="join1"
              className=" lg:w-[472px] lg:h-[120px] lg:inline hidden "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
