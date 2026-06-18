import React from "react";
import { useState, useEffect } from "react";

export const Manager = () => {
  const showPassword = () => {};
  const [form, setForm] = useState({
    site: "",
    username: "",
    password: "",
  });

  const [passwordArray, setPasswordArray] = useState([]);

  // Initlaly load all the passwords from local storage and set it to the passwordArray state
  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      // if passwords exist load all of them
      setPasswordArray(JSON.parse(passwords));
    }
  }, []); // Else keep it empty and wait for the user to add new passwords
  const handleChange = (e) => {
    // Set the form state with the new values entered by the user in the input fields
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const savePassword = () => {
    // Save the new password to the passwordArray state and also save it to local storage
    setPasswordArray([...passwordArray, form]);
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]));
    console.log([...passwordArray, form]);
  };

  return (
    <div>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <div className="mx-auto text-gray-300 bg-slate-900 max-w-3xl py-5 rounded-xl my-10">
        <div className="mx-auto flex flex-col items-center gap-2 p-2">
          <h1 className="font-bold text-4xl">
            <span className="">&lt;Pass</span>
            <span className="text-blue-500">OP&gt;</span>
          </h1>

          <p className="text-blue-200 text-lg text-center">
            Your own Password Manager
          </p>
        </div>
        <div className="flex flex-col py-4 px-8 gap-5">
          <input
            placeholder="Enter Website URL"
            value={form.site}
            onChange={handleChange}
            className="px-4 py-2 rounded-full border border-blue-600 w-full text-black"
            type="text"
            name="site"
            id=""
          />
          <div className="flex mx-auto gap-4 w-full justify-center">
            <input
              value={form.username}
              onChange={handleChange}
              placeholder="Enter Username"
              className="px-4 py-2 rounded-full border border-blue-600 w-full text-black"
              type="text"
              name="username"
              id=""
            />
            <div className="flex items-center gap-2 w-full">
              <input
                value={form.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="px-4 py-2 rounded-full border border-blue-600 w-full text-black"
                type="text"
                name="password"
                id=""
              />
              <span
                className="cursor-pointer hover: scale-110 transition-all duration-300"
                onClick={showPassword}
              >
                <lord-icon
                  src="https://cdn.lordicon.com/dicvhxpz.json"
                  trigger="hover"
                  colors="primary:#ffffff,secondary:#3080e8"
                ></lord-icon>
              </span>
            </div>
          </div>
        </div>
        <button
          onClick={savePassword}
          className="flex items-center gap-2 bg-blue-500 text-gray-200 rounded-full px-6 py-2 mx-auto hover:bg-blue-600 border-2 border-blue-600 transition-all duration-300"
        >
          <lord-icon
            src="https://cdn.lordicon.com/tsrgicte.json"
            trigger="hover"
          ></lord-icon>
          <span>Add Password</span>
        </button>
      </div>
      <div>
        <div className="mx-auto text-gray-300 bg-slate-900 max-w-4xl py-10 rounded-xl">
          <h2 className="text-2xl font-bold text-center">You Passwords</h2>
          <div className="table-class mx-auto w-3xl px-20 rounded-full mt-5 mb-5 ">
            <table className="mx-auto w-full border-collapse border rounded-full">
              <thead className="bg-blue-900 text-gray-300 rounded-fullborder-collapse border">
                <tr className=" text-center ">
                  <th className="border-collapse border px-5">URL</th>
                  <th className="border-collapse border px-5">Username</th>
                  <th className="border-collapse border px-5">Password</th>
                </tr>
              </thead>
              <tbody className="text-center bg-slate-800 text-gray-300">
                <tr>
                  <td className="border-collapse border px-5">
                    The Sliding Mr. Bones (Next Stop, Pottersville)
                  </td>
                  <td className="border-collapse border px-5">
                    Malcolm Lockyer
                  </td>
                  <td className="border-collapse border px-5">1961</td>
                </tr>
                <tr>
                  <td className="border-collapse border">Witchy Woman</td>
                  <td className="border-collapse border">The Eagles</td>
                  <td className="border-collapse border">1972</td>
                </tr>
                <tr>
                  <td className="border-collapse border">Shining Star</td>
                  <td className="border-collapse border">
                    Earth, Wind, and Fire
                  </td>
                  <td className="border-collapse border">1975</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
