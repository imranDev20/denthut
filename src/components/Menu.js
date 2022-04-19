import React from "react";
import CustomLink from "./CustomLink";

export const routes = [
  { id: 1, link: "/", name: "Home" },
  { id: 2, link: "/about", name: "About" },
  { id: 3, link: "/checkout", name: "Checkout" },
  { id: 4, link: "/blog", name: "Blog" },
];

const Menu = () => {
  return (
    <nav className="flex flex-col lg:flex-row items-center">
      {routes.map((route) => (
        <CustomLink key={route.id} to={route.link}>
          {route.name}
        </CustomLink>
      ))}
    </nav>
  );
};

export default Menu;
