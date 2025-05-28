"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
// import "../app/globals.css";
function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarBg, setNavbarBg] = useState("bg-transparent");

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > 0) {
      setNavbarBg("bg-normal");
    } else {
      setNavbarBg("bg-transparent");
    }
  }, [scrollPosition]);

  return (
    <>
      {/* <header className="sticky top-0 z-10 bg-white block shadow-lg"> */}
      <header className={`sticky top-0 z-10 block   ${navbarBg}`}>
        <div className=" mx-auto flex space-x-2  items-center md:px-[2px] py-2 md:p-4  w-4/5">
          <div className="">
            {/* <img  className="w-48 h-full " src="/mainLogo.png" alt="main-logo"  /> */}
            <Link href="/">
              <div className="powerSmurf text-[#5a39d6] text-[26px] sm:text-4xl  cursor-pointer font-bold">
                RJ Manish
              </div>
            </Link>
          </div>

          {/* for space in middle and whatever code we write from below it will shown from right to left side*/}
          <div className="flex-1" />

          <Link href="/request-demo">
            <div
              className="  flex items-center border-none bg-[#5a39d6]
           text-white px-3 py-4 md:px-5 md:py-3  text-xs  sm:text-lg rounded-xl"
            >
              Request Demo
            </div>
          </Link>
        </div>
      </header>
    </>
  );
}

export default Navbar;
