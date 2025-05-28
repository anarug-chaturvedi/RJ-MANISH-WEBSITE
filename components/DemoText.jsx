import React from 'react'

function DemoText() {
  return (
    <>
         <div className="
        flex flex-col items-start  w-[90%] md:items-center mt-52 ml-auto  gap-y-2
     ">
      {/* <h1 className="font-semibold font-sans text-2xl sm:text-3xl  md:text-4xl  lg:text-5xl flex  "> */}
      <h1 className="font-semibold font-sans text-2xl md:text-4xl lg:text-5xl flex  ">
        Get a
        <span className="relative px-2  ">
          <span className="text-[#4b17d5]  px-2 ">
            demo
            
            <img  className="overflow-clip   absolute top-[-42%] right-[10%] 
            md:top-[-16%] md:right-[8%]" src="/demoStar.svg" alt="demo star"/>
          </span>
        </span>
        of our
      </h1>
      <h1 className="font-semibold font-sans text-2xl  md:text-4xl  lg:text-5xl flex ">
        products and see how
      </h1>
      <h1 className="font-semibold font-sans text-2xl  md:text-4xl  lg:text-5xl flex ">
        we enable your School
      </h1>
      </div>
    </>
  )
}

export default DemoText