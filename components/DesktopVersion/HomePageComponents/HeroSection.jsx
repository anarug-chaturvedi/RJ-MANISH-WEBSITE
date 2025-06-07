import Image from "next/image";
import React from "react";
import { Poppins } from "next/font/google";

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
