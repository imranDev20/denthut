import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import app from "../firebase";
import { getAuth } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

const auth = getAuth(app);

const GoogleSignInButton = ({ children }) => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname;

  return (
    <>
      <span className="text-center text-neutral-500">or</span>
      <button
        onClick={() => {
          signInWithGoogle().then(() => navigate(from, { replace: true }));
        }}
        className="bg-red-500 text-white font-medium hover:bg-red-600 transition cursor-pointer px-5 rounded-full py-2  my-2 flex items-center justify-center"
      >
        <FaGoogle className="mr-2" />
        {children}
      </button>
    </>
  );
};

export default GoogleSignInButton;
