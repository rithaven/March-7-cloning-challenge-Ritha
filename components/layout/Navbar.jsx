import React from "react";
import { useState, useEffect } from "react";
import ToggleMenu from "../sections/ToggleMenu";

const Navbar = () => {
  const[showmenu,setShowmenu] = useState(false);
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
    <>
    <header className={`z-10 md:px-32 px-10 ease-in-out duration-500 sticky top-0 shadow-xl bg-white ${
        animateHeader && "shadow-xl"
      }`}>
      <div className={`  flex justify-between items-center  py-10 ${
            animateHeader && "py-3"
          }    ease-in-out duration-500`}>
        <div>
          <img className={`  ${animateHeader && "h-4"} ease-in-out duration-500 h-10 md:block hidden `} src="/logo.svg" alt="" />
          <img className={` ease-in-out duration-500 h-10 md:hidden `} src="https://www.pngfind.com/pngs/m/350-3504187_uva-gross-university-of-amsterdam-logo-hd-png.png" alt="" />

         
        </div>
        <div className="flex gap-6">
          <div className="hidden  md:flex border border-gray-300 p-2 gap-28 rounded-md ">
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
            <h2 className="font-bold hover:underline hidden md:block">Compare programmess</h2>
            <img className="h-8" src="/heart.svg" alt="" />
            <div className="border border-gray-500   md:hidden block">
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
              </svg>            </div>
            <div className="border border-gray-500 p-2">
              <h3 className="font-bold ">NL</h3>
            </div>
           <div className="" onClick={()=>setShowmenu(!showmenu)}>
          {showmenu?
                  <img className=" h-10 md:hidden" src="/close.svg" alt="" /> : <img className=" h-10 md:hidden" src="/menu.svg" alt="" />

            }
            
           
           </div>
          </div>
        </div>
      </div>
     
    </header>
    {
        showmenu &&
        <ToggleMenu />
      }
    </>
  );
};

export default Navbar;
