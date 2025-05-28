"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import newBg1 from "../public/newBg1.svg";
import newBg2 from "../public/newBg2.svg";
import newBg3 from "../public/newBg3.svg";
import newBg4 from "../public/newBg4.svg";
import smBg1 from "../public/smBg1.svg";
import smBg2 from "../public/smBg2.svg";
import smBg3 from "../public/smBg3.svg";
import smBg4 from "../public/smBg4.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import MainTitle from "@/components/MainTitle";
import MainBelowImage from "@/components/MainBelowImage";
import MainFooter from "@/components/MainFooter";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

function MyTalent() {
  // making array of all the images so we can use them directly for mobile screen code
  const images = [smBg1, smBg2, smBg3, smBg4];

  const [selectedTab, setSelectedTab] = useState("Competitions");
  const [selectedlargeTab, setSelectedlargeTab] = useState("Competitions");
  const tabs = [
    "Competitions",
    "Feedback",
    "Guided Activities",
    "Digital Presence",
    "",
  ]; // Array of tab names
  const largetabs = [
    "Competitions",
    "Feedback",
    "Activities",
    "digitalPresence",
  ]; // Array of tab names

  useEffect(() => {
    const interval = setInterval(() => {
      // Find the index of the currently selected tab
      const currentIndex = largetabs.indexOf(selectedlargeTab);
      // Calculate the next index
      const nextIndex = (currentIndex + 1) % largetabs.length;
      // Update the selected tab
      setSelectedlargeTab(largetabs[nextIndex]);
    }, 3000); // Change tab every 3000 milliseconds (3 seconds)

    return () => clearInterval(interval); // Cleanup function to clear interval on unmount
  }, [selectedlargeTab, largetabs]);

  const handleTabSelect = (tabName) => {
    setSelectedTab(tabName);
  };
  const handlelargeTabSelect = (tabName) => {
    setSelectedlargeTab(tabName);
  };

  const handleSlideChange = (swiper) => {
    const currentTab = tabs[swiper.activeIndex];
    setSelectedTab(currentTab);
    // console.log(selectedTab)
    // console.log("current tab:",currentTab)
  };

  return (
    <>
      <Navbar />

      <MainTitle />

      {/* for Mobile Screen image section */}

      <section className="w-[90%] m-auto text-center max-w-[1128px] sm:hidden block">
        <div className="mb-7 mt-20">
          <h1 className="font-semibold text-[28px] leading-[38px] md:text-[32px] lg:text-[40px]">
            How does RJ Manish help
            <span className="text-[#4b17d5] md:text-[32px] lg:text-[40px]">
              {" "}
              your to{" "}
            </span>
            grow?
          </h1>
        </div>

        <Swiper
          spaceBetween={10}
          slidesPerView={2}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          onSlideChange={handleSlideChange}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <div className="grid grid-cols-[1fr_1fr_1fr_1fr] overflow-x-scroll w-full">
            {tabs.map((tab, index) => (
              <SwiperSlide key={tab}>
                <div
                  className={`!w-[180px] h-[100px] flex items-center justify-center relative cursor-pointer text-lg rounded-t-lg ${
                    selectedTab === tab
                      ? "bg-[#C1D3FF] text-[#101828] text-xl md:font-medium"
                      : "text-[#475467]"
                  }`}
                  onClick={() => handleTabSelect(tab)}
                >
                  <div className="h-20 w-[80%] m-auto py-[15px] flex items-center flex-col justify-center text-center">
                    {tab}
                  </div>
                  <Image
                    className={`absolute bottom-0 right-18 ${
                      selectedTab === tab ? "flex" : "hidden"
                    }`}
                    src="/blue-cone.svg"
                    alt="blue-cone"
                    width={40}
                    height={40}
                  />
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>

        {/* Background images */}
        <div className="max-w-[1128px] bg-[#e3ebfe]">
          {tabs.map((tab, index) => (
            <div
              key={tab}
              className={`${selectedTab === tab ? "flex" : "hidden"}`}
            >
              <Image
                src={images[index] || "/smBg1.svg"}
                className="w-full h-full"
                alt={`image${index + 1}`}
                priority
                width={500}
                height={500}
              />
            </div>
          ))}
        </div>
      </section>

      {/* for tablet and desktop screens */}

      <section className="w-[80%] m-auto text-center max-w-[1128px] flex-grow sm:block hidden">
        <div className="min-h-[500px]">
          <div className="mb-7 mt-20">
            <h1
              className="font-semibold text-[28px] leading-[38px] md:text-[32px] lg:text-[40px]
          "
            >
              How does RJ Manish help
              <span className=" text-[#4b17d5] md:text-[32px] lg:text-[40px]">
                {" "}
                you to{" "}
              </span>
              grow?
            </h1>
          </div>

          <div
            className="grid grid-cols-[1fr_1fr_1fr_1fr]
          overflow-x-scroll overflow-y-hidden md:overflow-x-hidden  "
          >
            {" "}
            <div
              className={`w-[180px] h-[100px]
                md:h-[124px] md:py-[10px] md:px-0 md:w-full
                flex items-center justify-center relative cursor-pointer text-lg
          rounded-t-lg  ${
            selectedlargeTab === "Competitions"
              ? "bg-[#C1D3FF] text-[#101828]  text-xl md:font-medium "
              : "text-[#475467]  "
          }
            `}
              onClick={() => handlelargeTabSelect("Competitions")}
            >
              <div
                className="h-10 w-[83%] m-auto 
                   py-[15px] px-0 flex items-center
      flex-col justify-center  text-center"
              >
                Competitions
              </div>
              <img
                className={`absolute bottom-0 right-18  ${
                  selectedlargeTab === "Competitions" ? "flex" : "hidden"
                }`}
                src="/blue-cone.svg"
                alt="blue-cone"
              />
            </div>
            <div
              className={`w-[180px] h-[100px]  flex items-center justify-center relative cursor-pointer
          rounded-t-lg text-lg  md:h-[124px] md:py-[10px] md:px-0
          md:w-full ${
            selectedlargeTab === "Feedback"
              ? "bg-[#C1D3FF] text-[#101828] text-xl md:font-medium"
              : "text-[#475467]"
          }`}
              onClick={() => handlelargeTabSelect("Feedback")}
            >
              <div
                className="h-10 w-[83%] m-auto 
                   py-[15px] px-0 flex items-center
      flex-col justify-center  text-center"
              >
                Feedback
              </div>
              <img
                className={`absolute bottom-0 right-18  ${
                  selectedlargeTab === "Feedback" ? "flex" : "hidden"
                }`}
                src="/blue-cone.svg"
                alt="blue-cone"
              />
            </div>
            <div
              className={`w-[180px] h-[100px]  flex items-center justify-center 
            rounded-t-lg relative cursor-pointer text-lg  md:h-[124px] 
            md:py-[10px] md:px-0 md:w-full ${
              selectedlargeTab === "Activities"
                ? "bg-[#C1D3FF] text-[#101828] text-xl md:font-medium"
                : "text-[#475467]"
            }`}
              onClick={() => handlelargeTabSelect("Activities")}
            >
              <div
                className="text-center
              h-10 w-[83%] m-auto 
                   py-[15px] px-0 flex items-center
      flex-col justify-center  "
              >
                Guided Activities
              </div>
              <img
                className={`absolute bottom-0 right-18  ${
                  selectedlargeTab === "Activities" ? "flex" : "hidden"
                }`}
                src="/blue-cone.svg"
                alt="blue-cone"
              />
            </div>
            <div
              className={`w-[180px] h-[100px]  flex items-center justify-center
            rounded-t-lg relative cursor-pointer text-lg right-[1px] sm:right-0 
              md:h-[124px] md:py-[10px] md:px-0 md:w-full ${
                selectedlargeTab === "digitalPresence"
                  ? "bg-[#C1D3FF] text-[#101828] text-xl md:font-medium"
                  : "text-[#475467]"
              }
            `}
              onClick={() => handlelargeTabSelect("digitalPresence")}
              id="4"
            >
              <div
                className="h-10 w-[83%] m-auto 
                   py-[15px] px-0 flex items-center
      flex-col justify-center  text-center"
              >
                Digital Presence
              </div>
              <img
                className={`absolute bottom-0 right-18  ${
                  selectedlargeTab === "digitalPresence" ? "flex" : "hidden"
                }`}
                src="/blue-cone.svg"
                alt="blue-cone"
              />
            </div>
          </div>

          <div
            className={` max-w-[1128px]  bg-[#e3ebfe]
          `}
          >
            <div
              className={` ${
                selectedlargeTab === "Competitions" ? "flex" : "hidden"
              }`}
            >
              <Image
                src={newBg1}
                className="w-full h-full"
                alt="image1"
                priority
                width={500}
                height={500}
              />
            </div>

            <div
              className={` ${
                selectedlargeTab === "Feedback" ? "flex" : "hidden"
              }`}
            >
              <Image
                src={newBg2}
                className="w-full h-full"
                alt="image2"
                priority
                width={96}
                height={96}
              />
            </div>

            <div
              className={` ${
                selectedlargeTab === "Activities" ? "flex" : "hidden"
              }`}
            >
              <Image
                className="w-full h-full"
                src={newBg3}
                alt="image3"
                priority
                width={96}
                height={96}
              />
            </div>

            <div
              className={` ${
                selectedlargeTab === "digitalPresence" ? "flex" : "hidden"
              }
        `}
            >
              <Image
                className="w-full h-full"
                src={newBg4}
                alt="image4"
                priority
                width={96}
                height={96}
              />
            </div>
          </div>
        </div>
      </section>

      <MainFooter />

      <Footer />
    </>
  );
}

export default MyTalent;
