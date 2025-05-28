import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import React from "react";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const caros =  localFont({
  src:"../../public/fonts/Caros.otf"
})

export default function Stats() {
  return (
    <div className=" bg-[#5259AA] text-center text-white flex flex-col gap-y-20 md:flex-row items-center justify-evenly w-full py-10 md:py-14">
      <div className=" w-full md:w-4/12 flex flex-col gap-1 md:gap-2 md:text-lg items-center justify-center">
        <p className={`text-3xl font-bold md:text-4xl tracking-wide ${poppins.className}`}>98%</p>
        <p className={`${caros.className} tracking-tight`} >Satisfaction Rate among Parents</p>
      </div>
      <div className=" w-full md:w-4/12 flex flex-col gap-1 md:gap-2 md:text-lg items-center justify-center">
         <p className={`text-3xl font-bold md:text-4xl tracking-wide ${poppins.className}`}>10,000 + </p>
        <p className={`${caros.className} tracking-tight`} >Registrations</p>
      </div>
      <div className=" w-full md:w-4/12 flex flex-col gap-1 md:gap-2 md:text-lg items-center justify-center">
         <p className={`text-3xl font-bold md:text-4xl tracking-wide ${poppins.className}`}>4.5/5</p>
        <p className={`${caros.className} tracking-tight`} >Rating on Google</p>
      </div>
    </div>
  );
}
