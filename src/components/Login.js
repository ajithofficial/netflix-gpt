import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [signIn, setSignIn] = useState(true);

  const handleToggle = () => {
    setSignIn((prev) => !prev);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
      </div>
      <form autoComplete="off" className="w-3/12 absolute mx-auto my-36 right-0 left-0 text-white bg-black px-10 py-16 rounded-md bg-opacity-80">
        <h1 className="text-3xl font-semibold mb-5">
          {signIn ? "Sign In" : "Sign Up"}
        </h1>
        {!signIn && <input
          autoComplete="off"
          type="text"
          placeholder="Full Name"
          className="w-full px-5 py-3 my-3 rounded-sm bg-neutral-800"
        />}
        <input
          autoComplete="off"
          type="text"
          placeholder="Email or phone number"
          className="w-full px-5 py-3 my-3 rounded-sm bg-neutral-800"
        />
        <input
          autoComplete="off"
          type="password"
          placeholder="Password"
          className="w-full px-5 py-3 my-3 rounded-sm bg-neutral-800"
        />
        <button className="p-2 my-3 w-full bg-red-600 font-semibold rounded-sm">
          {signIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-5 cursor-pointer" onClick={handleToggle}>
          {signIn ? "New to Netflix?" : "Already Register?"}
          <b>{signIn ? " Sign up now" : " Sign in now"}</b>
        </p>
      </form>
    </div>
  );
};

export default Login;
