import React from "react";
import Menu from "./Menu";
import Logo from "./Logo";
import { FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="container mx-auto px-10 py-5 flex items-center justify-between">
      <Logo />
      <div className="flex items-center text-lg">
        <Menu />
        <div className="ml-10">
          <Link
            to="/account"
            className=" px-4 py-2 rounded-full bg-cyan-400 text-white font-semibold transition inline-flex items-center hover:bg-cyan-500"
          >
            <FaSignInAlt className="mr-2" /> Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
