import React from "react";

import Contact from "./Contact";
import Image from "next/image";
function DemoFormSide() {
  return (
    <>
      <div className="  mt-[50px] md:mt-0 ">
        <div className="relative text-right min-h-[840px] ">
          <Image
            className="w-full  hidden"
            src="/formBg.png"
            alt="form-bg"
            width={200}
            height={200}
            priority
          />
          <Image
            className="w-full flex md:hidden"
            src="/formBgMobile.png"
            alt="form-bg"
            width={200}
            height={200}
          />

          <div
            className=" shadow-2xl rounded-3xl w-[95%] sm:w-[85%] xl:w-[65%] bg-white 
       m-auto  top-[1%] left-[3%]  md:left-0  md:top-[15%]  
        text-left"
          >
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
}

export default DemoFormSide;
