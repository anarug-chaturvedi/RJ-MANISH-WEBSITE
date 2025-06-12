import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import React from "react";
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from "react-icons/bi";
import { FaYoutube } from "react-icons/fa";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const caros = localFont({
  src: "../../public/fonts/Caros.otf",
});

export default function Stats() {
  return (
    <div className=" bg-[#5259AA] text-center text-white flex flex-col gap-y-20 md:flex-row items-center justify-evenly w-full py-10 md:py-14">
      <div className=" w-full md:w-4/12 flex flex-col gap-1 md:gap-2 md:text-lg items-center justify-center">
        <p
          className={`text-xl font-bold md:text-xl tracking-wide ${poppins.className}`}
        >
          644k + Followers
        </p>
        <p className={`${caros.className} tracking-tight`}>
          {" "}
          <BiLogoInstagram size={50} />
        </p>
      </div>
      <div className=" w-full md:w-4/12 flex flex-col gap-1 md:gap-2 md:text-lg items-center justify-center">
        <p
          className={`text-xl font-bold md:text-xl tracking-wide ${poppins.className}`}
        >
          20.1k + Subscribers
        </p>
        <p className={`${caros.className} tracking-tight`}>
          <FaYoutube size={50} />
        </p>
      </div>
      {/* <div className=" w-full md:w-4/12 flex flex-col gap-1 md:gap-2 md:text-lg items-center justify-center">
        <p
          className={`text-xl font-bold md:text-xl tracking-wide ${poppins.className}`}
        >
          80k Followers
        </p>
        <p className={`${caros.className} tracking-tight`}>
          <BiLogoTwitter size={50} />
        </p>
      </div> */}
    </div>
  );
}
