import React from 'react'
import Image from 'next/image'
function MainBelowImage() {
  return (
    <>
     <div className={` max-w-[1128px]  
            ${selectedTab === 'reportCard' ?"bg-[#e3ebfe]":" bg-white "}`}>
            <div
              className={` ${selectedTab === "Competitions" ? "flex" : "hidden"}`}
            >
              <Image
               src={bg1} 
              className="w-full h-full"
              alt="image1" 
              priority
              width={500}
              height={500}

              />
            </div>

            <div
              className={` ${selectedTab === "Feedback" ? "flex" : "hidden"}`}
            >
              <Image src={bg2}
               className="w-full h-full"
              alt="image2" priority
              width={96}
              height={96}/>
            </div>

            <div
              className={` ${selectedTab === "Activities" ? "flex" : "hidden"}`}
            >
              <Image
               className="w-full h-full"
               src={bg3}
               alt="image3" priority
              width={96}
              height={96}/>
            </div>

            <div
              className={` ${selectedTab === "reportCard" ? "flex" : "hidden"}
        `}
            >
              <Image 
               className="w-full h-full" 
              src={bg1} alt="image4"
               priority
              width={96}
              height={96}/>
            </div>
          </div>
    </>
  )
}

export default MainBelowImage