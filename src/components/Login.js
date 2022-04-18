import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import app from "../firebase";
import { getAuth } from "firebase/auth";
import GoogleSignInButton from "./GoogleSignInButton";

const auth = getAuth(app);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname;

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleSignIn = () => {
    signInWithEmailAndPassword(email, password).then(() => {
      navigate(from, { replace: true });
    });
  };

  return (
    <div className="container mx-auto px-10 my-10  ">
      <div className="max-w-sm mx-auto flex flex-col shadow-lg border rounded-lg py-7 px-5">
        <h2 className="text-center text-4xl text-neutral-700 mb-3">Login</h2>
        <input
          className="bg-neutral-100 px-5 outline-none focus:ring-2 focus:ring-cyan-400 rounded-full py-2 my-3"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />

        <input
          className="bg-neutral-100 px-5 outline-none focus:ring-2 focus:ring-cyan-400 rounded-full py-2  my-3"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <Link
          to="/"
          className="ml-3 text-sm hover:text-cyan-400 text-neutral-500"
        >
          Forgot password?
        </Link>

        <button
          onClick={handleSignIn}
          className="bg-cyan-400 text-white font-medium hover:bg-cyan-500 transition cursor-pointer px-5 rounded-full py-2  my-2"
        >
          Submit
        </button>
        <GoogleSignInButton>Login With Google</GoogleSignInButton>
      </div>
    </div>
  );
};

export default Login;
