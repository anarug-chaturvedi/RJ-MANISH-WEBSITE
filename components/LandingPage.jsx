import Image from "next/image";
import React from "react";
import star from "@/public/asset/star-logo.png";
import starkid from "@/public/asset/starkid.png";

import CompetitionRegistration from "@/components/HomePageComponent/CompetationRegistration";
import TalentPage from "@/components/HomePageComponent/TalentPage";
import Recomendation from "@/components/HomePageComponent/Recomendation";
import CompetationDisplay from "@/components/HomePageComponent/CompetationDisplay";
import HowToRegister from "@/components/HomePageComponent/HowToRegister";
import PerksOfJoining from "@/components/HomePageComponent/PerksOfJoining";
import WhyJoin from "@/components/HomePageComponent/WhyJoin";
import Faq from "@/components/HomePageComponent/Faq";
import Footer from "@/components/HomePageComponent/Footer";
import { Inter, Poppins, Public_Sans } from "next/font/google";
import localFont from "next/font/local";
import HeroSection from "@/components/DesktopVersion/HomePageComponents/HeroSection";
import Talent from "@/components/DesktopVersion/HomePageComponents/Talent";
import Challenges from "@/components/HomePageComponent/Challenges";
import Link from "next/link";

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
    <div className=" min-w-full bg-[#1B1D30] min-h-[100vh] home">
      {/* <p className={`${publicaSans.className} font-bold text-3xl text-white`}> Lorem isadfl aldkfj aldfj ald fcaor sfont  </p> */}
      <div className="">
        <div className=" flex items-center justify-center md:justify-start py-[10px] md:pl-[43px] md:pt-[33px]">
          {/* <Image
            src={star}
            height={40}
            width={40}
            alt="star"
            className=" md:w-[60px] md:h-[60px] "
          /> */}
          <span className="powerSmurf text-white text-[26px] sm:text-4xl  cursor-pointer font-bold">
            RJ Manish
          </span>
          {/* <Image
            src={starkid}
            height={13}
            width={60}
            alt="starkid"
            className=" md:w-[100px] md:h-[22px] "
          /> */}
        </div>

        <div className=" flex flex-col md:flex-row md:mb-16 md:min-h-screen">
          <div className=" md:w-5/12 lg:mt-[50px] mx-auto text-center flex flex-col  items-center px-2 md:px-0">
            <p
              className={`${publicaSans.className}text-white text-[33px] font-medium leading-9 `}
            >
              <span
                className={`${publicaSans.className} text-green-500  underline   text-[33px] md:text-4xl xl:text-4xl md:leading-[110%] tracking-tight font-medium`}
              >
                RJ MANISH CHAUBEY{" "}
              </span>
              <span
                className={`${publicaSans.className} text-white text-[33px] md:text-4xl xl:text-4xl md:leading-[110%] tracking-tight font-medium`}
              >
                GENERATE YOUR 2ND SOURCE OF INCOME{" "}
              </span>
              <br />
              <span
                className={`${publicaSans.className}  text-white text-[33px] md:text-3xl md:leading-[110%] tracking-tight font-medium`}
              >
                By creating short videos
              </span>
            </p>

            {/* <p
              className={`${caros.className} text-white text-[15px] font-light font-['Caros'] leading-[18px] mt-[12px] lg:mt-[45px]`}
            >
              <span
                className={` block ${caros.className} font-light md:text-[16px] xl:text-[25px] md:leading-[30px] md:tracking-[-0.41px]`}
              >
                Join India's Most Trusted Platform to discover
              </span>
              <span
                className={` block ${caros.className} font-light md:text-[16px] xl:text-[25px] md:leading-[30px] md:tracking-[-0.41px]`}
              >
                and showcase young talents through{" "}
              </span>
              <span
                className={` block ${caros.className}  text-white font-bold md:text-[16px] xl:text-[25px] md:leading-[30px] md:tracking-[-0.41px]`}
              >
                <span
                  className={`${caros.className} font-light md:text-[16px] xl:text-[25px] md:leading-[30px] md:tracking-[-0.41px]`}
                >
                  Competitions{" "}
                </span>{" "}
                guided by Experts
              </span>
            </p> */}

            {/* desktop site */}

            <div className="hidden md:block">
              <p
                className={`text-white font-medium mt-[100px] lg:mt-[150px] text-xl md:text-2xl leading-[25px] ${inter.className}`}
              >
                Register Now in Our Courses
              </p>

              {/* <Link
                href={"/"}
                className={`${poppins.className} mt-4 bg-[#5259AA] font-bold text-white py-4 px-8 rounded-lg text-lg`}
              >
                REGISTER NOW
              </Link> */}
              <Link
                href={"/"}
                className=" cursor-pointer mt-[12px] px-5 py-[13px] bg-[#d63970] rounded-[10px] justify-center items-center gap-2.5 inline-flex"
              >
                <div
                  className={` ${poppins.className} text-center text-white text-[25px] font-bold font-['Poppins'] leading-snug`}
                >
                  REGISTER NOW
                </div>
              </Link>
              <p
                className={`${caros.className} text-white text-lg mt-[23px] md:text-xl text-center`}
              >
                Get the benefit of all exclusive content !
              </p>
            </div>
          </div>
          {/* desktop view */}
          {/* <HeroSection /> */}
        </div>

        <div className=" flex flex-col items-center  justify-center">
          <CompetitionRegistration />

          {/* <TalentPage /> */}
          {/* desktop page */}
          {/* <Talent /> */}
          {/*  */}

          <Recomendation />

          <div className=" md:bg-[#EEEFFC] w-full felx-col md:flex md:flex-row-reverse items-center justify-around">
            {/* <CompetationDisplay /> */}

            <HowToRegister />
          </div>
          <div className=" flex flex-col md:flex-col-reverse md:p-0 w-full">
            {/* <PerksOfJoining /> */}
            <WhyJoin />
          </div>
          {/* <Challenges /> */}
          <Faq />
          <Footer />
        </div>
      </div>
    </div>
  );
}
