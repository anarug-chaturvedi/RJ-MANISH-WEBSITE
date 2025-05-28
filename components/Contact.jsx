"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useFormState } from "react-dom";
import { handleFormSubmit } from "@/app/Actions/formAction";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const formRef = useRef(null);

  const [state, formAction] = useFormState(handleFormSubmit, {
    message: null,
  });

  useEffect(() => {
    // case1: when message of success only shows when status true means email send
    if (state.status) {
      window.scrollTo(0, 0);
      formRef.current.reset();
      toast.success(state.message);
    }
    // case2: when message of error show when status false means email not send
    else {
      window.scrollTo(0, 0);
      formRef.current.reset();
      toast.error(state.message);
    }
  }, [state]);

  return (
    <>
      <ToastContainer position="top-center" />
      {/* <div className='min-h-[300px] p-14  '>
    <form ref={formRef} action={formAction}>
      
          <h2 className='text-[1.5em] text-md font-bold '> Book a demo session </h2>
          <input className='p-4  border border-solid border-[#d0d5dd] w-[92%] my-2 rounded-lg '
          type='text'
          placeholder='Your Name'
          id="name"
          name="name"
          required/>
          <input className='p-4  border border-solid border-[#d0d5dd] w-[92%] my-2 rounded-lg '
          type='text'
          placeholder='Your Designation'
          id="designation"
          name="designation"
          required/>
          <input className='p-4  border border-solid border-[#d0d5dd] w-[92%] my-2 rounded-lg '
          type='text'
          id='phone'
          name='phone'
          placeholder='Phone Number'
          required/>
          <input className='p-4  border border-solid border-[#d0d5dd] w-[92%] my-2 rounded-lg '
          type='text'
          id="schoolName"
          name="schoolName"
          placeholder='School name'
          required/>
          <input className='p-4  border border-solid border-[#d0d5dd] w-[92%] my-2 rounded-lg '
          type='email'
          placeholder='School E-mail ID'
          id="email"
          name="email"
          required/>
          <textarea  className='p-4  border border-solid border-[#d0d5dd] w-[92%] my-2 rounded-lg '
          placeholder='Description'
          type="text"
          id="description"
          name="description"
          rows={3}
          required
          />
          <button className='border-none
    bg-[#5a39d6] py-3 px-5 rounded-xl  text-lg text-white
   '> Request Demo </button>
       </form>

        </div> */}

      {/* for mobile */}
      {/* <div id="demo" className='h-[700px] sm:min-h-[300px]  p-8 md:p-14 '> */}
      <div id="demo" className="min-h-[300px]  px-8 py-4   ">
        <form ref={formRef} action={formAction}>
          <h2 className="text-xl leading-8 md:text-[1.5em] text-md font-bold my-5">
            {" "}
            Contact Us{" "}
          </h2>
          <input
            className="p-4  border border-solid border-[#d0d5dd] w-[92%] my-2 rounded-lg "
            type="text"
            placeholder="Your Name"
            id="name"
            name="name"
            required
          />

          <input
            className="p-4  border border-solid border-[#d0d5dd] w-[92%] my-2 rounded-lg "
            type="text"
            id="phone"
            name="phone"
            placeholder="Phone Number"
            required
          />

          <input
            className="p-4  border border-solid border-[#d0d5dd] w-[92%] my-2 rounded-lg "
            type="email"
            placeholder="E-mail ID"
            id="email"
            name="email"
            required
          />
          <textarea
            className="p-4  border border-solid border-[#d0d5dd]
           w-[92%] my-2 rounded-lg "
            placeholder="Description"
            type="text"
            id="description"
            name="description"
            rows={3}
            required
          />
          <button
            className="border-none
    bg-[#5a39d6] py-3 px-5 rounded-xl  text-lg text-white
   "
          >
            {" "}
            Request Demo{" "}
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
