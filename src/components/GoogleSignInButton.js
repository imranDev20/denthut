import React, { Children } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import app from "../firebase";
import { getAuth } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";

const auth = getAuth(app);

const GoogleSignInButton = ({ children }) => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  return (
    <>
      <span className="text-center text-neutral-500">or</span>
      <button
        onClick={() => signInWithGoogle()}
        className="bg-red-400 text-white font-medium hover:bg-red-500 transition cursor-pointer px-5 rounded-full py-2  my-2 flex items-center justify-center"
      >
        <FaGoogle className="mr-2" />
        {children}
      </button>
    </>
  );
};

export default GoogleSignInButton;
