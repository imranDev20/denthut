import React, { useState } from "react";
import Menu from "./Menu";
import Logo from "./Logo";
import AvatarIcon from "../images/avatar-default.png";
import {
  FaSignInAlt,
  FaUserPlus,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import app from "../firebase";
import { getAuth, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

const auth = getAuth(app);

const Header = () => {
  const [user] = useAuthState(auth);
  const [open, setOpen] = useState(false);

  return (
    <header className="container mx-auto px-10 py-5 flex flex-row items-center justify-between">
      <Logo />

      <div
        className={`flex flex-col lg:flex-row justify-center z-10 lg:justify-end items-center text-lg fixed w-full h-full bg-white lg:static top-1/2  ${
          open ? "left-1/2" : "-left-[1000px]"
        }  transform lg:transform-none -translate-y-1/2 -translate-x-1/2 `}
      >
        <Menu />
        {/* Header buttons */}
        {!user ? (
          <div className="lg:ml-10 mt-10 lg:mt-0 flex flex-col lg:flex-row">
            <Link
              to="/login"
              className="mr-2 px-4 py-2 lg:ml-5 rounded-full text-cyan-400 font-semibold transition inline-flex items-center hover:bg-cyan-400/20"
            >
              <FaUserPlus className="mr-2" /> Login
            </Link>
            <Link
              to="/signup"
              className=" px-4 py-2 rounded-full bg-cyan-400 text-white font-semibold transition inline-flex items-center hover:bg-cyan-500"
            >
              <FaSignInAlt className="mr-2" /> Sign Up
            </Link>
          </div>
        ) : (
          <div className="lg:ml-10 mt-10 lg:mt-0 flex flex-col lg:flex-row items-center">
            <div className="w-10 h-10 mr-2 rounded-full overflow-hidden">
              <img
                src={user.photoURL ? user.photoURL : AvatarIcon}
                alt="Avatar Icon"
              />
            </div>
            <p className="text-neutral-600 font-semibold mr-3 mb-5 lg:mb-0">
              {user.displayName ? user.displayName : "New User"}
            </p>
            <button
              onClick={() => {
                signOut(auth);
                toast("User logout successfull.");
              }}
              className="px-4 py-2 rounded-full bg-cyan-400 text-white font-semibold transition inline-flex items-center hover:bg-cyan-500"
            >
              <FaSignOutAlt className="mr-2" /> Logout
            </button>
          </div>
        )}
      </div>
      <button className="lg:hidden" onClick={() => setOpen(!open)}>
        {open ? (
          <FaTimes className="text-3xl text-neutral-600 relative z-[1000]" />
        ) : (
          <FaBars className="text-3xl text-neutral-600 relative z-[1000]" />
        )}
      </button>
    </header>
  );
};

export default Header;
