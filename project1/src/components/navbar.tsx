import React, { useState } from "react";
import { logo } from "../utlis/images";


export const Navbar = () => {
  // let links = [
  //   { name: "تواصل معانا", links: "/" },
  //   { name: "خطط الاسعار", links: "/" },
  //   { name: "الخدمات", links: "/" },
  //   { name: "الرئيسه", links: "/" },
  // ];

  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="bg-gray-50 py-4 shadow-lg  ">
        <div className="container  flex flex-row-reverse justify-between items-center flex-wrap w-full  ">

          
            <img src={logo} alt="logo" className=" h-10 " />
         

          <button
            className="lg:hidden block cursor-pointer "
            onClick={() => setOpen(!open)}>القائمه  
          </button>

          <div className={` ${open ? "block" : "hidden"} w-full lg:flex text-center items-center lg:w-auto  `}>
            <ul className="lg:flex lg:justify-between   ">
              <li className=" border lg:px-5 py-2 rounded-full">تواصل معانا</li>
              <li className="lg:px-5 py-2  ">خطط الاسعار</li>
              <li className="lg:px-5 py-2  ">الخدمات</li>
              <li className="lg:px-5 py-2  ">الرئيسه </li>

              {/* {links.map( link => <li className="md:flex pl-9 md:pl-0"><a href="/">{link.name}</a></li>)} */}
            </ul>
          </div>

       
        </div>
      </nav>


    </>
  );
};
