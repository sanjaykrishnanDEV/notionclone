import React from "react";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div className="fixed  bg-white flex items-center justify-between w-screen p-1 px-2 border-2">
      <div className="flex justify-between items-center font-serif">
        <img src={logo} alt="logo" className=" h-11" />
        <span className="text-xl ms-1 font-semibold">Notion</span>
        <ul className="hidden md:flex flex-wrap p-1">
          <li className="mx-2">Product </li>
          <li className="mx-2">Download</li>
          <li className="mx-2">Solutions</li>
          <li className="mx-2">Resources</li>
          <li className="mx-2">Pricing</li>
        </ul>
      </div>
      <div className="flex justify-center items-center">
        <ul className="hidden md:flex p-1">
          <li className="mx-2">Request a demo </li>
          <li className="mx-2">Log in</li>
          <li className="mx-2 bg-black text-white p-1 rounded-md">
            Get Notion free
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
