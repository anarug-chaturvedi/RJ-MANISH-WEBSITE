import React from "react";
import whatsapp from "@/public/asset/whatsapp.png";
import joingroup1 from "@/public/asset/joingroup1.png";
import joingroup2 from "@/public/asset/joingroup2.png";
import joingroup3 from "@/public/asset/joingroup3.png";
import joingroup4 from "@/public/asset/joingroup4.png";
import Image from "next/image";

import { Inter, Poppins } from "next/font/google";
import localFont from "next/font/local";
import Link from "next/link";
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
export default function JoinGroup() {
  return (
    <div className="flex flex-col items-center justify-center text-center pt-[28px] bg-[#EEEFFC] w-full pb-[37px]">
      <div className=" items-center justify-center flex flex-col lg:flex-row  gap-[16px] lg:gap-[14px] mt-[11px] lg:mt-[63px]">
        <Image src={whatsapp} alt="whatsapp" className=" w-[75px] h-[75px]" />
        <div className=" w-8/12 lg:w-full   leading-[26px] lg:leading-[50px] tracking-[-0.41px] ">
          <p
            className={`${publicaSans.className} text-[#1b1d30] text-[26px] lg:text-[50px] font-semibold leading-[24.5px] lg:leading-[50px] tracking-[-0.408px]`}
          >
            Join Our{" "}
            <span
              className={`${publicaSans.className} text-[#d63970] text-[26px] lg:text-[50px] font-semibold leading-[24.5px] lg:leading-[50px] tracking-[-0.408px]`}
            >
              Exclusive WhatsApp Group!
            </span>
          </p>
        </div>
      </div>

      <div className=" flex flex-col lg:flex-row gap-[11px] lg:gap-[57px] items-center justify-center">
        <div className=" mt-[36px] lg:mt-[56px] flex flex-row gap-[13px] lg:gap-[57px] items-center justify-center px-[28px] lg:px-0">
          <Image
            src={joingroup1}
            alt="joingroup1"
            className=" w-[146px] h-[152px] lg:w-[251px] lg:h-[273px] "
          />
          <Image
            src={joingroup2}
            alt="joingroup1"
            className=" w-[146px] h-[152px] lg:w-[251px] lg:h-[273px] "
          />
        </div>
        <div className=" lg:mt-[56px] flex flex-row gap-[13px] lg:gap-[57px] items-center justify-center px-[28px] lg:px-0 ">
          <Image
            src={joingroup3}
            alt="joingroup1"
            className=" w-[146px] h-[152px] lg:w-[251px] lg:h-[273px] "
          />
          <Image
            src={joingroup4}
            alt="joingroup1"
            className=" w-[146px] h-[152px] lg:w-[251px] lg:h-[273px] "
          />
        </div>
      </div>
      <Link
        href={"/"}
        className={`${poppins.className} mt-[30px] bg-[#5259AA] font-bold text-white py-3 px-6 lg:py-5 lg:px-8 rounded-lg text-lg lg:text-[25px] lg:font-bold `}
      >
        Join the Group
      </Link>
    </div>
  );
}
