import React from "react";
import { Inter, Poppins, Public_Sans } from "next/font/google";
import localFont from "next/font/local";

const publicaSans = localFont({
  src: "../../public/fonts/PublicaSans.otf",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});
const caros = localFont({
  src: "../../public/fonts/Caros.otf",
});

export default function WhyJoin() {
  return (
    <>
      <div className=" flex flex-col min-w-full items-center justify-center  ">
        <div className={`${publicaSans.className} mt-[33px] text-center px-3 `}>
          <p className=" text-[26px] md:text-[30px] lg:lg:text-[52px] lg:leading-[50px] font-semibold  leading-[30px]">
            Our courses is perfect for{" "}
          </p>
          <p className="text-[#d63970] text-[26px] md:text-[30px] lg:lg:text-[52px] lg:leading-[50px] font-semibold  leading-[30px]">
            those who want to:
          </p>
        </div>

        <div
          className={` ${caros.className} text-sm sm:text-base flex flex-col items-center justify-center gap-y-2 md:gap-y-3 font-medium text-black my-10 md:mb-[70px]`}
        >
          <div className=" text-center flex items-center justify-center  w-[95vw] md:w-[80vw]  gap-2">
            <div className=" bg-[#00AFAA] px-2 py-[8px] rounded-lg flex-auto text-[15px] lg:text-[22px] font-semibold leading-tight  ">
              Showcase Talent
            </div>
            <div className=" bg-[#D73970] px-2 py-[8px] rounded-lg flex-auto text-[15px] lg:text-[22px] font-semibold leading-tight ">
              Get Feedback
            </div>
            <div className=" bg-[#FFC56F] px-2 py-[8px] rounded-lg flex-auto text-[15px] lg:text-[22px] font-semibold leading-tight ">
              {" "}
              Learn
            </div>
            <div className=" hidden md:flex items-center justify-center bg-[#FFC56F] px-2 py-[8px] rounded-lg flex-auto text-[15px] lg:text-[22px] font-semibold leading-tight ">
              Build Confidence
            </div>
            <div className="hidden md:flex items-center justify-center bg-[#00AFAA] px-2 py-[8px] rounded-lg flex-auto text-[15px] lg:text-[22px] font-semibold leading-tight ">
              {" "}
              Reward
            </div>
          </div>

          <div className="text-center flex items-center justify-center w-[95vw] md:hidden gap-2 ">
            <div className="  bg-[#FFC56F] px-2 py-[8px] rounded-lg flex-auto text-[15px] lg:text-[22px] font-semibold leading-tight ">
              Build Confidence
            </div>
            <div className="  bg-[#00AFAA] px-2 py-[8px] rounded-lg flex-auto text-[15px] lg:text-[22px] font-semibold leading-tight ">
              {" "}
              Reward
            </div>
            <div className=" bg-[#D73970] px-2 py-[8px] rounded-lg flex-auto text-[15px] lg:text-[22px] font-semibold leading-tight ">
              Challenges
            </div>
          </div>

          <div className=" text-center flex items-center justify-center w-[95vw]  md:w-[80vw]  gap-2">
            <div className=" bg-[#D73970] px-2 py-[8px] rounded-lg flex-auto text-[15px] lg:text-[22px] font-semibold leading-tight  ">
              {" "}
              Grow
            </div>
            <div className=" bg-[#FFC56F] px-2 py-[8px] rounded-lg flex-auto text-[15px] lg:text-[22px] font-semibold leading-tight  ">
              Gain Recognition
            </div>
            <div className=" bg-[#00AFAA] px-2 py-[8px] rounded-lg flex-auto text-[15px] lg:text-[22px] font-semibold leading-tight  ">
              New Skills
            </div>
            <div className=" hidden md:flex items-center justify-center bg-[#D73970] px-2 py-[8px] rounded-lg flex-auto text-[15px] lg:text-[22px] font-semibold leading-tight ">
              Challenge Themselves
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
