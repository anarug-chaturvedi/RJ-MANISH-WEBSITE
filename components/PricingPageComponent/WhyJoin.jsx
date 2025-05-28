import React from "react";
import join1 from "@/public/asset/join1.png";
import join2 from "@/public/asset/join2.png";
import join3 from "@/public/asset/join.png";
import certficate from "@/public/asset/certficate.png";
import Image from "next/image";
import localFont from "next/font/local";
import { Inter, Poppins, Public_Sans } from "next/font/google";

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
    <div className=" bg-[#EEEFFC] w-full block md:hidden">
      <div className=" flex flex-col items-center justify-center mt-10">
        <div
          className={`${publicaSans.className} text-center font-bold w-9/12`}
        >
          <span className="text-[#1b1d30] text-[26px]  font-['Publica Sans'] leading-[24.5px] tracking-[-0.408px]">
            What Makes{" "}
          </span>
          <span className="text-[#d63970] text-[26px]  font-['Publica Sans'] leading-[24.5px] tracking-[-0.408px]">
            RJ Manish Unique?
          </span>
        </div>
        <div
          className={` ${caros.className} my-5 flex flex-col items-center justify-center w-full gap-y-7`}
        >
          <div className=" flex justify-between items-center h-auto w-[90%] bg-[#1B1D30] text-white px-3 py-2">
            <Image src={join3} alt="join1" className=" h-[107px] w-[118px] " />
            <div className=" flex flex-col gap-1 items-end justify-center text-end ">
              <p className=" w-[80%] font-bold">Medals for Winner</p>
              <p className=" w-[70%] text-[9px] ">
                A tangible reward for the skills and effort you put into every
                competition.
              </p>
            </div>
          </div>
          <div className=" flex justify-between items-center h-auto w-[90%] bg-[#1B1D30] text-white px-3 py-2">
            <Image
              src={certficate}
              alt="join1"
              className=" h-[107px] w-[118px] "
            />
            <div className=" flex flex-col gap-1 items-end justify-center text-end ">
              <p className=" w-[80%] font-bold"> E-Certificates for all</p>
              <p className=" w-[70%] text-[9px] ">
                Every child receives a certificate to celebrate their effort and
                creativity!
              </p>
            </div>
          </div>
          <div className=" flex justify-between items-center h-auto w-[90%] bg-[#1B1D30] text-white px-3 py-2">
            <Image src={join2} alt="join1" className=" h-[107px] w-[118px] " />
            <div className=" flex flex-col gap-1 items-end justify-center text-end ">
              <p className=" w-[80%] font-bold">Featured in Weekly Showcase</p>
              <p className=" w-[70%] text-[9px] ">
                Stand out and let your talent shine as we highlight top
                participants
              </p>
            </div>
          </div>
          <div className=" flex h-[113px] w-[90%] bg-[#1B1D30] text-white px-3 py-2">
            <Image src={join1} alt="join1" className=" h-full w-[40%] " />
            <div className=" flex flex-col gap-1 items-end justify-center text-end ">
              <p className=" w-[80%] font-bold"> Expert Feedback</p>
              <p className=" w-[70%] text-[9px] ">
                Get valuable insights from professionals to help your child
                improve and grow!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
