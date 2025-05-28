import Faq from "@/components/HomePageComponent/Faq";
import JoinGroup from "@/components/PaymentSuccessfullComponent/JoinGroup";
import StepsToJoin from "@/components/PaymentSuccessfullComponent/StepsToJoin";
import Successfull from "@/components/PaymentSuccessfullComponent/Successfull";
import React from "react";

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
export default function page() {
  return (
    <>
      <div className=" bg-[#1B1D30] w-screen min-h-screen">
        <Successfull />
        <JoinGroup />
        <StepsToJoin />
        <div className=" bg-[#EEEFFC]">

        <Faq success={true} />
        </div>
      </div>
    </>
  );
}
