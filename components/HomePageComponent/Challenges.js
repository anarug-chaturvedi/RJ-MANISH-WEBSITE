import Image from "next/image";
import chal from "@/public/asset/chal.png";
import winner from "@/public/asset/winner.png";
import Link from "next/link";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";

const publicaSans = localFont({
  src: "../../public/fonts/PublicaSans.otf",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export default function Challenges() {
  return (
    <>
      <div className=" pt-[21px] bg-[#EEEFFC] w-full flex flex-col items-center justify-center md:bg-[#1B1D30]">
        <div className="  text-center w-11/12 md:w-7/12 lg:w-7/12 md:my-[50px] my-[20px]">
          <span
            className={`text-[#1b1d30] text-[26px] font-semibold md:text-[32px] lg:text-[52px] lg:leading-[50px] md:leading-[30px]  leading-[25px] ${publicaSans.className}  md:text-[#eeeffc]`}
          >
            Explore
          </span>
          <span
            className={`text-[#d63970] text-[26px] font-semibold md:text-[32px] lg:text-[52px] lg:leading-[50px] md:leading-[30px]  leading-[25px] ${publicaSans.className}`}
          >
            {" "}
            Top Challenges
          </span>
          <span
            className={`text-[#1b1d30] md:text-[#eeeffc] text-[26px] font-semibold md:text-[32px] lg:text-[52px] lg:leading-[50px] md:leading-[30px]  leading-[25px] ${publicaSans.className}`}
          >
            {" "}
            and Past Winners
          </span>
        </div>
        <Image
          src={winner}
          alt="winner"
          className=" w-auto h-[450px] mt-[20px] md:hidden"
        />
        <Image
          src={chal}
          alt="winner"
          className=" w-[90%] h-[390px] mt-[20px] hidden md:block"
        />
        <Link
          href={"/"}
          className={`${poppins.className} my-[30px] bg-[#5259AA] font-bold text-white py-4 px-8 rounded-lg text-lg`}
        >
          REGISTER NOW
        </Link>
      </div>
    </>
  );
}
