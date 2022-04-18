import React from "react";
import RootCanalIcon from "../images/icons/teeth-root-canal.svg";
import TeethAlignIcon from "../images/icons/teeth-align.svg";
import CavityIcon from "../images/icons/cavity.svg";
import Service from "./Service";

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Root Canal Specialist",
      detail: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      icon: RootCanalIcon,
    },
    {
      id: 2,
      name: "Alignment Specialist",
      detail: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      icon: TeethAlignIcon,
    },
    {
      id: 3,
      name: "Cosmetic Dentistry",
      detail: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      icon: CavityIcon,
    },
    {
      id: 4,
      name: "Cavity Inspection",
      detail: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      icon: CavityIcon,
    },
    {
      id: 5,
      name: "Live Dental Advisory",
      detail: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      icon: RootCanalIcon,
    },
    {
      id: 6,
      name: "Oral Hygiene Experts",
      detail: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      icon: RootCanalIcon,
    },
  ];

  return (
    <section className="container mx-auto px-10 py-10 bg-neutral-100">
      <h2 className="text-center text-5xl text-cyan-400 font-bold my-3">
        Services
      </h2>
      <p className="text-center w-1/2 mx-auto text-neutral-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ex
        repellendus excepturi quasi veniam harum, autem eum libero modi soluta.
      </p>
      <div className="grid grid-cols-3 gap-6 my-10">
        {services.map((service) => (
          <Service
            key={service.id}
            icon={service.icon}
            name={service.name}
            detail={service.detail}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
