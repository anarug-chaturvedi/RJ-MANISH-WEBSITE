import React from "react";
import Link from "next/link";
import Image from "next/image";
function MainFooter() {
  return (
    <>
      <section className="relative h-[470px] mt-20 sm:mt-40 ">
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            className="w-full h-full object-cover"
            src="/FooterSection.svg"
            alt="footer"
            width={900}
            height={100}
          />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-[95%]">
          <div className="   text-center ">
            <h1 className="text-2xl sm:text-4xl lg:text-[44px] font-bold mb-4 text-white ">
              Interested to know more?
            </h1>
            <h1 className="text-2xl sm:text-4xl lg:text-[44px]  font-bold mb-8 text-white px-8">
              Get in touch with us
            </h1>
            <Link href="/request-demo">
              <button
                className="bg-[white] py-3 px-5 mx-16 rounded-xl 
      text-lg text-[#5a39d6]  "
              >
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainFooter;
