import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartShopping,
  faMagnifyingGlass,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const [profile, setProfile] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="flex flex-col md:flex-row justify-around   ">
      <div className=" flex justify-between items-center overflow-x-hidden mx-2 my-4 md:gap-[15vw]">
        <div>
          <h1 className="font-bold text-xl md:text-2xl">Exclusive</h1>
        </div>
        <div className={` hidden md:flex gap-6 md:text-xl lg:gap-12`}>
          <Link
            to="/"
            className={`font-semibold ${
              location.pathname === "/" ? "line" : ""
            }`}
          >
            Home
          </Link>
          <h1
            className={`font-semibold ${
              location.pathname === "/contact" ? "line" : ""
            }`}
          >
            Contact
          </h1>
          <h1
            className={`font-semibold ${
              location.pathname === "/about" ? "line" : ""
            }`}
          >
            About
          </h1>
          <Link
            to="/signup"
            className={`font-semibold ${
              location.pathname === "/signup" ? "line" : ""
            }`}
          >
            Signup
          </Link>
        </div>

        <div className="flex gap-2 justify-center items-center">
          {!open && (
            <div className="relative">
              <input
                type="text"
                className=" border shadow-md border-gray-300 rounded-lg px-2 mr-10 py-1 focus:outline-none md:w-28 lg:w-36"
                placeholder="Search..."
              />

              <FontAwesomeIcon
                className="absolute top-2 right-12"
                icon={faMagnifyingGlass}
              />
            </div>
          )}
          <div
            className={`flex justify-center items-center gap-2 z-10 md:hidden `}
          >
            {!open && (
              <FontAwesomeIcon
                className=""
                onClick={handleOpen}
                icon={faBars}
              />
            )}

            {open && (
              <FontAwesomeIcon
                className="absolute top-8 right-3"
                onClick={handleOpen}
                icon={faXmark}
              />
            )}
          </div>
        </div>
      </div>

      {open && (
        <div>
          <div
            className={`flex flex-col justify-center items-center gap-3 h-1/2 z-[2] bg-slate-300 py-4 w-[100vw]  absolute top-0     `}
          >
            <Link to="/" className="font-semibold">
              Home
            </Link>
            <h1 className="font-semibold">Contact</h1>
            <h1 className="font-semibold">About</h1>
            <Link to="/signup" className="font-semibold">
              Signup
            </Link>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-4 absolute pr-1 items-end z-10 right-1 top-32 lg:flex-row lg:top-[80px] lg:right-4 md:text-2xl">
        <FontAwesomeIcon icon={faHeart} />
        <div className="relative">
          <h1 className="rounded-[100%] bg-red-500 w-4 text-center absolute right-0 top-0 text-xs text-white">4</h1>

        <FontAwesomeIcon icon={faCartShopping} />
        </div>
        <button onClick={()=>setProfile(!profile)}>
          <FontAwesomeIcon icon={faUser} />
        </button>
      </div>

      {profile && (
        <div className="absolute flex flex-col z-10 right-2 top-32 gap-4 p-3 bg-gradient-to-tr from-black  to-[#9b9a9a] rounded">
          <h1 className="text-white flex justify-between items-center px-3 gap-2">
            <FontAwesomeIcon icon={faUser} />
            <h1>Manage My Account</h1>
          </h1>
          <h1 className="text-white flex justify-between items-center px-3 gap-2">
            <FontAwesomeIcon icon={faUser} />
            <h1>Manage My Account</h1>
          </h1>
          <h1 className="text-white flex justify-between items-center px-3 gap-2">
            <FontAwesomeIcon icon={faUser} />
            <h1>Manage My Account</h1>
          </h1>
          <h1 className="text-white flex justify-between items-center px-3 gap-2">
            <FontAwesomeIcon icon={faUser} />
            <h1>Manage My Account</h1>
          </h1>
          <h1 className="text-white flex justify-between items-center px-3 gap-2">
            <FontAwesomeIcon icon={faUser} />
            <h1>Manage My Account</h1>
          </h1>
        </div>
      )}
    </div>
  );
};

export default Navbar;
