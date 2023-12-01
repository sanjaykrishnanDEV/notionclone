import React from "react";

const Minicards = ({ image, title, content }) => {
  return (
    <div className="mx-2 border-2 cursor-pointer   p-2 rounded-xl hover:bg-red-200 text-center w-48 flex flex-wrap ">
      <div className="flex p-1 w-full h-10 justify-evenly items-center ">
        {image}
        <p className="font-semibold text-xl">{title}</p>
      </div>
      <div>
        <p className="text-start  font-mono">{content}</p>
      </div>
    </div>
  );
};

export default Minicards;
