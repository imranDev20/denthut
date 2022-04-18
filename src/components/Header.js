import React from "react";
import Menu from "./Menu";
import Logo from "./Logo";
import { FaSignInAlt, FaUserPlus, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import app from "../firebase";
import { getAuth, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const auth = getAuth(app);

const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  console.log(user);

  return (
    <header className="container mx-auto px-10 py-5 flex items-center justify-between">
      <Logo />
      <div className="flex items-center text-lg">
        <Menu />
        {/* Header buttons */}
        {!user ? (
          <div className="ml-10">
            <Link
              to="/login"
              className="mr-2 px-4 py-2 ml-5 rounded-full text-cyan-400 font-semibold transition inline-flex items-center hover:bg-cyan-400/20"
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
          <div className="ml-10">
            <img src="" alt="" />
            <button
              onClick={() => signOut(auth)}
              className="px-4 py-2 rounded-full bg-cyan-400 text-white font-semibold transition inline-flex items-center hover:bg-cyan-500"
            >
              <FaSignOutAlt className="mr-2" /> Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
