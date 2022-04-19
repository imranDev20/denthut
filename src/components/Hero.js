import React from "react";
import DentistImg from "../images/dentist-high.png";
import { FaPhoneAlt, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="container mx-auto px-10 my-10 flex flex-col lg:flex-row items-center">
      <div className="w-full lg:w-1/2  text-center lg:text-left ">
        <h2 className="text-7xl leading-[80px] text-cyan-400 font-extrabold my-3 drop-shadow">
          We are open and welcoming patients
        </h2>
        <p className="text-neutral-600 text-lg leading-8">
          A dentist, also known as a dental surgeon, is a health care
          professional who specializes in dentistry which means the diagnosis,
          prevention, and treatment of diseases and conditions of the oral
          cavity.
        </p>
        <div className=" my-5">
          <button className="px-4 py-3 rounded-full bg-cyan-400 text-white font-semibold transition inline-flex items-center hover:bg-cyan-500">
            <FaCalendarAlt className="mr-2" /> Appointment
          </button>
          <a
            href="tel:0171111111"
            className="ml-5 px-4 py-3 rounded-full text-cyan-400 font-semibold transition inline-flex items-center hover:bg-cyan-400/20"
          >
            <FaPhoneAlt className="mr-2" /> Call Us
          </a>
        </div>
      </div>
      <div className="flex justify-center lg:justify-end mt-10 lg:mt-0 w-full lg:w-1/2 ">
        <img
          className=" h-full max-h-[500px] object-contain"
          src={DentistImg}
          alt=""
        />
      </div>
    </section>
  );
};

export default Hero;
