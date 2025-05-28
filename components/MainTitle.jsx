import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
function MainTitle() {
  return (
    <>
    
<section
        className="mt-14  md:mt-8
    "
      >
        <div className="grid grid-cols-1 sm:grid-cols-[2.5fr_2fr] ">
          <div
            className="w-[90%] md:w-[85%] lg:w-[70%] m-auto min-h-[270px]
          items-center flex "
          >
            <div>
              <h1
                className="font-semibold text-[32px]
               leading-[44px] md:text-[40px] md:leading-[56px] mb-0 flex"
              >
                Empowering schools
              </h1>
              <h1
                className="font-semibold text-[32px]
               leading-[44px] md:text-[40px] mb-0 md:leading-[56px]"
              >
                with our  {" "}
                <span className=" relative ">
                  <span className="text-[#4b17d5] md:text-[40px] md:leading-[56px]">
                      Talent Management System
                  </span>
                  {/* <img
                    className="absolute 
                   top-[-27px] right-[-42px]
                
                   bg-no-repeat bg-contain
                   "
                   src="/mainBg.svg"
                   alt="hero-bg"
                   /> */}

                  {/* <img
                    className="
                    absolute
                    top-[-80px] right-[70px]
                     bg-no-repeat bg-contain
                   "
                    src="/mainBg.svg"
                    alt="hero-bg"
                  /> */}
                </span>
              </h1>
              <div className="mt-8 sm:mt-20">
                <Link href="/request-demo">
                  <button
                    className="py-3 px-4
                rounded-lg text-base
                border-none bg-[#5a39d6] text-white"
                  >
                    Request Demo
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className='mx-3 sm:mx-0'>
  <Image  className="  mt-8 sm:mt-0 w-[full] h-full 
  "
   src="/childXl.png" alt="child image"
   width={1200}
   height={1200}
   priority/>
  </div>
        </div>
      </section>
    </>
  )
}

export default MainTitle