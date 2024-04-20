import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartShopping,
  faMagnifyingGlass,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import { faHeart } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
  const [open, setOpen] = useState(false);

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
          <h1 className="font-semibold">Home</h1>
          <h1 className="font-semibold">Contact</h1>
          <h1 className="font-semibold">About</h1>
          <h1 className="font-semibold">Signup</h1>
        </div>

        <div className="flex gap-2 justify-center items-center">
          {!open && (
            <div className="relative">
              <input
                type="text"
                className=" border shadow-md border-gray-300 rounded-l-lg px-2 py-1 focus:outline-none md:w-28 lg:w-36"
                placeholder="Search..."
              />

              <FontAwesomeIcon
                className="absolute top-2 right-2"
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
            className={`flex flex-col justify-center items-center gap-3 bg-slate-300 py-4 w-[100vw]  absolute top-0     `}
          >
            <h1 className="font-semibold">Home</h1>
            <h1 className="font-semibold">Contact</h1>
            <h1 className="font-semibold">About</h1>
            <h1 className="font-semibold">Signup</h1>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-4 absolute pr-1 items-end z-10 right-1 top-16 lg:flex-row lg:top-[88px] lg:right-4 md:text-2xl">
        <FontAwesomeIcon icon={faHeart} />
        <FontAwesomeIcon icon={faCartShopping} />
      </div>
    </div>
  );
};

export default Navbar;
