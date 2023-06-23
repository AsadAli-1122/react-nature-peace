import React from "react";
import "../../css/Side.css";
import { Link } from "react-router-dom";

const Side = () => {
  return (
    <div className="side md:flex justify-center items-center fixed top-0 bottom-0 left-0 w-0 pb-10 hidden">
      <div className="ml-10">
        <div className="flex flex-col items-center space-y-2">
          <Link
            to="/"
            className="icon-link w-6 h-6 flex justify-between items-center rounded-full hover:text-white duration-200 hover:bg-black"
          >
            <i class="mx-auto fa-brands fa-facebook-f icon"></i>
          </Link>
          <Link
            to="/"
            className="icon-link w-6 h-6 flex justify-between items-center rounded-full hover:text-white duration-200 hover:bg-black"
          >
            <i class="mx-auto fa-brands fa-twitter icon"></i>
          </Link>
          <Link
            to="/"
            className="icon-link w-6 h-6 flex justify-between items-center rounded-full hover:text-white duration-200 hover:bg-black"
          >
            <i class="mx-auto fa-brands fa-instagram icon"></i>
          </Link>
          <Link
            to="/"
            className="icon-link w-6 h-6 flex justify-between items-center rounded-full hover:text-white duration-200 hover:bg-black"
          >
            <i class="mx-auto fa-brands fa-tiktok icon"></i>
          </Link>
          <Link
            to="/"
            className="icon-link w-6 h-6 flex justify-between items-center rounded-full hover:text-white duration-200 hover:bg-black"
          >
            <i class="mx-auto fa-brands fa-linkedin-in icon"></i>
          </Link>
          <div className="pt-12">
            <p className="-rotate-90 whitespace-nowrap text-sm font-semibold  tracking-wider">
              <Link to="/" className="off-link pulse-link duration-200 ease-in-out text-slate-300 hover:text-slate-400">
                {" "}
                Get 10% Off
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Side;
