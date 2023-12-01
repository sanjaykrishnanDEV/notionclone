import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import figma from "../assets/figma.png";
import pixar from "../assets/pixar.png";
import ddash from "../assets/ddash.png";
import nike from "../assets/nike.png";
import pinterest from "../assets/pinterest.png";
import toyoto from "../assets/toyoto.jpg";
import uber from "../assets/uber.png";
import amazon from "../assets/amazon.png";

const Hero = () => {
  const logos = [figma, pixar, ddash, nike, pinterest, amazon, toyoto, uber];
  return (
    <div className="p-10 flex flex-col flex-wrap justify-center items-center">
      <h1 className="font-bold text-xl md:text-6xl text-center">
        Million run on Notion everyday
      </h1>
      <h5 className=" font-normal text-md text-center m-4 w-full md:w-1/2">
        Powering the world's best teams, from next-generation startups to
        established enterprises.
      </h5>
      <div className="flex justify-center  items-center">
        <p className=" text-blue-500 m-2">Read customer stories</p>
        <FaLongArrowAltRight className="" color="blue" />
      </div>
      <div className="flex flex-wrap w-full justify-center items-center">
        {logos.map((i,index) => (
          <div className=" m-2" key={index}>
            <img src={i} alt="" className=" h-20 w-40" />
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Hero;
