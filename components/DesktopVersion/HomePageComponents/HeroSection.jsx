import Image from "next/image";
import React from "react";
import hero from "@/public/asset/hero.png";
import msg1 from "@/public/asset/msg1.png";
import msg2 from "@/public/asset/msg2.png";
import { Inter, Poppins, Public_Sans } from "next/font/google";
import localFont from "next/font/local";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});


export default function HeroSection() {
  return (
    <>
      <div className="hidden relative w-6/12 md:flex items-center justify-center">
        <Image src={hero} alt="hero" className=" w-[70%] " />
        
      </div>
    </>
  );
}
