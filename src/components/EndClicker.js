import React from "react";
import meow from '../assets/meow.png'
const EndClicker = () => {
  return (
    <div className=" h-screen w-screen flex flex-col justify-center items-center">
      <h1 className="text-7xl w-3/4 text-center font-bold">
        Get started for free
      </h1>
      <p className="text-xl mt-5">
        Play around with it first. Pay and add your team later.
      </p>
      <div className="m-3 flex justify-evenly items-center w-1/3">
        <button className="bg-black text-white p-1 rounded-lg">
          Try Notion free
        </button>
        <p className="text-blue-600">Request a demo</p>
      </div>
      <div><img src={meow} alt="people"/></div>
    </div>
  );
};

export default EndClicker;
