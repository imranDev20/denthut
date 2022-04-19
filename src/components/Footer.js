import React from "react";
import Menu, { routes } from "./Menu";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Logo from "./Logo";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

const Footer = () => {
  const iconStyles = `hover:text-cyan-400 cursor-pointer transition text-xl`;
  const socialIcons = [
    { id: 1, icon: <FaFacebookF className={iconStyles} /> },
    { id: 2, icon: <FaTwitter className={iconStyles} /> },
    { id: 3, icon: <FaInstagram className={iconStyles} /> },
    { id: 4, icon: <FaYoutube className={iconStyles} /> },
  ];
  const position = [51.505, -0.09];

  return (
    <footer className="bg-neutral-100 py-20 mt-10">
      <div className="container mx-auto px-10 grid grid-cols-1 lg:grid-cols-3">
        <div className="p-5">
          <Logo />
          <p className="text-neutral-500 my-5">
            A dentist, also known as a dental surgeon, is a health care
            professional who specializes in dentistry which means the diagnosis,
            prevention, and treatment of diseases and conditions of the oral
            cavity.
          </p>

          {/* Social Icons */}
          <div className="flex justify-start items-center mt-5">
            {socialIcons.map((socialIcon) => (
              <div key={socialIcon.id} className="mx-2 text-neutral-500">
                {socialIcon.icon}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          {routes.map((route) => (
            <Link
              key={route.id}
              className="my-1 text-neutral-500 transition-colors hover:text-cyan-400"
              to={route.link}
            >
              {route.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col justify-center items-center">
          {/* Leaflet Map */}
          <MapContainer
            className="h-full w-3/4"
            center={position}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                This is our UK chamber. <br /> Come visit us already.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <p className="text-center my-5 text-neutral-500">&copy; denthut 2022</p>
      <div className=""></div>
    </footer>
  );
};

export default Footer;
