import React from "react";
import { useState, useEffect } from "react";

const Menu = () => {
  const [showmenu, setShowmenu] = useState(false);
  return (
    <div className="bg-gray-100 px-40">
      <div className="gap-4 py-6 flex">
        <div>
          <button class="peer px-5 py-2 text-2xl">
            Edication
          </button>

          <div
            class="hidden peer-hover:flex hover:flex
         w-[200px]
         flex-col bg-white drop-shadow-lg"
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
          <button class="peer px-5 py-2 text-2xl ">
           Research
          </button>

          <div
            class="hidden peer-hover:flex hover:flex
         w-[200px]
         flex-col bg-white drop-shadow-lg"
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
          <button class="peer px-5 py-2 text-2xl ">
            News&Events
          </button>

          <div
            class="hidden peer-hover:flex hover:flex
         w-[200px]
         flex-col bg-white drop-shadow-lg"
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
          <button class="peer px-5 py-2 text-2xl ">
            About the UvA
          </button>

          <div
            class="hidden peer-hover:flex hover:flex
         w-[200px]
         flex-col bg-white drop-shadow-lg"
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
          <button class="peer px-5 py-2 text-2xl ">
            Library
          </button>

          <div
            class="hidden peer-hover:flex hover:flex
         w-[200px]
         flex-col bg-white drop-shadow-lg"
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
        {/* <div className='grid bg-gray-100 p-4'>
             <div className='hover:border-b-2 p-2 hover:border-red-700'>
              <h3 onMouseOver={()=>setShowmenu(!showmenu)}  className='font-bold text-2xl hover:text-red-400'>About the UvA</h3>
             </div>
             { showmenu &&
               <div>
               <p>one</p>
               <p>one</p>
               <p>one</p>
               <p>one</p>
 
 
              </div>
             }
            
            </div>
            <div className='grid bg-gray-100 p-4'>
             <div className='hover:border-b-2 p-2 hover:border-red-700'>
              <h3 onMouseOver={()=>setShowmenu(!showmenu)}  className='font-bold text-2xl hover:text-red-400'>About the UvA</h3>
             </div>
             { showmenu &&
               <div>
               <p>one</p>
               <p>one</p>
               <p>one</p>
               <p>one</p>
 
 
              </div>
             }
            
            </div>
            <div className='grid bg-gray-100 p-4'>
             <div className='hover:border-b-2 p-2 hover:border-red-700'>
              <h3 onMouseOver={()=>setShowmenu(!showmenu)}  className='font-bold text-2xl hover:text-red-400'>About the UvA</h3>
             </div>
             { showmenu &&
               <div>
               <p>one</p>
               <p>one</p>
               <p>one</p>
               <p>one</p>
 
 
              </div>
             }
            
            </div>
            <div className='grid bg-gray-100 p-4'>
             <div className='hover:border-b-2 p-2 hover:border-red-700'>
              <h3 onMouseOver={()=>setShowmenu(!showmenu)}  className='font-bold text-2xl hover:text-red-400'>About the UvA</h3>
             </div>
             { showmenu &&
               <div>
               <p>one</p>
               <p>one</p>
               <p>one</p>
               <p>one</p>
 
 
              </div>
             }
            
            </div>
            <div className='grid bg-gray-100 p-4'>
             <div className='hover:border-b-2 p-2 hover:border-red-700'>
              <h3 onMouseOver={()=>setShowmenu(!showmenu)}  className='font-bold text-2xl hover:text-red-400'>About the UvA</h3>
             </div>
             { showmenu &&
               <div>
               <p>one</p>
               <p>one</p>
               <p>one</p>
               <p>one</p>
 
 
              </div>
             }
            
            </div>
           
         */}
      </div>
    </div>
  );
};

export default Menu;
