import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_large.jpg"
          alt="background-netflix-logo"
        />
      </div>
      <form className=" w-3/12 absolute bg-black p-12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          ></input>
        )}
        <input
          type="text"
          placeholder="email address"
          className="p-4 my-4 w-full bg-gray-700"
        ></input>
        <input
          type="password"
          placeholder="password"
          className="p-4 my-4 w-full bg-gray-700"
        ></input>
        <button className="p-4 my-4 w-full bg-red-800 rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="m-3 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already  registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
