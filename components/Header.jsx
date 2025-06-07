"use client";
import { LogIn, LogOut, User } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Header() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(token);
  }, []);

  //   const isLoggedIn = localStorage.getItem("token");
  return (
    <div className=" flex items-center  justify-between py-[20px] px-5 ">
      <span className="powerSmurf text-white text-[26px] sm:text-4xl  cursor-pointer font-bold">
        RJ Manish
      </span>
      {isLoggedIn === null || isLoggedIn === "" || isLoggedIn === false ? (
        <div className="flex gap-2">
          <button
            onClick={() => router.push("/login")}
            className=" flex gap-2 py-2 px-4 bg-[#d63970] text-white rounded-md"
          >
            Login <LogIn />
          </button>
          <button
            onClick={() => router.push("/register")}
            className=" py-2 px-4 bg-transparent text-black rounded-md"
          >
            Sign Up
          </button>
        </div>
      ) : (
        <div className="flex gap-5 items-center justify-center">
          <button
            onClick={() => {
              router.push("/my-course");
            }}
            className="bg-none underline text-white text-xl hover:cursor-pointer hover:text-[#d63970]"
          >
            My Courses
          </button>
          <button
            onClick={() => {
              localStorage.clear();
              router.push("/login");
            }}
            className="flex gap-2 py-2 px-4 bg-[#d63970] text-white rounded-md"
          >
            Logout <LogOut />
          </button>
        </div>
      )}
    </div>
  );
}
