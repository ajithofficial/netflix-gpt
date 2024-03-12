import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
      </div>
      <form className="w-4/12 absolute bg-black top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] px-20 py-16 rounded-md">
        <h1 className="text-white text-3xl font-semibold mb-5">Sing In</h1>
        <input type="text" placeholder="Email or phone number" className="w-full px-5 py-3 m-2 rounded-sm bg-neutral-800" />
        <input type="password" placeholder="Password" className="w-full px-5 py-3 m-2 rounded-sm" />
        <button className="p-2 m-2 w-full bg-red-600 text-white font-semibold rounded-sm">Sing In</button>
      </form>
    </div>
  );
};

export default Login;
