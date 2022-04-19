import React from "react";
import { Link } from "react-router-dom";

const Service = ({ name, icon, detail, price }) => {
  return (
    <div className="flex items-center shadow-md p-5 bg-white rounded-lg">
      <img className="w-24 h-24 mr-6" src={icon} alt="" />
      <div>
        <h5 className="font-semibold text-xl text-cyan-400 my-3">{name}</h5>
        <p className="text-neutral-400">{detail}</p>
        <p className="font-light text-neutral-500 my-2 text-3xl">{price}</p>
        <Link
          className=" text-cyan-400 hover:text-cyan-500 transition font-medium my-3 rounded inline-block"
          to="/checkout"
        >
          Book now
        </Link>
      </div>
    </div>
  );
};

export default Service;
