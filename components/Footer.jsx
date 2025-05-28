import React from "react";
import Link from "next/link";
import Image from "next/image";
function Footer() {
  return (
    <>
      <div className="mx-4  sm:w-[80%] sm:m-auto   grid  md:grid-cols-[1fr_1fr_1fr] py-[70px] px-0 pb-8 md:pb-0">
        <div className="flex flex-col items-start  ">
          {/* <img src="/mainLogo.png" alt="main-logo" /> */}
          <Link href="/">
            <div className="powerSmurf text-[#5a39d6] text-3xl  cursor-pointer pl-3 sm:pl-0 ">
              RJ Manish
            </div>
          </Link>
          <div className=" mt-8 ml-2 flex gap-4 pl-2 sm:pl-0">
            <Link href="https://www.linkedin.com/company/eduexplore/">
              <Image
                className="w-6 h-6 overflow-clip "
                src="/linkedin.svg"
                alt="linkedin"
                width={100}
                height={100}
              />
            </Link>
          </div>
        </div>
        <div className="flex  place-content-between  pt-8 md:pt-0 flex-row-reverse sm:flex-row mx-4 sm:mx-0">
          <div>
            <p className="text-[#98a2b3] text-[1em]">PRODUCTS</p>
            <ul className="list-none font-medium">
              <Link href="/">
                <li className="mt-4"> Home</li>
              </Link>
            </ul>
          </div>
          <div>
            <p className="text-[#98a2b3] text-[1em]">COMPANY</p>

            <div className="flex justify-betwwen space-x-12">
              <ul className="list-none font-medium">
                <Link href="/about-us">
                  <li className="mt-4">About us </li>
                </Link>
                <Link href="/request-demo">
                  <li className="mt-4">Contact us </li>
                </Link>
                <Link href="/partner-with-us">
                  <li className="mt-4">Partner with us </li>
                </Link>
              </ul>

              <ul className="list-none font-medium">
                <Link href="/privacy-policy">
                  <li className="mt-4">Privacy Policy </li>
                </Link>
                <Link href="/terms-and-conditions">
                  <li className="mt-4">Terms & Conditions </li>
                </Link>
                <Link href="/refund-cancellation">
                  <li className="mt-4">Refund & Cancellation Policy </li>
                </Link>
                <Link href="/shipping-delivery">
                  <li className="mt-4">Shipping & Delivery </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="m-auto flex  items-center justify-center py-9 px-0">
        <p className="text-[#98a2b3] text-[1em]">
          All rights reserved with EduExplore
        </p>
      </div>
    </>
  );
}

export default Footer;
