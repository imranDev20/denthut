import React from "react";

const Service = ({ name, icon, detail }) => {
  return (
    <div className="flex items-center">
      <img className="w-20 h-20 mr-4" src={icon} alt="" />
      <div>
        <h5 className="font-semibold text-xl text-cyan-400">{name}</h5>
        <p className="text-neutral-400">{detail}</p>
      </div>
    </div>
  );
};

export default Service;
