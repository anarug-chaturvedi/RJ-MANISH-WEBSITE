import DemoFormSide from "@/components/DemoFormSide";
import Footer from "@/components/HomePageComponent/Footer";
import Navbar from "@/components/Navbar";
import NeedHelp from "@/components/NeedHelp";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <section className=" text-black bg-white ">
        {/* <DemoText /> */}

        <DemoFormSide />
      </section>
      <NeedHelp />
      <div className="mt-20" />
      <Footer />
    </>
  );
};

export default page;
