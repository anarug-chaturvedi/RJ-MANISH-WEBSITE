import React from "react";
import brand from "@/public/asset/brand.png";
import payment from "@/public/asset/payment.png";
import Image from "next/image";
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from "react-icons/bi";
import localFont from "next/font/local";
import Link from "next/link";

const caros = localFont({
  src: "../../public/fonts/Caros.otf",
});

export default function Footer({ pricing }) {
  return (
    <div
      className={` ${caros.className} relative bg-[#EEEFFC] ${
        pricing ? "md:bg-[#EEEFFC]" : "md:bg-[#1B1D30]"
      }  ${
        !pricing ? "md:text-[#EEEFFC]" : "md:text-[#1B1D30]"
      } flex flex-col md:flex-row w-full items-center justify-center md:justify-evenly md:items-start  mt-20 md:mt-0 md:py-0 pt-20`}
    >
      <div
        className={`-top-[8%] md:-top-[12%] left-[calc(50%-55px)] bg-[#EEEFFC] absolute z-50 ${
          pricing ? "md:bg-[#EEEFFC]" : "md:bg-[#1B1D30]"
        } p-[5px] lg:p-[10px] rounded-full`}
      >
        <Image src={brand} alt="brand" className="w-[100px]" />
        {/* <span className="powerSmurf text-white w-[100px] text-[26px]  cursor-pointer font-bold">
          RJ Manish
        </span> */}
      </div>
      <div className=" flex flex-col md:flex-row-reverse  md:justify-evenly md:w-8/12 w-full">
        <div className=" flex flex-col items-center justify-start md:pt-32 gap-3 md:w-6/12 md:mt-0">
          <p className="text-center w-[50%] text-base  md:text-[22px] font-medium leading-tight">
            {" "}
            RJ Manish: Where You will learn to Grow! ✨
          </p>
          <p className="mt-2 text-base  md:text-[22px] font-medium leading-snug">
            Let’s Get Social!
          </p>

          <div className=" flex gap-3">
            <BiLogoTwitter size={20} />
            <BiLogoFacebook size={20} />
            <BiLogoInstagram size={20} />
          </div>
          <Image
            src={payment}
            alt="payment partner"
            className=" hidden md:flex md:w-[340px] lg:w-[380px] mt-10 "
          />
        </div>

        <div
          className={` md:h-[460px] md:w-[1px] w-full h-[1px] mt-5 md:mt-0 bg-[#1B1D30] opacity-50 ${
            !pricing ? "md:bg-[#EEEFFC]" : "md:bg-[#1B1D30]"
          }`}
        ></div>

        <div className="mt-[41px] md:mt-[90px] flex items-center flex-col justify-center text-center md:text-start  font-semibold md:w-6/12 md:pb-20">
          <ul className="space-y-[18px] md:space-y-[25px] text-sm md:text-[22px]">
            <li className="text-[17px] md:text-[25px] font-meditum uppercase mb-5 text-[#6D6D6D] ">
              <span>Company</span>
            </li>
            <li>
              <Link href="/about-us" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/request-demo" className="hover:underline">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/refund-cancellation" className="hover:underline">
                Refund & Cancellation Policy
              </Link>
            </li>
            <li>
              <Link href="/shipping-delivery" className="hover:underline">
                Shipping & Delivery
              </Link>
            </li>
            <li>
              <Link href="/terms-and-conditions" className="hover:underline">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div
        className={` md:h-[460px] md:w-[1px] w-full h-[1px] mt-5 md:mt-0 bg-[#1B1D30] opacity-50 ${
          !pricing ? "md:bg-[#EEEFFC]" : "md:bg-[#1B1D30]"
        }`}
      ></div>

      <div className="my-[41px] md:mt-[60px]  flex flex-col items-center justify-center font-semibold md:w-4/12 md:pb-20">
        <ul className=" gap-y-[18px] md:space-y-[25px] text-sm md:text-[22px] font-semibold md:text-lg md:py-5 md:flex md:flex-col md:items-start text-center md:w-5/12">
          <li className="text-[17px] md:text-[25px]  uppercase mb-5 text-[#6D6D6D] ">
            <span>Products</span>
          </li>
          <li>
            <Link href="/" className="hover:underline">
              RJ Manish
            </Link>
          </li>
        </ul>
        <Image
          src={payment}
          alt="payment partner"
          className="md:hidden w-[350px] mt-10 "
        />
      </div>
    </div>

    // <footer className="bg-gray-100 text-gray-800 py-8 text-center">
    //   <div className="max-w-4xl mx-auto px-4">
    //     <h2 className="text-lg font-semibold">
    //       StarKid: Where Talent Shines Bright! ✨
    //     </h2>
    //     <p className="mt-2 text-sm">Let’s Get Social!</p>

    //     {/* Social Media Icons */}
    //     <div className="flex justify-center gap-4 mt-3">
    //     <Image src={inst} height={30} alt="starkid" />
    //     <Image src={inst} height={30} alt="starkid" />
    //     <Image src={inst} height={30} alt="starkid" />
    //       {/* Link href="#" className="text-gray-700 hover:text-gray-900">
    //         <FaTwitter size={20} />
    //       </a> */}
    //       {/* <a href="#" className="text-gray-700 hover:text-gray-900">
    //         <FaFacebookF size={20} />
    //       </a> */}
    //       {/* <a href="#" className="text-gray-700 hover:text-gray-900">
    //         <FaInstagram size={20} />
    //       </a> */}
    //     </div>

    //     {/* Company Section */}
    //     <div className="mt-8">
    //       <h3 className="text-md font-semibold uppercase text-[#6D6D6D]">Company</h3>
    //       <ul className="mt-3 space-y-2 text-sm">
    //         <li><a href="#" className="hover:underline">About Us</a></li>
    //         <li><a href="#" className="hover:underline">Contact Us</a></li>
    //         <li><a href="#" className="hover:underline">Privacy Policy</a></li>
    //         <li><a href="#" className="hover:underline">Refund & Cancellation Policy</a></li>
    //         <li><a href="#" className="hover:underline">Shipping & Delivery</a></li>
    //         <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
    //       </ul>
    //     </div>

    //     {/* Products Section */}
    //     <div className="mt-8">
    //       <h3 className="text-md font-semibold uppercase text-[#6D6D6D]">Products</h3>
    //       <ul className="mt-3 space-y-2 text-sm">
    //         <li><a href="#" className="hover:underline">Starkid App</a></li>
    //       </ul>
    //     </div>
    //   </div>
    // </footer>
    //   );
    // }
  );
}
