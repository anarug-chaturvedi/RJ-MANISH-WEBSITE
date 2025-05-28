import Image from "next/image";
import React from "react";
import reg1 from "@/public/asset/reg1.png";
import reg2 from "@/public/asset/reg2.png";
import reg3 from "@/public/asset/reg3.png";
import reg4 from "@/public/asset/reg4.png";
import reg5 from "@/public/asset/reg5.png";
import reg6 from "@/public/asset/reg6.png";

import arrow from "@/public/asset/arrow.png";
import arrowdown from "@/public/asset/arrowdown.png";
import { Poppins, Public_Sans } from "next/font/google";
import localFont from "next/font/local";

const publicaSans = localFont({
  src: "../../public/fonts/PublicaSans.otf",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});
export default function HowToRegister() {
  return (
    <div className=" min-w-full md:min-w-[45%] flex md:flex-col items-center justify-center p-3">
      <div className="px-[37px] my-[32px] flex flex-col items-center justify-center">
        <p
          className={`${publicaSans.className} leading-[28px] tracking-[-0.41px] text-[#d63970] text-center text-[26px] font-bold`}
        >
          How to Register
          <span className="text-white md:text-black text-[26px] font-bold ">
            {" "}
            in Just 3 Simple Steps?
          </span>
        </p>
        <Image
          src={reg1}
          alt="reg1"
          className="w-[301px] mt-[41px] md:hidden "
        />
      </div>
      <div className=" hidden md:flex">
        <Image src={reg2} alt="reg2" className="w-auto h-[500px]" />
      </div>
      {/* desktop view */}
      {/* <div className={`${poppins.className} md:flex flex-col hidden gap-2 items-center justify-center mb-10`}>
        <div className=" flex flex-col gap-2 items-center justify-center ">
          <Image src={reg4} alt="reg4" width={100} />
          <p className=" font-semibold">Click on 'Register Now'</p>
        </div>
        <Image src={arrowdown} alt="arrow down" width={70} />
          <div className=" flex flex-col gap-2 items-center justify-center ">
          <Image src={reg5} alt="reg1" width={100} />
          <p className=" font-semibold">Choose Your Competation</p>
        </div>
        <Image src={arrowdown} alt="arrow down" width={70} />
          <div className=" flex flex-col gap-2 items-center justify-center ">
          <Image src={reg6} alt="reg1" width={100} />
          <p className=" font-semibold">Make the Payment</p>
        </div>
      </div> */}
    </div>
  );
}

// mobile view
// {/*  mobile view*/}
// <div className="flex md:hidden mt-10 items-center justify-between px-[37px]">
//   <div className=" w-[20%] sm:w-[100px] flex flex-col items-center justify-center text-center">
//     <Image src={reg1} alt="reg1" className=" w-full" height={"auto"} />
//     {/* <p className=" font-semibold">Click on 'Register Now'</p> */}
//   </div>
//   <Image
//     src={arrow}
//     alt="arrow"
//     className=" w-[10%] sm:w-[50px] "
//     height={"auto"}
//   />

//   <div className=" w-[20%] sm:w-[100px] flex flex-col items-center justify-center text-center">
//     <Image src={reg2} alt="reg1" className=" w-full" height={"auto"} />
//     {/* <p className=" font-semibold">Choose Your Competition</p> */}
//   </div>
//   <Image
//     src={arrow}
//     alt="arrow"
//     className=" w-[10%] sm:w-[50px] "
//     height={"auto"}
//   />

//   <div className=" w-[20%] sm:w-[100px] flex flex-col items-center justify-center text-center">
//     <Image src={reg3} alt="reg1" className=" w-full" height={"auto"} />
//   </div>
// </div>
// <div
//   className={` md:hidden ${poppins.className} flex mt-3  items-center justify-center text-white`}
// >
//   <div className=" w-[20%] sm:w-[100px] flex flex-col items-center justify-center text-center">
//     <p className=" font-semibold">Click on 'Register Now'</p>
//   </div>
//   <div className=" w-[10%] sm:w-[50px] " />
//   <div className=" w-[20%] sm:w-[100px] flex flex-col items-center justify-center text-center">
//     <p className=" font-semibold">Choose Your Competition</p>
//   </div>
//   <div className=" w-[10%] sm:w-[50px] " />

//   <div className=" w-[20%] sm:w-[100px] flex flex-col items-center justify-center text-center">
//     <p className=" font-semibold">Make the Payment</p>
//   </div>
// </div>
