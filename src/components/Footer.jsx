import React from "react";

export const Footer = () => {
  return (
    <div className="relative bg-gray-900 text-gray-400 px-4 flex-col justify-center items-center h-16 w-full flex g-2 z-9999">
      <div className="logo font-bold text-center text-2xl w-1/4">
        <h1 className="font-bold text-2xl">
          <span className="">&lt;Pass</span>
          <span className="text-blue-500">OP&gt;</span>
        </h1>
      </div>
      <span className="text-sm">Created by Draco_Raiden</span>
    </div>
  );
};

export default Footer;
