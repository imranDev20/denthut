import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import app from "../firebase";
import { getAuth } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import useFromRedirect from "../hooks/useFromRedirect";
import useLoadingAnimation from "../hooks/useLoadingAnimation";
import ScaleLoader from "react-spinners/ScaleLoader";

const auth = getAuth(app);

const GoogleSignInButton = ({ children, isSignUp, isLogin }) => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  // custom hook import to redirect
  const { from, navigate } = useFromRedirect();
  const scaleLoaderCss = useLoadingAnimation();

  return (
    <>
      <span className="text-center text-neutral-500">or</span>
      <button
        onClick={() => {
          signInWithGoogle().then(() =>
            isSignUp && isLogin
              ? navigate("/")
              : navigate(from, { replace: true })
          );
        }}
        className="bg-red-500 text-white font-medium hover:bg-red-600 transition cursor-pointer px-5 rounded-full py-2  my-2 flex items-center justify-center"
      >
        <FaGoogle className="mr-2" />
        {children}
        {loading && (
          <ScaleLoader
            css={scaleLoaderCss}
            size={5}
            height={15}
            width={3}
            color={"#fff"}
            speedMultiplier={1}
          />
        )}
      </button>
    </>
  );
};

export default GoogleSignInButton;
