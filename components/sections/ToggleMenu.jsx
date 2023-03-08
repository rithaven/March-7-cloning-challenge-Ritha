import Link from "next/link";
import React from "react";

const ToggleMenu = () => {
  return (
    <div className="bg-gray-300 md:hidden">
      <div className="p-10">
        <div className="flex">
        <Link className="text-red-500" href="/">
            Home
          </Link>
          <img className="h-6" src="/arrow-right.svg" alt="" />

         
        </div>
      </div>
      <div className="grid">
        <div className="flex gap-4 border border-white">
          <div className="bg-white p-2">
            <img className="h-4" src="chevron.svg" alt="" />
          </div>
          <div className="p-2">
            <Link href="Research">Research</Link>
          </div>
        </div>
        <div className="flex gap-4 border border-white">
          <div className="bg-white p-2">
          <img className="h-4" src="chevron.svg" alt="" />
          </div>
          <div className="p-2">
            <Link href="NewsEvents">News&Events</Link>
          </div>
        </div>
        <div className="flex gap-4 border border-white">
          <div className="bg-white p-2">
          <img className="h-4" src="chevron.svg" alt="" />
          </div>
          <div className="p-2">
            <Link href="About">About the UvA</Link>
          </div>
        </div>
       
        <div className="flex gap-4 border border-white">
          <div className="boder border-white px-4">
          <img className="h-4" src="" alt="" />
          </div>
          <div className="p-2">
            <Link href="Library">Library</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToggleMenu;
