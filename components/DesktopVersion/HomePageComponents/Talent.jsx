import React from "react";
import Image from "next/image";
import talent1 from "@/public/asset/talent1.png";
import talent2 from "@/public/asset/talent2.png";
import talent3 from "@/public/asset/talent3.png";
import { Public_Sans } from "next/font/google";
import localFont from "next/font/local";

const publicaSans = localFont({
  src: "../../../public/fonts/PublicaSans.otf",
});
const caros = localFont({
  src: "../../../public/fonts/Caros.otf",
});

export default function Talent() {
  return (
    <>
      <div className="hidden md:block text-center w-full bg-[#EEEFFC] pt-10">
        <div className={`text-center mb-[66px]  ${publicaSans.className}`}>
          <span className="text-[#1b1d30] text-[26px] lg:text-[52px] font-bold font-['Publica Sans'] leading-normal">
            Turning{" "}
          </span>
          <span className="text-[#d63970] text-[26px] lg:text-[52px] font-bold font-['Publica Sans'] leading-normal">
            Talents into Opportunities!
          </span>
        </div>
        <div
          className={`${caros.className} w-full flex gap-[40px]  flex-wrap items-center justify-center`}
        >
          <div className="w-11/12 md:w-[385px] h-[375px] rounded-lg">
            <Image src={talent3} className="w-full" alt="talent" />
            <div className=" w-full overflow-clip leading-5 bg-[#00AFAA] rounded-b-lg p-4 text-center">
              <span className="text-white  font-medium font-['Caros']">
                Aryan’s public speaking experience with us gave him the
              </span>{" "}
              <span className="text-white  font-semibold font-['Caros']"></span>
              <span className="text-[#1b1d30]  font-semibold font-['Caros']">
                confidence to participate in a national-level
              </span>{" "}
              <span className="text-white  font-medium font-['Caros']">
                debate competition
              </span>
            </div>
          </div>
          <div className="w-full md:w-[385px] h-[375px] rounded-lg">
            <Image src={talent2} className="w-full" height={300} alt="talent" />
            <div className="w-full leading-5 bg-[#D73970] rounded-b-lg p-4 text-center">
              <span className="text-white  font-medium font-['Caros']">
                The competitions have improved kid's focus and discipline ,
                helping them{" "}
              </span>
              <span className="text-[#1b1d30]  font-semibold font-['Caros']">
                Perform better in school exams
              </span>{" "}
            </div>
          </div>
          <div className="w-full md:w-[385px] h-[375px] rounded-lg">
            <Image src={talent1} className="w-full" height={300} alt="talent" />
            <div className="w-full leading-5 bg-[#FFC56F] rounded-b-lg p-4 text-center">
              <span className="text-white  font-medium font-['Caros']">
                RJ Manish's creative contests boosted Ananya's confidence and
                led her to become
              </span>{" "}
              <span className="text-[#1b1d30]  font-semibold font-['Caros']">
                the Head of her school's Creative Club
              </span>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
