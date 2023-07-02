import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../css/menuSideBar.css";

const MenuSideBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isRoomscapesOpen, setIsRoomscapesOpen] = useState(false);
  const [isExplore, setIsExplore] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleShop = () => {
    setIsShopOpen(!isShopOpen);
  };

  const toggleRoomscapes = () => {
    setIsRoomscapesOpen(!isRoomscapesOpen);
  };

  const toggleExplore = () => {
    setIsExplore(!isExplore);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      <div className="md:hidden menu-side-bar">
        <i
          className="fa-solid fa-bars-staggered cursor-pointer text-2xl text-black hover:text-black duration-200 rotate-180"
          onClick={toggleMenu}
        ></i>
        <div
          className={`${
            isOpen
              ? "hidden"
              : "block fixed bg-black opacity-30 top-0 bottom-0 left-0 right-0 cursor-pointer"
          }`}
          onClick={toggleMenu}
        ></div>
        <div
          className={`bg-white fixed w-full max-w-[400px] left-0 flex top-0 h-full duration-500 ease-in-out z-[2] ${
            isOpen ? "-ml-[400px]" : "ml-0"
          }`}
        >
          <div className="w-full h-full">
            <div className="flex justify-between items-center pr-6 pl-4 py-2">
              <Link to='/' >
          <img
              src="/images/main-logo.png"
              alt="nature peace"
              className="w-12 bg-white"
              />
              </Link>
            <i
              className="fa-solid fa-xmark cursor-pointer bg-slate-300 w-6 h-6 flex justify-center items-center rounded-full hover:bg-slate-400 duration-200 ease-in-out"
              onClick={toggleMenu}
              ></i>
              </div>

            <hr />
            <div className="h-full w-full flex flex-col justify-between text-slate-500">
              <div className="w-full flex flex-col text-lg overflow-auto">
                <div className="flex justify-end">
                  <div
                    className={`absolute bg-slate-50 h-full w-full max-h-full duration-200 ml-auto ${
                      isShopOpen ? "max-w-full block" : "max-w-0"
                    }`}
                  >
                    <div className={`overflow-hidden`}>
                      <div
                        className="flex items-center text-slate-400 hover:hover:text-black  cursor-pointer pl-4 border-b border-slate-300 py-4 duration-200 ease-in-out "
                        onClick={toggleShop}
                      >
                        <i className="fa-solid fa-arrow-right-from-bracket pl-2 rotate-180"></i>
                        <span className="pl-2">Shop</span>
                      </div>
                      <div className="flex flex-col text-black">
                        <Link
                          to="/"
                          className="border-b py-4 px-4 hover:text-black hover:pl-6 duration-200 ease-in-out "
                        >
                          Plants
                        </Link>
                        <Link
                          to="/"
                          className="border-b py-4 px-4 hover:text-black hover:pl-6 duration-200 ease-in-out "
                        >
                          Pots
                        </Link>
                        <Link
                          to="/"
                          className="border-b py-4 px-4 hover:text-black hover:pl-6 duration-200 ease-in-out "
                        >
                          Tools & Accessories
                        </Link>
                        <Link
                          to="/"
                          className="border-b py-4 px-4 hover:text-black hover:pl-6 duration-200 ease-in-out "
                        >
                          Gifts
                        </Link>
                        <Link
                          to="/"
                          className="border-b py-4 px-4 hover:text-black hover:pl-6 duration-200 ease-in-out "
                        >
                          Best Sellers
                        </Link>
                        <Link
                          to="/"
                          className="border-b py-4 px-4 hover:text-black hover:pl-6 duration-200 ease-in-out "
                        >
                          Sale
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`absolute bg-slate-50 h-full w-full max-h-full duration-200 ml-auto ${
                      isRoomscapesOpen ? "max-w-full block" : "max-w-0"
                    }`}
                  >
                    <div className={`overflow-hidden`}>
                      <div
                        className="flex items-center text-slate-400 hover:hover:text-black  cursor-pointer pl-4 border-b border-slate-300 py-4 duration-200 ease-in-out "
                        onClick={toggleRoomscapes}
                      >
                        <i className="fa-solid fa-arrow-right-from-bracket pl-2 rotate-180"></i>
                        <span className="pl-2">Roomscapes</span>
                      </div>
                      <div className="flex flex-col text-black">
                        <Link
                          to="/"
                          className="border-b py-4 px-4 hover:text-black hover:pl-6 duration-200 ease-in-out "
                        >
                          Living Room
                        </Link>
                        <Link
                          to="/"
                          className="border-b py-4 px-4 hover:text-black hover:pl-6 duration-200 ease-in-out "
                        >
                          Kitchen
                        </Link>
                        <Link
                          to="/"
                          className="border-b py-4 px-4 hover:text-black hover:pl-6 duration-200 ease-in-out "
                        >
                          Bedroom
                        </Link>
                        <Link
                          to="/"
                          className="border-b py-4 px-4 hover:text-black hover:pl-6 duration-200 ease-in-out "
                        >
                          Bathroom
                        </Link>
                        <Link
                          to="/"
                          className="border-b py-4 px-4 hover:text-black hover:pl-6 duration-200 ease-in-out "
                        >
                          Corridor
                        </Link>
                        <Link
                          to="/"
                          className="border-b py-4 px-4 hover:text-black hover:pl-6 duration-200 ease-in-out "
                        >
                          Workspaces
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`absolute bg-slate-50 h-full w-full max-h-full duration-200 ml-auto ${
                      isExplore ? "max-w-full block" : "max-w-0"
                    }`}
                  >
                    <div className={`overflow-hidden`}>
                      <div
                        className="flex items-center text-slate-400 hover:hover:text-black  cursor-pointer pl-4 border-b border-slate-300 py-4 duration-200 ease-in-out "
                        onClick={toggleExplore}
                      >
                        <i className="fa-solid fa-arrow-right-from-bracket pl-2 rotate-180"></i>
                        <span className="pl-2">Explore</span>
                      </div>
                      <div className="flex flex-col text-black">
                        <Link
                          to="/"
                          className="border-b py-4 px-4 hover:text-black hover:pl-6 duration-200 ease-in-out "
                        >
                          Our Story
                        </Link>
                        <Link
                          to="/"
                          className="border-b py-4 px-4 hover:text-black hover:pl-6 duration-200 ease-in-out "
                        >
                          Contact Us
                        </Link>
                        <Link
                          to="/"
                          className="border-b py-4 px-4 hover:text-black hover:pl-6 duration-200 ease-in-out "
                        >
                          Visit Us
                        </Link>
                        <Link
                          to="/"
                          className="border-b py-4 px-4 hover:text-black hover:pl-6 duration-200 ease-in-out "
                        >
                          Journal
                        </Link>
                        <Link
                          to="/"
                          className="border-b py-4 px-4 hover:text-black hover:pl-6 duration-200 ease-in-out "
                        >
                          FAQ
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <Link
                  to="/"
                  className="border-b py-4 px-4 hover:text-black hover:pl-6 duration-200 ease-in-out "
                >
                  Home
                </Link>
                <span
                  className="border-b py-4 pl-4 pr-8 flex justify-between items-center hover:text-black cursor-pointer hover:pl-6 hover:pr-4 duration-200 ease-in-out"
                  onClick={toggleShop}
                >
                  <span>Shop</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <span
                  className="border-b py-4 pl-4 pr-8 flex justify-between items-center hover:text-black cursor-pointer hover:pl-6 hover:pr-4 duration-200 ease-in-out"
                  onClick={toggleRoomscapes}
                >
                  <span>Roomscapes</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <Link
                  to="/"
                  className="border-b py-4 px-4 hover:text-black hover:pl-6 duration-200 ease-in-out"
                >
                  Plants Drop
                </Link>
                <span
                  className="border-b py-4 pl-4 pr-8 flex justify-between items-center hover:text-black cursor-pointer hover:pl-6 hover:pr-4 duration-200 ease-in-out"
                  onClick={toggleExplore}
                >
                  <span>Explore</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </div>
              <div className="flex justify-between items-center w-full mb-[80px] px-4 border-t pt-4 z-[1] bg-white">
                <NavLink to="/login"
              className={({ isActive }) =>
                `before:h-[1.5px] tracking-wider px-1 text-black ${
                  isActive
                    ? "border-b-[2px] border-black "
                    : "link-animate before:bg-black"
                }`
              } >
                  <i className="fa-regular fa-user mr-2"></i>
                  <span>Login</span>
                </NavLink>
                <div className="flex items-center space-x-2">
                  <Link
                    to="/"
                    className="icon-link w-8 h-8 flex justify-between items-center rounded-full hover:text-white duration-200 hover:bg-black"
                  >
                    <i className="mx-auto fa-brands fa-facebook-f icon"></i>
                  </Link>
                  <Link
                    to="/"
                    className="icon-link w-8 h-8 flex justify-between items-center rounded-full hover:text-white duration-200 hover:bg-black"
                  >
                    <i className="mx-auto fa-brands fa-twitter icon"></i>
                  </Link>
                  <Link
                    to="/"
                    className="icon-link w-8 h-8 flex justify-between items-center rounded-full hover:text-white duration-200 hover:bg-black"
                  >
                    <i className="mx-auto fa-brands fa-instagram icon"></i>
                  </Link>
                  <Link
                    to="/"
                    className="icon-link w-8 h-8 flex justify-between items-center rounded-full hover:text-white duration-200 hover:bg-black"
                  >
                    <i className="mx-auto fa-brands fa-tiktok icon"></i>
                  </Link>
                  <Link
                    to="/"
                    className="icon-link w-8 h-8 flex justify-between items-center rounded-full hover:text-white duration-200 hover:bg-black"
                  >
                    <i className="mx-auto fa-brands fa-linkedin-in icon"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuSideBar;
