import React from "react";
import drawing2 from "../assets/drawing2.png";
import metalab from "../assets/metalab.png";
import avatars from "../assets/avatars.png";
import social from "../assets/social.png";
import ling from "../assets/ling.png";
import truck from "../assets/truck.PNG";
const Cutdrawing = () => {
  return (
    <div className="border-2 w-screen">
      <h1 className="font-bold text-xl md:text-3xl text-center mt-20">
        Consolidated tools.
      </h1>
      <h1 className="font-normal text-md md:text-2xl text-center">
        Cut costs.
      </h1>
      <h2 className="px-10 text-4xl font-mono text-center m-4">
        "We got rid of nearly a dozen different tools because of what Notion
        does for us"
      </h2>
      <img src={drawing2} alt="drawing" className="w-screen px-10" />
      <div className=" shadow-xl py-3 w-screen flex flex-wrap justify-center">
        <img src={metalab} alt="metalab" className=" aspect-auto" />
        <div>
          <h1 className="text-xl font-semibold">Justin Watt</h1>
          <p className="text-xs font-semibold">
            Director of ops & Marketing , Metalab
          </p>
        </div>
      </div>
      <h1 className="font-bold text-xl md:text-4xl text-center mt-20">
        Join a global movement.
      </h1>
      <h1 className="font-bold text-xl md:text-4xl text-center mt-2">
        Unleash your creativity.
      </h1>
      <p className="font-normal mt-2 text-center">
        Our vibrant community produces content, teaches courses, and leads
        events all over the world.
      </p>
      <div>
        <img src={avatars} alt="avatars" />
      </div>
      <div className="w-screen flex flex-wrap justify-center ">
        <div className="m-1 bg-slate-300 rounded-lg w-fit p-5 flex flex-col">
          <span className=" text-purple-800 font-bold text-5xl">1M+</span>
          <span>community members</span>
        </div>
        <div className="m-1 mx-3 bg-slate-300 rounded-lg w-fit p-5 flex flex-col">
          <span className=" text-purple-800 font-bold text-5xl">150+</span>
          <span>community groups</span>
        </div>
        <div className="m-1 mx-3 bg-slate-300 rounded-lg w-fit p-5 flex flex-col">
          <span className=" text-purple-800 font-bold text-5xl">50+</span>
          <span>countries represented</span>
        </div>
      </div>
      <div className="flex  justify-center px-10 mt-5">
        <div className="m-1 mx-3 bg-slate-300 rounded-lg w-1/2 p-5 flex flex-col">
          <span className="  font-bold text-xl">
            An always-on support network
          </span>
          <span>Swap setups and share tips in over 149 online communities</span>
          <img src={social} alt="social" className=" h-60 object-contain" />
        </div>
        <div className="m-1 mx-3 bg-slate-300 rounded-lg w-1/2 p-5 flex flex-col">
          <span className="  font-bold text-xl">Choose your language</span>
          <span>
            Notion currently supports English, Korean, Japanese, French, German,
            Spanish, and Portuguese. With more to come!
          </span>
          <img src={ling} alt="lang" className=" mt-2" />
        </div>
      </div>
      <div className="flex  justify-center px-5 mt-5">
        <div className=" h-screen m-5 bg-slate-300 w-1/2 flex items-center">
          <img src={truck} alt="truck" className="p-3" />
        </div>
        <div className="flex flex-col flex-wrap w-1/2 mt-5 px-5 justify-around">
          <div className="rounded-lg p-8 h-1/3 bg-slate-300 flex flex-col justify-center items-center">
            <h2 className="text-xl font-semibold">Deborrah Mecca</h2>
            <p>
              I used to HATE documenting things. And then I started using
              @NotionHQ and I document a lot. A LOT A LOT. Now I just realize
              that it wasn't that I hated documenting, I just hated Google Docs.
            </p>
          </div>
          <div className="rounded-lg p-8 mt-1 h-1/3 w-fit bg-slate-300 flex flex-col  justify-center items-center">
            <h2 className="text-xl font-semibold">Deborrah Mecca</h2>
            <p>
              I used to HATE documenting things. And then I started using
              @NotionHQ and I document a lot. A LOT A LOT. Now I just realize
              that it wasn't that I hated documenting, I just hated Google Docs.
            </p>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Cutdrawing;
