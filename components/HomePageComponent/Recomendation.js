import React from "react";
import wh1 from "@/public/asset/wh1.png";
import wh2 from "@/public/asset/wh2.png";
import wh3 from "@/public/asset/wh3.png";
import Image from "next/image";
import { Poppins, Public_Sans } from "next/font/google";
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
export default function Recomendation() {
  return (
    <div className=" text-center">
      <div
        className={` my-10 ${publicaSans.className} leading-[24.5px] tracking-[-0.41px]`}
      >
        <span
          className={`text-[#8F87F1] text-[26px]  md:text-[52px] md:font-medium md:leading-[53px] font-semibold  ${publicaSans.className} `}
        >
          Hear It from
        </span>
        <span
          className={`text-green-500 text-[26px]  md:text-[52px] md:font-medium md:leading-[53px] font-semibold  ${publicaSans.className} `}
        >
          {" "}
          Our Followers:{" "}
          <span className="hidden md:inline"> Their Stories,</span>
        </span>
        <div
          className={`text-green-500 text-[26px]  md:text-[52px] md:font-medium md:leading-[53px] font-semibold  ${publicaSans.className} `}
        >
          {" "}
          <span className="md:hidden"> Their Stories,</span> Their Trust!
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row  gap-[30px] md:gap-6 flex-wrap items-center justify-around">
        <Image
          src={wh1}
          alt="wh1"
          width={253}
          height={186}
          className="s md:w-[300px] md:h-[400px] "
        />

        <Image
          src={wh2}
          alt="wh1"
          width={253}
          height={186}
          className=" md:w-[300px] md:h-[400px] "
        />

        <Image
          src={wh3}
          alt="wh1"
          width={253}
          height={186}
          className=" md:w-[300px] md:h-[400px] "
        />
      </div>

      <div className="mb-[30px] mt-[25px] text-center px-7 py-[13px] bg-[#d63970] rounded-[10px] justify-center items-center gap-2.5 inline-flex">
        <Link
          href={"/"}
          className={`${poppins.className} text-center text-white text-[17px] md:text-[25px] font-bold font-['Poppins'] leading-snug`}
        >
          REGISTER NOW
        </Link>
      </div>
    </div>
  );
}
