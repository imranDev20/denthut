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
    <section className="w-full bg-neutral-100">
      <div className="container mx-auto px-10 py-10">
        <h2 className="text-center text-5xl text-cyan-400 font-bold my-3">
          Services
        </h2>
        <p className="text-center w-1/2 mx-auto text-neutral-600">
          Check our amazing services. Book your reservation today. Get dental
          care at cheaper price and higher quality than anywhere in the world.
        </p>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-6 my-10">
          {services.map((service) => (
            <Service
              key={service.id}
              id={service.id}
              icon={service.icon}
              name={service.name}
              detail={service.detail}
              price={service.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
