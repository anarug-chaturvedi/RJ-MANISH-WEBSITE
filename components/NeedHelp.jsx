import React from "react";

function NeedHelp() {
  return (
    <>
      {/* for laptop screen */}
      {/* <section className="grid grid-cols-[1fr_1.5fr] bg-[#fef0ce] rounded-3xl w-[80%] m-auto mb-[70px]">
        <div className="flex justify-center">
         
          <div className=" lg:scale-110 xl:scale-125  lg:-translate-y-3 xl:-translate-y-4 overflow-clip overflow-content">

          <img
            classsName=" "
            src="/needHelp.svg"
            alt="needHelp"
            
          />
          </div>


        </div>
        <div className="flex flex-col justify-center">
          <h1 className="font-semibold text-5xl leading-6 mb-8 ">Need help?</h1>
          <div className="grid grid-cols-[2fr_0fr_2fr_1fr]">
            <div>
              <p className="text-2xl leading-7 text-[#475467] font-medium">
                {" "}
                Call our helpline no at{" "}
              </p>
              <h3 className="text-[#4315c0] font-semibold leading-8 text-sm md:text-lg xl:text-[28px] ">
                +91-908-229-6189
              </h3>
            </div>
            <div className="border-r-2 border-r-solid border-r-[#98a2b3]" />
            <div className="ml-10">
              <p className="text-2xl leading-7 text-[#475467] font-medium">
                {" "}
                Write to us at{" "}
              </p>
              <h3 className="text-[#4315c0] font-semibold leading-8 text-sm md:text-lg xl:text-[28px] ">
                Contact@eduexplore.in
              </h3>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-2xl leading-7 text-[#475467] font-medium">
              Corporate Office Address{" "}
            </p>
            <h3 className="text-[#4315c0] font-semibold leading-8 text-sm md:text-lg xl:text-[28px] ">
              Mumbai, Maharashtra, 400092
            </h3>
          </div>
        </div>
      </section> */}

      {/* for mobile  */}
      <section
        className="grid md:grid-cols-[1fr_1.5fr] bg-[#fef0ce] 
       rounded-3xl  mx-4  sm:w-[80%] sm:m-auto  mb-[70px] 
       "
      >
        <div className="flex justify-center">
          <div
            className="md:-translate-y-8 xl:scale-125  lg:-translate-y-10
       
            xl:-translate-y-4 overflow-clip overflow-contentf "
          >
            <img
              //  class="lg:w-3/5 w-full xl:w-full bg-green-400"
              className=""
              src="/needHelp.svg"
              alt="needHelp"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center  px-4 md:px-0 py-4 sm:py-0 ">
          <h1
            className="font-semibold text-2xl md:text-3xl  md:pt-2 lg:pt-0
           lg:text-4xl pb-1 xl:text-5xl leading-6 xl:mb-8 px-1"
          >
            Need help?
          </h1>
          <div className="grid  sm:grid-cols-[2fr_0fr_2fr_1fr] px-2  py-4 md:py-0">
            <div>
              <p className="text-xl lg:text-2xl  leading-7 text-[#475467] font-medium">
                {" "}
                Call our helpline no at{" "}
              </p>
              <h3 className="text-[#4315c0] font-semibold leading-8 text-lg lg:text-[22px] xl:text-[28px] ">
                +91-8788677427
              </h3>
            </div>
            <div className="border-r-2 border-r-solid border-r-[#98a2b3]" />
            <div className="sm:ml-10">
              <p className="text-xl lg:text-2xl leading-7 text-[#475467] font-medium">
                {" "}
                Write to us at{" "}
              </p>
              <h3 className="text-[#4315c0] font-semibold leading-8 text-lg lg:text-[22px] xl:text-[28px] ">
                theanuragchaturvedi@gmail.com
              </h3>
            </div>
          </div>
          <div className="md:mt-3 lg:mt-4 px-2  py-4 sm:py-2 md:py-0">
            <p className="text-xl xl:text-2xl leading-7 text-[#475467] font-medium">
              Corporate Office Address{" "}
            </p>
            <h3 className="text-[#4315c0] font-semibold leading-8 text-lg lg:text-[22px] xl:text-[28px] ">
              Mumbai, Maharashtra, 400092
            </h3>
          </div>
        </div>
      </section>
    </>
  );
}

export default NeedHelp;
