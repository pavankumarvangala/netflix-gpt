import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSingIn, setIsSignIn] = useState(true);
  const handleSingin = () => {
    setIsSignIn(!isSingIn);
  };
  return (
    <div>
      <Header />

      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form className="flex flex-col p-12 absolute my-36 mx-auto right-0 left-0 bg-black w-3/12 text-white rounded-lg bg-opacity-70">
        <h4 className="text-2xl font-bold p-2">
          {isSingIn ? "Sign In" : "Sign Up"}{" "}
        </h4>
        {!isSingIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 m-2 w-full my-5 bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="email"
          className="p-2 m-2 w-full my-5 bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 m-2 w-full my-5 bg-gray-700"
        />
        <button className="p-2 m-2 my-7 bg-red-700 w-full rounded-lg">
          {isSingIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-2 text-sm cursor-pointer" onClick={handleSingin}>
          {isSingIn
            ? "New to Netflix? Sign Up now"
            : "Already registered Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
