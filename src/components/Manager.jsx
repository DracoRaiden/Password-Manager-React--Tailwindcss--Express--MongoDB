import React from "react";

export const Manager = () => {
  return (
    <div>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <div className="mx-auto text-gray-300 bg-slate-900 max-w-2xl py-10 rounded-lg my-20">
        <div className="mx-auto flex flex-col items-center gap-2 p-4">
          <h1 className="font-bold text-4xl">
            <span className="">&lt;Pass</span>
            <span className="text-blue-500">OP&gt;</span>
          </h1>

          <p className="text-blue-200 text-lg text-center">
            Your own Password Manager
          </p>
        </div>
        <div className="flex flex-col p-4 gap-5">
          <input
            placeholder="Enter Website URL"
            className="px-4 py-2 rounded-full border border-blue-600 w-full"
            type="text"
            name=""
            id=""
          />
          <div className="flex mx-auto gap-4 w-full justify-center">
            <input
              placeholder="Enter Username"
              className="px-4 py-2 rounded-full border border-blue-600 w-full"
              type="text"
              name=""
              id=""
            />
            <div className="flex items-center gap-2 w-full">
              <input
                placeholder="Enter Password"
                className="px-4 py-2 rounded-full border border-blue-600 w-full"
                type="text"
                name=""
                id=""
              />
              <span>show</span>
            </div>
          </div>
        </div>
        <button className="flex items-center gap-2 bg-blue-500 text-gray-200 rounded-full px-6 py-2 mx-auto block hover:bg-blue-600 border-2 border-blue-600 transition-all duration-300">
          <lord-icon
            src="https://cdn.lordicon.com/tsrgicte.json"
            trigger="hover"
          ></lord-icon>
          <span>Add Password</span>
        </button>
      </div>
    </div>
  );
};
