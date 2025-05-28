import React from "react";
import whatsapp from "@/public/asset/whatsapp.png";
import check from "@/public/asset/check.png";
import Image from "next/image";

import { Inter, Poppins } from "next/font/google";
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

export default function Successfull() {
  return (
    <div className=" flex flex-col w-full items-center justify-center mb-[62px] lg:mb-[76px]">
      <Image
        src={check}
        alt="check"
        className=" w-[100px] h-[100px] mt-[89px] lg:w-[180px] lg:h-[180px] "
      />
      <h1
        className={` ${publicaSans.className} mt-[30px] text-white text-3xl font-medium  leading-[33px] lg:text-[50px] lg:leading-[55px]`}
      >
        Payment Successful
      </h1>
      {/* <h3
        className={`${caros.className}  mt-[6px lg:mt-[8px] text-white text-[17px] font-light leading-[18px] lg:text-[28px] lg:leading-[18px]`}
      >
        Successfully paid ₹500
      </h3> */}

      {/* <div className=" w-[90%] mt-[60px] lg:w-[909px] ">
        <p
          className={`${caros.className} text-start text-white text-base lg:text-[27px] font-normal font-['Caros'] leading-[18px]`}
        >
          Payment Details
        </p>
        <div className="rounded-[10px] bg-[#cbcde6] flex justify-between items-center py-[21px] px-[14px] mt-[11px]">
          <div className=" flex flex-col gap-y-[11px] lg:gap-y-[49px] text-start">
            <p
              className={`${caros.className} text-[#1b1d30]/70 text-sm lg:text-[26px] font-normal font-['Caros'] leading-[18px]`}
            >
              Transaction ID
            </p>
            <p
              className={`${caros.className} text-[#1b1d30]/70 text-sm lg:text-[26px] font-normal font-['Caros'] leading-[18px]`}
            >
              Date
            </p>
            <p
              className={`${caros.className} text-[#1b1d30]/70 text-sm lg:text-[26px] font-normal font-['Caros'] leading-[18px]`}
            >
              Transaction Type
            </p>
          </div>
          <div className=" flex flex-col gap-y-[11px] lg:gap-y-[49px] text-end">
            <p
              className={`${caros.className} text-[#1b1d30]/70 text-sm lg:text-[26px] font-semibold font-['Caros'] leading-[18px]`}
            >
              4231 2598 3214
            </p>
            <p
              className={`${caros.className} text-[#1b1d30]/70 text-sm lg:text-[26px] font-semibold font-['Caros'] leading-[18px]`}
            >
              10 February 2025
            </p>
            <p
              className={`${caros.className} text-[#1b1d30]/70 text-sm lg:text-[26px] font-semibold font-['Caros'] leading-[18px]`}
            >
              Credit Card
            </p>
          </div>
        </div>
      </div> */}

      {/* <div className=" w-full bg-[#5259aa] rounded-[30px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" /> */}
      <div className="  w-[90%] lg:w-[909px] flex justify-between items-center py-[10px] px-[15px] lg:py-[18px] lg:px-[28px] mt-[10px] lg:mt-[24px] bg-[#5259aa] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
        <h3
          className={`${caros.className} text-[#eeeffc] text-base lg:text-[28px] font-semibold font-['Caros'] leading-[18px]`}
        >
          Total
        </h3>
        <h3
          className={`${caros.className} text-white text-[17px] lg:text-3xl font-semibold font-['Caros'] leading-[18px]`}
        >
          ₹500
        </h3>
      </div>
    </div>
  );
}
