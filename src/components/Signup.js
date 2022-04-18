import React, { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import app from "../firebase";
import { getAuth } from "firebase/auth";
import GoogleSignInButton from "./GoogleSignInButton";
import { useLocation, useNavigate } from "react-router-dom";

const auth = getAuth(app);

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isValid, setIsValid] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname;

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  // Email Regex
  const emailRegex = /\S+@\S+\.\S+/;

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (emailRegex.test(email)) {
      setIsValid(true);
      setMessage("Your email looks good!");
    } else {
      setIsValid(false);
      setMessage("Please enter a valid email!");
    }
  };

  const handleCreateUser = () => {
    isValid &&
      createUserWithEmailAndPassword(email, password).then(() => {
        navigate(from, { replace: true });
      });
  };

  console.log(error);

  return (
    <div className="container mx-auto px-10 my-10  ">
      <div className="max-w-sm mx-auto flex flex-col shadow-lg border rounded-lg py-7 px-5">
        <h2 className="text-center text-4xl text-neutral-700 mb-3">Sign Up</h2>

        <input
          className="bg-neutral-100 px-5 outline-none focus:ring-2 focus:ring-cyan-400 rounded-full py-2 my-3"
          type="email"
          value={email}
          onChange={(e) => handleEmailChange(e)}
          placeholder="Email"
        />
        <p className="text-red-500 text-sm ml-5">{message}</p>

        <input
          className="bg-neutral-100 px-5 outline-none focus:ring-2 focus:ring-cyan-400 rounded-full py-2  my-3"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          onClick={handleCreateUser}
          className="bg-cyan-400 text-white font-medium hover:bg-cyan-500 transition cursor-pointer px-5 rounded-full py-2  my-2"
        >
          Submit
        </button>
        {/*  */}
        <GoogleSignInButton>Sign Up With Google</GoogleSignInButton>
      </div>
    </div>
  );
};

export default Signup;
