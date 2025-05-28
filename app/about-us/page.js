import Footer from "@/components/HomePageComponent/Footer";
import MainFooter from "@/components/MainFooter";
import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";
import about1 from "../../public/about1.svg";
import about2 from "../../public/about2.svg";
function page() {
  return (
    <>
      <Navbar />

      <section>
        <div>
          <div
            className="  font-semibold text-[24px] sm:text-[40px]
     text-center  mt-16 sm:leading-[52px] mx-6 sm:mx-0"
          >
            <h1> FROM A BOY WHO EARN 40,000 IN A MONTH</h1>
            <h1> TO EARNING 60 LAKH IN A YEAR</h1>
          </div>
          <div
            className="text-base sm:text-xl text-center 
    text-[#475467] mt-6 font-medium
    mx-6 sm:mx-8 lg:mx-0 "
          >
            <p>
              {" "}
              We want to you to learn the skills
              <span className="relative">
                <span className="">on our platform</span>
                <Image
                  className="absolute top-[18px] left-[-4px] w-full"
                  src="/greenLine.svg"
                  alt="greenline"
                  width={100}
                  height={100}
                />
              </span>{" "}
              and use it to
            </p>
            <p>
              <span className="">showcase you talent over socail media</span>
              <span className="relative ">
                {" "}
                and generate your 2nd source of income.
                <Image
                  className="absolute top-[16px] left-0 w-full"
                  src="/greenLine.svg"
                  alt="greenline"
                  width={100}
                  height={100}
                />
              </span>
            </p>
          </div>
        </div>

        <div
          className="grid sm:grid-cols-2 grid-cols-1
 mt-[140px] mx-6 sm:mx-8 lg:mx-[140px] lg:gap-16 xl:gap-12"
        >
          <div className="xl:mt-24">
            <h1 className="font-semibold text-[24px] pb-6 sm:pb-0 sm:text-[40px] ">
              About Me
            </h1>
            <p className="text-[#475467] text-[16px] sm:text-xl pb-8 sm:pb-0">
              I have mastered all the Social Media tips and tricks. And now I
              feel that I should teach my community and all my fellow community
              on how can they make use of all these tips and make a successful
              source of revenue. From Telegram Access where I will give daily
              tips and mentor you personally to my curated courses which I have
              personally designed for easy understanding and quick learning.
            </p>
          </div>
          <div className="w-full h-full ">
            <Image src={about1} alt="about1" />
          </div>
        </div>

        <div
          className="bg-[#F1ECFD] mx-4  md:mx-28 xl:mx-64 h-full py-20 
     mt-20  rounded-3xl"
        >
          <h1
            className="text-[24px] sm:text-[40px]
           font-semibold text-center pb-4 sm:pb-0"
          >
            <span className="relative">
              <span className="">Our Mission </span>

              <Image
                className="absolute top-[-70%] right-[-12%] w-[34px] sm:w-[50px]"
                src="/textWithStars.svg"
                alt="stars"
                width={50}
                height={100}
              />
            </span>
          </h1>
          <p className="text-[#475467] text-[16px] sm:text-xl px-4 text-justify sm:px-16 sm:text-center">
            “Our mission is to empower students and creators across India by
            unlocking the potential of digital tools and social media. We strive
            to create a connected network of schools and learners where talent
            is recognized, nurtured, and celebrated. Through accessible
            mentorship, practical guidance, and high-impact courses, we aim to
            turn passion into profession and help every young dreamer build a
            sustainable source of income in the digital age. We are not just
            teaching social media—we’re teaching financial freedom, digital
            confidence, and future-ready skills.”
          </p>
        </div>

        <div
          className="grid sm:grid-cols-2 grid-cols-1
 mt-[100px] sm:mt-[180px] mx-12 lg:mx-[140px] lg:gap-16 xl:gap-12"
        >
          <div className="w-full h-full ">
            <Image src={about2} alt="about1" />
          </div>

          <div className="xl:mt-24 mt-8">
            <h1 className="font-semibold text-[24px] sm:text-[40px] ">
              Our belief
            </h1>
            <p className="text-[#475467] text-[16px] sm:text-xl">
              We believe that every student has a unique spark, and in today’s
              world, the right platform can turn that spark into a shining
              light. We believe that education should evolve with time, and that
              learning how to build a personal brand, grow on digital platforms,
              and monetize your skills is just as important as traditional
              academics. We believe in community over competition, in guiding
              and growing together, and in giving back the knowledge that helped
              us rise. We believe that if one boy from a small town can go from
              earning ₹40,000 a month to ₹60 lakh a year—so can you.
            </p>
          </div>
        </div>
      </section>

      <MainFooter />
      <div className="my-10 h-20"></div>
      <Footer />
    </>
  );
}

export default page;
