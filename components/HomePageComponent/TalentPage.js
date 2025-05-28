"use client";
import Image from "next/image";
import talent1 from "@/public/asset/talent1.png";
import talent2 from "@/public/asset/talent2.png";
import talent3 from "@/public/asset/talent3.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import Autoplay module

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../app/globals.css";

import { Public_Sans } from "next/font/google";
import localFont from "next/font/local";
import { useEffect } from "react";
import axios from "axios";

const publicaSans = localFont({
  src: "../../public/fonts/PublicaSans.otf",
});

const caros = localFont({
  src: "../../public/fonts/Caros.otf",
});

export default function TalentPage() {
  // const url = "https://api.cashfree.com/pg/links";

  // const headers = {
  //   "x-api-version": "2023-08-01",
  //   "x-client-id": process.env.NEXT_PUBLIC_CASHFREE_CLIENT_ID,
  //   "x-client-secret": process.env.NEXT_PUBLIC_CASHFREE_CLIENT_SECRET,
  //   "Content-Type": "application/json",
  // };

  // const body = {
  //   customer_details: {
  //     customer_phone: "8999878325",
  //   },
  //   link_amount: 395,
  //   link_currency: "INR",
  //   link_id: "aakashtest",
  //   link_meta: {
  //     notify_url: "https://eduexplore.in/api/whatsapp-webhook",
  //   },
  //   link_notify: {
  //     send_email: false,
  //     send_sms: true,
  //   },
  //   link_notes: { contactId: "789789" },
  //   link_purpose: "Instagram Ad Payment For Competition Registration",
  // };

  // async function getLink() {
  //   try {
  //     // console.log(
  //     //   "this is the cred",
  //     //   process.env.NEXT_PUBLIC_CASHFREE_CLIENT_ID
  //     // );
  //     // console.log(
  //     //   "this is the cred",
  //     //   process.env.NEXT_PUBLIC_CASHFREE_CLIENT_SECRET
  //     // );
  //     // const { data } = await axios.post("/api/cashfree-payment", body);
  //     // console.log(data);
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // }
  // useEffect(() => {
  //   getLink();
  // }, []);
  return (
    <div className=" bg-[#EEEFFC] w-full mt-[36px]  md:hidden">
      <div className="text-center my-[26px] px-[10px]">
        <span
          className={`text-[#1b1d30] text-[26px] font-bold  leading-[24.5px] ${publicaSans.className}`}
        >
          Spark Motivation and Take{" "}
        </span>
        <span
          className={`text-[#d63970] text-[26px]  font-bold  leading-[24.5px] ${publicaSans.className}`}
        >
          Small Steps Towards Big Goals
        </span>
      </div>

      <div
        className={`${caros.className} w-full mx-auto h-auto md:w-[500px] md:h-[500px] mb-10`}
      >
        <Swiper
          slidesPerView={1.4}
          centeredSlides={"true"}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          loop={true} // Enable infinite loop
          autoplay={{
            delay: 2000, // 2 seconds delay
            disableOnInteraction: false, // Keep autoplay even after user interaction
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="w-[260px] h-[280px]  rounded-[10px]">
              <Image
                src={talent3}
                className="w-full"
                height={170}
                alt="talent"
              />
              <div className=" w-full overflow-clip text-xs leading-normal bg-[#00AFAA] rounded-b-[20px]  text-center">
                <p className={`py-[15px] px-[20px] ${caros.className}`}>
                  <span
                    className={`text-white   font-medium ${caros.className}`}
                  >
                    Nistha, a world record-holding gymnast, is taking
                  </span>{" "}
                  <span
                    className={`text-[#1b1d30]  font-semibold ${caros.className}`}
                  >
                    small steps toward her dream of joining a reality dance show
                  </span>{" "}
                  <span
                    className={`text-white  font-medium ${caros.className}`}
                  >
                    by participating in RJ Manish competitions.
                  </span>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[260px] h-[280px]  rounded-[10px]">
              <Image
                src={talent2}
                className="w-full"
                height={170}
                alt="talent"
              />
              <div className=" w-full overflow-clip text-xs leading-normal bg-[#d63970] rounded-b-[20px] py-[15px] px-[20px] text-center">
                <span className={`text-white  font-medium ${caros.className}`}>
                  RJ Manish’s creative contests boosted Kalpita’s confidence and
                  led her to become{" "}
                </span>
                <span
                  className={`text-[#1b1d30]  font-semibold ${caros.className}`}
                >
                  the Head of her school’s Creative Club
                </span>{" "}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[260px] h-[280px]  rounded-[10px]">
              <Image
                src={talent1}
                className="w-full"
                height={170}
                alt="talent"
              />
              <div className=" w-full overflow-clip text-xs leading-normal bg-[#00AFAA] rounded-b-[20px]  text-center">
                <p className="py-[15px] px-[20px]">
                  <span
                    className={`text-white  font-medium ${caros.className}`}
                  >
                    Manan, shy about dancing in front of crowds
                  </span>{" "}
                  <span
                    className={`text-[#1b1d30]  font-semibold ${caros.className} `}
                  >
                    felt motivated and confident
                  </span>{" "}
                  <span
                    className={`text-white  font-medium ${caros.className}`}
                  >
                    after receiving his RJ Manish dance certificate.
                  </span>{" "}
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
