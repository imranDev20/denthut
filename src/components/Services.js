import React, { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

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
            id={service.id}
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
