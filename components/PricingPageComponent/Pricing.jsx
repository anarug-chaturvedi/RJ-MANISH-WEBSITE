import React from "react";
import PricingCards from "./PricingCards";
import localFont from "next/font/local";
import { Public_Sans } from "next/font/google";

const publicaSans = localFont({
  src: "../../public/fonts/PublicaSans.otf",
});

const caros = localFont({
  src: "../../public/fonts/Caros.otf",
});

export default function Pricing() {
  return (
    <div>
      <div className=" text-center mt-5 pb-10">
        <p
          className={`${publicaSans.className} text-white text-[33px] lg:text-[56px] lg:leading-[61.6px] tracking-tight leading-9 font-medium`}
        >
          Flexible Choices,
          <span className=" text-[#D73970] "> Unlimited Opportunities!</span>
        </p>
        <p
          className={`${caros.className} px-4 text-sm font-light lg:text-[22px] lg:leading-snug  text-white leading-[18px] tracking-[-0.41px] mt-2 sm:text-base`}
        >
          Pick the best way to shine! Choose one or dual competition for
          recognition, rewards, and growth.
        </p>
        <PricingCards />
      </div>
    </div>
  );
}
