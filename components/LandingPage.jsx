import React from "react";

import CompetitionRegistration from "@/components/HomePageComponent/CompetationRegistration";
import Recomendation from "@/components/HomePageComponent/Recomendation";
import HowToRegister from "@/components/HomePageComponent/HowToRegister";
import WhyJoin from "@/components/HomePageComponent/WhyJoin";
import Faq from "@/components/HomePageComponent/Faq";
import Footer from "@/components/HomePageComponent/Footer";
import { Inter, Poppins } from "next/font/google";
import localFont from "next/font/local";
import img from "@/public/asset/hero.png";

import Link from "next/link";
import Header from "./Header";
import Image from "next/image";
import Stats from "./PricingPageComponent/Stats";

const publicaSans = localFont({
  src: "../public/fonts/PublicaSans.otf",
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
  src: "../public/fonts/Caros.otf",
});

export default function LandingPage() {
  return (
    <div className=" min-w-full min-h-[100vh] home">
      <Header />
      <div className="">
        <div className=" flex flex-col gap-20  md:gap-0 md:flex-row my-20 md:my-16  items-center justify-between">
          <div className=" md:w-5/12 lg:mt-[50px] mx-auto text-center flex flex-col items-center px-2 md:px-0">
            <p
              className={`${publicaSans.className}text-[#0B1D51] text-[33px] font-medium leading-9 `}
            >
              <span
                className={`${publicaSans.className} text-green-500  underline   text-[33px] md:text-4xl xl:text-4xl md:leading-[110%] tracking-tight font-medium`}
              >
                RJ MANISH CHAUBEY{" "}
              </span>
              <span
                className={`${publicaSans.className} text-[#0B1D51] text-[33px] md:text-4xl xl:text-4xl md:leading-[110%] tracking-tight font-medium`}
              >
                GENERATE YOUR 2ND SOURCE OF INCOME{" "}
              </span>
              <br />
              <span
                className={`${publicaSans.className}  text-[#0B1D51] text-[33px] md:text-3xl md:leading-[110%] tracking-tight font-medium`}
              >
                By creating short videos
              </span>
            </p>

            {/* desktop site */}

            <div className="hidden md:block">
              <p
                className={`text-[#0B1D51] font-medium mt-[100px] lg:mt-[150px] text-xl md:text-2xl leading-[25px] ${inter.className}`}
              >
                Register Now in Our Courses
              </p>

              <Link
                href={"/course"}
                className=" cursor-pointer mt-[12px] px-5 py-[13px] bg-[#d63970] rounded-[10px] justify-center items-center gap-2.5 inline-flex"
              >
                <div
                  className={` ${poppins.className} text-center text-white text-[25px] font-bold font-['Poppins'] leading-snug`}
                >
                  Explore Now
                </div>
              </Link>
              <p
                className={`${caros.className} text-[#0B1D51] text-lg mt-[23px] md:text-xl text-center`}
              >
                Get the benefit of all exclusive content !
              </p>
            </div>
          </div>
          <div className="md:w-5/12 flex ">
            <div className="image "></div>
          </div>
        </div>

        <div className=" flex flex-col items-center  justify-center">
          <CompetitionRegistration />

          <Recomendation />
          <div className="w-full mx-auto flex items-center justify-around my-10 md:my-20">
            <div className="flex justify-center items-center gap-20 flex-wrap">
              <div className="w-[80%] md:w-[20%]">
                <p className="text-2xl  md:text-3xl font-bold text-[#0B1D51] ">
                  <span className="underline">
                    FROM A BOY WHO EARN 40,000 IN A MONTH TO EARNING 60 LAKH IN
                    A YEAR.
                  </span>
                  <span className="text-xl mt-5 block font-medium ">
                    We want you to learn the skills on our platform and use it
                    to showcase you talent over socail media and generate your
                    2nd source of income
                  </span>{" "}
                </p>
              </div>
              <div className="">
                <video
                  src="asset/vid1.mp4"
                  width={300}
                  controls
                  muted
                  autoPlay
                />
                {/* <video src="asset/vid2.mp4" width={200} controls muted /> */}
              </div>
            </div>
          </div>
        </div>

        {/* <div className=" md:bg-[#EEEFFC] w-full felx-col md:flex md:flex-row-reverse items-center justify-around">
            <HowToRegister />
          </div> */}
        <div className=" flex flex-col md:flex-col-reverse md:p-0 w-full ">
          <WhyJoin />
        </div>
        <div className="mb-5 w-full">
          <Stats />
        </div>
        <Faq />
        <Footer />
      </div>
    </div>
  );
}
