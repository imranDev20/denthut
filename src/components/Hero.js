import React from "react";
import DentistImg from "../images/dentist-high.png";
import { FaPhoneAlt, FaCalendarAlt } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Hero = () => {
  return (
    <section className="container mx-auto px-10 my-10 flex flex-row items-center">
      <div className="w-1/2">
        <h2 className="text-7xl leading-[80px] text-cyan-400 font-extrabold my-3 drop-shadow">
          We are open and welcoming patients
        </h2>
        <p className="text-neutral-600 text-lg leading-8">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
          voluptates repellat odio dicta veniam, ad aperiam possimus numquam
          atque, facere ea voluptatem vitae ex quaerat?
        </p>
        <div className=" my-5">
          <button className="bg-cyan-400 hover:bg-cyan-500 px-4 py-3 rounded-full text-white font-semibold transition inline-flex items-center ">
            <FaCalendarAlt className="mr-2" /> Appointment
          </button>
          <button className="ml-5 px-4 py-3 rounded-full text-cyan-400 font-semibold transition inline-flex items-center hover:bg-cyan-400/20">
            <FaPhoneAlt className="mr-2" /> Call Us
          </button>
        </div>
      </div>
      <div className="w-1/2 flex justify-end">
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
