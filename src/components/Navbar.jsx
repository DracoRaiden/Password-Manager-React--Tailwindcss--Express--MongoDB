import React from "react";

export const Navbar = () => {
  return (
    <nav className="relative z-9999 bg-gray-900 text-gray-400 px-4 flex justify-around items-center h-14">
      <div className="logo font-bold text-center text-2xl w-1/4">
        <h1 className="font-bold text-2xl hover:text-3xl transition-all duration-300 cursor-pointer">
          <span className="">&lt;Pass</span>
          <span className="text-blue-500">OP&gt;</span>
        </h1>
      </div>
      <ul className="flex w-1/2 justify-center text-lg">
        <li className="flex gap-8">
          {/* <a href="#" className="text-center w-16 hover:font-bold">
            Home
          </a>
          <a href="#" className="text-center w-16 hover:font-bold">
            About
          </a>
          <a href="#" className="text-center w-16 hover:font-bold">
            Contact
          </a> */}
        </li>
      </ul>
      <div className="w-1/4 flex justify-center">
        <button className="flex items-center gap-2 bg-gray-700 text-gray-200 rounded-full px-4 py-1 hover:bg-gray-600 border-2 border-gray-600 transition-all duration-300">
          <img
            src="../../icons/github.png"
            alt="GitHub"
            className="invert w-6 h-6"
          />
          <span className="font-bold">GitHub</span>
        </button>
      </div>
    </nav>
  );
};
