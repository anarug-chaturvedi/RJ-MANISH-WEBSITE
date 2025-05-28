import { Mulish } from "next/font/google";
import localFont from "next/font/local";
import { FaCheckCircle } from "react-icons/fa";
import tick from "@/public/asset/tick.png";
import Image from "next/image";

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-mlish",
});

const caros = localFont({
  src: "../../public/fonts/Caros.otf",
});

export default function PricingCards() {
  return (
    <div
      className={`${caros.className} flex flex-col lg:flex-row items-center justify-center mt-5 lg:mt-[54px] gap-3`}
    >
      <div className="bg-[#EEEFFC] w-[332px] h-[200px]  lg:w-[491px] lg:h-[598px] rounded-xl px-[21px] lg:px-[47px]  ">
        <div className=" flex justify-evenly lg:flex-col">
          <div className="leftside flex flex-col w-[45%] lg:w-8/12 py-5 lg:mt-[61px]">
            <div className=" flex justify-between items-start flex-col ">
              <p
                className={`${mulish.className} text-3xl font-bold lg:text-6xl lg:leading-[66px]`}
              >
                ₹295
              </p>
              <p className="  text-start text-xs  leading-[14px] mt-[45px] lg:text-[25px] lg:font-medium lg:leading-[30px]">
                Dance Competition
              </p>
            </div>
          </div>
          <div className=" w-[1px] h-[150px] bg-[#1B1D30] opacity-20 lg:hidden"></div>
          <div className="  h-[1px] sm:w-[100%] bg-[#1B1D30] opacity-20 hidden lg:block"></div>

          <div className="rightside w-[60%] lg:w-full  flex items-start justify-center py-5">
            <ul className="space-y-2 text-[10px] font-light  w-[90%] lg:w-full lg:text-xl lg:leading-normal">
              <li className="flex items-center gap-2 text-start">
                {" "}
                <Image
                  src={tick}
                  alt="tick"
                  width={13}
                  className="lg:w-[20px] lg:h-[20px] "
                />{" "}
                Feedback from experts
              </li>
              <li className="flex items-center gap-2 text-start">
                {" "}
                <Image
                  src={tick}
                  alt="tick"
                  width={13}
                  className="lg:w-[20px] lg:h-[20px] "
                />{" "}
                Digital Certificate
              </li>
              <li className="flex items-center gap-2 text-start">
                <Image
                  src={tick}
                  alt="tick"
                  width={13}
                  className="lg:w-[20px] lg:h-[20px] "
                />{" "}
                Medal for Winners
              </li>
              <li className=" flex items-center gap-2 h-12 lg:h-7">
                {/* <Image  src={tick}  alt="tick" width={13} className="lg:w-[20px] lg:h-[20px] "/> Medal for Winners  */}
              </li>
            </ul>
          </div>
        </div>

        <a href="https://payments.cashfree.com/forms/dance_competition">
          <button
            data-layer=""
            className=" w-full lg:text-xl lg:mt-16 lg:font-medium lg:p-[16px] p-[10px] bg-[#5259aa] rounded-[7px] text-[10px] font-medium leading-3 text-white"
          >
            Register Now
          </button>
        </a>
      </div>

      <div className=" relative bg-[#EEEFFC] w-[332px] h-[210px]  lg:w-[491px] lg:h-[598px] rounded-xl px-[21px] lg:px-[47px]  ">
        <p className="absolute top-[4%]  lg:top-[6%] bg-[#D73970] py-[2px] px-[13px]  rounded-xl text-[8px]  text-white lg:text-base lg:leading-[15px] lg:px-[23px] lg:py-[10px]">
          Recommended
        </p>
        <div className=" flex justify-evenly lg:flex-col mt-2">
          <div className="leftside flex flex-col w-[45%] lg:w-8/12 py-5 lg:mt-[61px]">
            <div className=" flex justify-between items-start flex-col ">
              <p
                className={`${mulish.className} text-3xl font-bold lg:text-6xl lg:leading-[66px]`}
              >
                ₹395{" "}
                <span className="text-[15px] text-gray-400 line-through font-light lg:text-4xl">
                  ₹600
                </span>{" "}
              </p>
              <p className="  text-start text-xs  leading-[14px] mt-[45px] lg:text-[25px] lg:font-medium lg:leading-[30px]">
                Dance and Drawing Competition
              </p>
            </div>
          </div>
          <div className=" w-[1px] h-[150px] bg-[#1B1D30] opacity-20 lg:hidden"></div>
          <div className="  h-[1px] sm:w-[100%] bg-[#1B1D30] opacity-20 hidden lg:block"></div>

          <div className="rightside w-[60%] lg:w-full  flex items-start text-start justify-center py-5">
            <ul className="space-y-2 text-[10px] font-light  w-[90%] lg:w-full lg:text-xl lg:leading-normal">
              <li className="flex items-center gap-2">
                {" "}
                <Image
                  src={tick}
                  alt="tick"
                  width={13}
                  className="lg:w-[20px] lg:h-[20px] "
                />{" "}
                Feedback from experts
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <Image
                  src={tick}
                  alt="tick"
                  width={13}
                  className="lg:w-[20px] lg:h-[20px] "
                />{" "}
                Digital Certiifcate
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src={tick}
                  alt="tick"
                  width={13}
                  className="lg:w-[20px] lg:h-[20px] "
                />{" "}
                Medal for Winners
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src={tick}
                  alt="tick"
                  width={13}
                  className="lg:w-[20px] lg:h-[20px] "
                />
                <p>Chance to be featured in our weekly showcase</p>
              </li>
            </ul>
          </div>
        </div>
        <a href="https://payments.cashfree.com/forms/dance_and_drawing_competition">
          <button
            data-layer="Rectangle 5266"
            className="Rectangle5266 w-full lg:text-xl lg:mt-6 lg:font-medium lg:p-[16px] p-[10px] bg-[#5259aa] rounded-[7px] text-[10px] font-medium leading-3 text-white"
          >
            Register Now
          </button>
        </a>
      </div>
    </div>
  );
}
