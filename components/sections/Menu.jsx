import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";

const Menu = () => {
  const [showmenu, setShowmenu] = useState(false);
  return (
    <div className="bg-gray-100 px-40 md:block hidden ">
      <div className="gap-4 py-6 flex">
        <div>
          <Link href='Edication' class="peer px-5 py-2 text-2xl hover:text-red-500 ">
            Edication
          </Link>

          <div
            class="hidden peer-hover:flex hover:flex
         w-[200px]
         flex-col bg-white drop-shadow-lg border-t-2 border-red-700"
          >
            <a class="px-5 py-3 hover:bg-gray-200" href="#">
              About Us
            </a>
            <a class="px-5 py-3 hover:bg-gray-200" href="#">
              Contact Us
            </a>
            <a class="px-5 py-3 hover:bg-gray-200" href="#">
              Privacy Policy
            </a>
          </div>
        </div>
        <div>
          <Link href='Research' class="peer px-5 py-2 text-2xl hover:text-red-500 ">
           Research
          </Link>

          <div
            class="hidden peer-hover:flex hover:flex
         w-[200px]
         flex-col bg-white drop-shadow-lg border-red-700 border-t-2"
          >
            <a class="px-5 py-3 hover:bg-gray-100" href="#">
              About Us
            </a>
            <a class="px-5 py-3 hover:bg-gray-100" href="#">
              Contact Us
            </a>
            <a class="px-5 py-3 hover:bg-gray-100" href="#">
              Privacy Policy
            </a>
          </div>
        </div>
        <div>
          <Link href='NewsEvents' class="peer px-5 py-2 text-2xl hover:text-red-500">
            News&Events
          </Link>

          <div
            class="hidden peer-hover:flex hover:flex
         w-[200px]
         flex-col bg-white drop-shadow-lg border-red-700 border-t-2"
          >
            <a class="px-5 py-3 hover:bg-gray-100" href="#">
              About Us
            </a>
            <a class="px-5 py-3 hover:bg-gray-100" href="#">
              Contact Us
            </a>
            <a class="px-5 py-3 hover:bg-gray-100" href="#">
              Privacy Policy
            </a>
          </div>
        </div>
        <div>
          <Link href='About' class="peer px-5 py-2 text-2xl hover:text-red-500 ">
            About the UvA
          </Link>

          <div
            class="hidden peer-hover:flex hover:flex
         w-[200px]
         flex-col bg-white drop-shadow-lg border-t-2 border-red-700"
          >
            <a class="px-5 py-3 hover:bg-gray-100" href="#">
              About Us
            </a>
            <a class="px-5 py-3 hover:bg-gray-100" href="#">
              Contact Us
            </a>
            <a class="px-5 py-3 hover:bg-gray-100" href="#">
              Privacy Policy
            </a>
          </div>
        </div>
        <div>
          <Link href='Library' class="peer px-5 py-2 text-2xl hover:text-red-500 ">
            Library
          </Link>

          <div
            class="hidden peer-hover:flex hover:flex
         w-[200px]
         flex-col bg-white drop-shadow-lg border-t-2 border-red-700"
          >
            <a class="px-5 py-3 hover:bg-gray-100" href="#">
              About Us
            </a>
            <a class="px-5 py-3 hover:bg-gray-100" href="#">
              Contact Us
            </a>
            <a class="px-5 py-3 hover:bg-gray-100" href="#">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
