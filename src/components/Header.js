import React from "react";
import homehero from '../assets/homehero.png'

const Header = () => {
  return (
    <div className="w-screen mt-6  p-10 flex flex-col flex-wrap justify-center items-center">
      <h1 className="text-4xl  md:text-6xl font-bold text-center w-full md:w-1/2">
        Write, plan, share. With AI at your side.
      </h1>
      <h3 className="text-2xl text-center m-2 font-sans font-medium w-full md:w-1/2">
        Notion is the connected workspace where better, faster work happens.
      </h3>
      <button className="bg-black text-white rounded-md p-3 text-base">
        Get Notion Free
      </button>
      <img src={homehero} alt="homehero" className=" w-auto h-32 mt-2 md:h-52"/>
    </div>
  );
};

export default Header;
