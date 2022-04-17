import React from "react";
import CustomLink from "./CustomLink";

const Menu = () => {
  const routes = [
    { id: 1, link: "/", name: "Home" },
    { id: 2, link: "/about", name: "About" },
    { id: 3, link: "/checkout", name: "Checkout" },
    { id: 4, link: "/contact", name: "Contact" },
  ];

  return (
    <nav>
      {routes.map((route) => (
        <CustomLink key={route.id} to={route.link}>
          {route.name}
        </CustomLink>
      ))}
    </nav>
  );
};

export default Menu;
