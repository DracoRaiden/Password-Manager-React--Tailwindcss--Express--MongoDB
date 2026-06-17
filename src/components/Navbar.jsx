import React from "react";

export const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-gray-400 px-4 flex justify-around items-center h-14">
      <div className="logo font-bold">
        <h1 className="font-bold text-2xl hover:text-3xl transition-all duration-300 cursor-pointer">
          <span className="">&lt;Pass</span>
          <span className="text-blue-500">OP&gt;</span>
        </h1>
      </div>
      <ul>
        <li className="flex gap-4">
          <a href="#" className="hover:font-bold">
            Home
          </a>
          <a href="#" className="hover:font-bold">
            About
          </a>
          <a href="#" className="hover:font-bold">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};
