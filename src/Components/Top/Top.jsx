import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";

const Top = () => {
  return (
    <header>
      <nav className="w-full bg-black py-2 flex justify-between items-center">
        <div className="ml-10 flex items-center">
          <p className="text-neutral-50 text-sm font-normal font-Poppins leading-5">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <a
            href="#"
            className="text-center text-neutral-50 text-sm font-semibold font-Poppins underline leading-normal ml-3"
          >
            Shop Now
          </a>
        </div>
        <div className="mr-10">
          <p className="text-neutral-50 text-sm font-normal font-Poppins leading-5 inline-block">
            English
          </p>
          <div className="language-selector w-6 h-6 flex justify-center items-center ml-2">
            <FontAwesomeIcon icon={faLanguage} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Top;
