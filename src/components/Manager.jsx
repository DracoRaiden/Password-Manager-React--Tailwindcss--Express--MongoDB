import React from "react";
import { useState, useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";

export const Manager = () => {
  const [form, setForm] = useState({
    site: "",
    username: "",
    password: "",
  });

  const passwordRef = useRef(null);

  const showPassword = () => {
    if (passwordRef.current.type === "password") {
      passwordRef.current.type = "text";
    } else {
      passwordRef.current.type = "password";
    }
  };

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
  const isButtonDisabled =
    !form.site.trim() || !form.username.trim() || !form.password.trim();

  const savePassword = () => {
    // 1. Double-check for empty fields (though your button is disabled, this keeps it safe)
    if (
      form.site.trim() === "" ||
      form.username.trim() === "" ||
      form.password.trim() === ""
    ) {
      toast.error(`Please fill in all fields before saving!`, {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    // 2. Check if the site and username combination already exists
    const isDuplicate = passwordArray.some(
      (item) =>
        item.site.toLowerCase().trim() === form.site.toLowerCase().trim() &&
        item.username.toLowerCase().trim() ===
          form.username.toLowerCase().trim(),
    );

    if (isDuplicate) {
      toast.error(
        `An account for ${form.username} on ${form.site} already exists!`,
        {
          position: "bottom-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        },
      );
      return; // Exit early to stop execution and prevent saving
    }

    // 3. Save the unique password entry if no duplicate is found
    const updatedArray = [...passwordArray, form];
    setPasswordArray(updatedArray);
    localStorage.setItem("passwords", JSON.stringify(updatedArray));
    toast.success("Password saved successfully!", {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    // 4. Optional: Reset the form fields after a successful save
    setForm({ site: "", username: "", password: "" });
  };

  const copyText = (text) => {
    // Copy the text to the clipboard
    navigator.clipboard.writeText(text);
    toast("Copied to Clipboard!", {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const deletePassword = (index) => {
    const updatedArray = passwordArray.filter((_, i) => i !== index);
    setPasswordArray(updatedArray);
    localStorage.setItem("passwords", JSON.stringify(updatedArray));
    toast.error("Password deleted successfully!", {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  return (
    <div className="h-full w-full">
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="absolute inset-0 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#002_40%,#63e_100%)]">
        <div className="mx-auto text-gray-300 bg-slate-900 max-w-3xl py-5 rounded-xl mb-10">
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
                  ref={passwordRef}
                  onChange={handleChange}
                  placeholder="Enter Password"
                  className="px-4 py-2 rounded-full border border-blue-600 w-full text-black"
                  type="password"
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
            disabled={isButtonDisabled}
            className={`flex items-center gap-2 bg-blue-600 text-gray-200 rounded-full px-6 py-2 mx-auto border-2 border-blue-700 transition-all duration-300 ${
              isButtonDisabled
                ? "opacity-70 cursor-not-allowed border-blue-500 bg-blue-500"
                : "opacity-100 cursor-pointer hover:bg-blue-700 hover:border-blue-800 active:scale-95"
            }`}
          >
            <lord-icon
              src="https://cdn.lordicon.com/tsrgicte.json"
              trigger={isButtonDisabled ? "false" : "hover"}
            ></lord-icon>
            <span>Add Password</span>
          </button>
        </div>
        <div>
          <div className="mx-auto text-gray-300 bg-slate-900 max-w-4xl py-10 rounded-xl">
            <h2 className="text-2xl font-bold text-center">Your Passwords</h2>
            {passwordArray.length === 0 && (
              <p className="text-center text-gray-400 mt-5">
                No passwords saved yet. Add some!
              </p>
            )}
            {passwordArray.length !== 0 && (
              <div className="table-class mx-auto w-3xl px-20 rounded-full mt-5 mb-3 ">
                <table className="mx-auto w-full border-collapse border rounded-full">
                  <thead className="bg-blue-900 text-gray-300 rounded-fullborder-collapse border">
                    <tr className=" text-center ">
                      <th className="border-collapse border px-5 py-2">
                        Site URL
                      </th>
                      <th className="border-collapse border px-5 py-2">
                        Username
                      </th>
                      <th className="border-collapse border px-5 py-2">
                        Password
                      </th>
                      <th className="border-collapse border px-5 py-2">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-center bg-slate-800 text-gray-300">
                    {passwordArray.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td className="border-collapse border px-5 py-2">
                            <a
                              href={item.site}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {item.site}
                            </a>
                          </td>
                          <td className="border-collapse border px-5 py-2 justify-center flex items-center">
                            {item.username}
                            <div className="cursor-pointer inline-block ml-2">
                              <lord-icon
                                onClick={() => copyText(item.username)}
                                className="invert w-6 h-6"
                                src="https://cdn.lordicon.com/cfkiwvcc.json"
                                trigger="click"
                              ></lord-icon>
                            </div>
                          </td>
                          <td className="border-collapse border px-5 py-2">
                            {item.password}
                            <div className="cursor-pointer inline-block ml-2">
                              <lord-icon
                                onClick={() => copyText(item.password)}
                                className="invert w-6 h-6"
                                src="https://cdn.lordicon.com/cfkiwvcc.json"
                                trigger="click"
                              ></lord-icon>
                            </div>
                          </td>
                          <td className="border-collapse border px-5 py-2">
                            <lord-icon
                              className="invert w-6 h-6 cursor-pointer"
                              src="https://cdn.lordicon.com/oqeixref.json"
                              trigger="click"
                              onClick={() => {
                                deletePassword(index);
                              }}
                            ></lord-icon>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
