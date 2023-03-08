import React from "react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [animateHeader, setAnimateHeader] = useState(false);
  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 140) {
        setAnimateHeader(true);
      } else setAnimateHeader(false);
    };
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <header className={`z-10 px-32  ease-in-out duration-500 sticky top-0 shadow-xl bg-white ${
        animateHeader && "shadow-xl"
      }`}>
      <div className={`  flex justify-between py-10 ${
            animateHeader && "py-3"
          }  items-center   ease-in-out duration-500`}>
        <div>
          <img className={`h-10 ${animateHeader && "h-6"}`} src="/logo.svg" alt="" />
         
        </div>
        <div className="flex gap-6">
          <div className=" flex border border-gray-300 p-2 gap-28 rounded-md ">
            <input type="text" placeholder="Search..." />
            <div className="flex">
              <img className="h-8" src="/divider.svg" alt="" />
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 17L21 21"
                  stroke="#323232"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                  stroke="#323232"
                  stroke-width="2"
                />
              </svg>
            </div>
          </div>
          <div className=" flex gap-4">
            <h2 className="font-bold hover:underline ">Compare programmess</h2>
            <img className="h-8" src="/heart.svg" alt="" />
            <div className="border border-black p-2">
              <h3 className="font-bold ">NL</h3>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
