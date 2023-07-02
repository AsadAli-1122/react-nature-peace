import React, { useState, useEffect } from "react";
import MenuSideBar from "./MenuSideBar";
import CartMenu from "./CartMenu";
import { Link, NavLink } from "react-router-dom";
import Search from "./Search";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isRoomscapeOpen, setIsRoomscapeOpen] = useState(false);
  const [isExlporeOpen, setIsExploreOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isShopOpen || isRoomscapeOpen || isExlporeOpen ? 'hidden' : 'auto';
  
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isShopOpen, isRoomscapeOpen, isExlporeOpen]);
  

  const toggleShop = () => {
    closeMenus();
    setIsShopOpen(!isShopOpen);
  };
  
  const toggleRoomscapes = () => {
    closeMenus();
    setIsRoomscapeOpen(!isRoomscapeOpen);
  };
  
  const toggleExplore = () => {
    closeMenus();
    setIsExploreOpen(!isExlporeOpen);
  };
  
  
  const closeMenus = () => {
    setIsShopOpen(false);
    setIsRoomscapeOpen(false);
    setIsExploreOpen(false);
  };
  

  return (
    <>
      <div
        className={`duration-500 z-[1] hover:bg-white focus-within:bg-white ${
          isScrolled
            ? "fixed top-0 left-0 right-0 bg-white shadow-md shadow-gray-500"
            : "-top-[250px]"
        }`}
      >
        <div
          className={`px-4 lg:px-10 flex justify-between items-center py-2 mx-auto max-w-7xl`}
        >
          <MenuSideBar />
          <div>
            <Link to="/" className="">
              <img
                src="/images/main-logo.png"
                alt="nature peace"
                className="w-12"
              />
            </Link>
          </div>
          <div className="space-x-8 hidden md:block">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `before:h-[1.5px] tracking-wider font-semibold px-1 ${
                  isActive
                    ? "border-b-[2px] border-black pb-[5px]"
                    : "link-animate before:bg-black pb-[7px]"
                }`
              }
            >
              HOME
            </NavLink>
            <span
              className={`before:h-[1.5px] tracking-wider font-semibold px-1 cursor-pointer ${
                isShopOpen
                  ? "border-b-[2px] border-black pb-[5px]"
                  : "link-animate before:bg-black pb-[7px]"
              }`}
              onClick={toggleShop}
            >
              SHOP
            </span>
            <span
              className={`before:h-[1.5px] tracking-wider font-semibold px-1 cursor-pointer ${
                isRoomscapeOpen
                  ? "border-b-[2px] border-black pb-[5px]"
                  : "link-animate before:bg-black pb-[7px]"
              }`}
              onClick={toggleRoomscapes}
            >
              ROOMSCAPE
            </span>

            <NavLink
              to="/plant-drop"
              className={({ isActive }) =>
                `before:h-[1.5px] tracking-wider font-semibold px-1 ${
                  isActive
                    ? "border-b-[2px] border-black pb-[5px]"
                    : "link-animate before:bg-black pb-[7px]"
                }`
              }
            >
              PLANT DROP
            </NavLink>
            <span
              className={`before:h-[1.5px] tracking-wider font-semibold px-1 cursor-pointer ${
                isExlporeOpen
                  ? "border-b-[2px] border-black pb-[5px]"
                  : "link-animate before:bg-black pb-[7px]"
              }`}
              onClick={toggleExplore}
            >
              EXPLORE
            </span>
          </div>
          <div className="flex items-center">
            <Search />
            <Link to="/login" className="hidden md:block mr-4">
              <i className="fa-solid fa-user cursor-pointer text-xl hover:text-black duration-200"></i>
            </Link>
            <CartMenu />
          </div>
        </div>
        {/* <hr /> */}

        {isShopOpen || isRoomscapeOpen || isExlporeOpen ? (
          <div
            className="absolute bg-black bg-opacity-30 w-full h-screen cursor-pointer"
            onClick={() => {
              setIsShopOpen(false);
              setIsRoomscapeOpen(false);
              setIsExploreOpen(false);
            }}
          ></div>
        ) : (
          <></>
        )}

        <div
          className={`absolute w-full h-full right-0 min-h-screen bg-white duration-200 ease-in-out overflow-hidden ${
            isShopOpen || isRoomscapeOpen || isExlporeOpen ? "overflow-hidden" : ""
          } ${
            isShopOpen ? "max-w-[500px]" : "max-w-0"
          }`}
        >
          <div className="flex flex-col text-black text-xl px-12 py-12 space-y-8">
            <Link
              to="/"
              className="link-animate before:bg-black before:bg-opacity-80 before:h-[1.5px] duration-200 ease-in-out w-fit"
            >
              Plants
            </Link>
            <Link
              to="/"
              className="link-animate before:bg-black before:bg-opacity-80 before:h-[1.5px] duration-200 ease-in-out w-fit"
            >
              Pots
            </Link>
            <Link
              to="/"
              className="link-animate before:bg-black before:bg-opacity-80 before:h-[1.5px] duration-200 ease-in-out w-fit"
            >
              Tools & Accessories
            </Link>
            <Link
              to="/"
              className="link-animate before:bg-black before:bg-opacity-80 before:h-[1.5px] duration-200 ease-in-out w-fit"
            >
              Gifts
            </Link>
            <Link
              to="/"
              className="link-animate before:bg-black before:bg-opacity-80 before:h-[1.5px] duration-200 ease-in-out w-fit"
            >
              Best Sellers
            </Link>
            <Link
              to="/"
              className="link-animate before:bg-black before:bg-opacity-80 before:h-[1.5px] duration-200 ease-in-out w-fit"
            >
              Sale
            </Link>
          </div>
        </div>

        <div
          className={`absolute w-full h-full right-0 min-h-screen bg-white duration-200 ease-in-out overflow-hidden ${
            isShopOpen || isRoomscapeOpen || isExlporeOpen ? "overflow-hidden" : ""
          } ${
            isRoomscapeOpen ? "max-w-[500px]" : "max-w-0"
          }`}
        >
          <div className="flex flex-col text-black text-xl px-12 py-12 space-y-8">
            <Link
              to="/"
              className="link-animate before:bg-black before:bg-opacity-80 before:h-[1.5px] duration-200 ease-in-out w-fit"
            >
              Living Room
            </Link>
            <Link
              to="/"
              className="link-animate before:bg-black before:bg-opacity-80 before:h-[1.5px] duration-200 ease-in-out w-fit"
            >
              Kitchen
            </Link>
            <Link
              to="/"
              className="link-animate before:bg-black before:bg-opacity-80 before:h-[1.5px] duration-200 ease-in-out w-fit"
            >
              Bedroom
            </Link>
            <Link
              to="/"
              className="link-animate before:bg-black before:bg-opacity-80 before:h-[1.5px] duration-200 ease-in-out w-fit"
            >
              Bathroom
            </Link>
            <Link
              to="/"
              className="link-animate before:bg-black before:bg-opacity-80 before:h-[1.5px] duration-200 ease-in-out w-fit"
            >
              Corridor
            </Link>
            <Link
              to="/"
              className="link-animate before:bg-black before:bg-opacity-80 before:h-[1.5px] duration-200 ease-in-out w-fit"
            >
              Workspaces
            </Link>
          </div>
        </div>

        <div
          className={`absolute w-full h-full right-0 min-h-screen bg-white duration-200 ease-in-out overflow-hidden ${
            isShopOpen || isRoomscapeOpen || isExlporeOpen ? "overflow-hidden" : ""
          } ${
            isExlporeOpen ? "max-w-[500px]" : "max-w-0"
          }`}
        >
          <div className="flex flex-col text-black text-xl px-12 py-12 space-y-8">
            <Link
              to="/"
              className="link-animate before:bg-black before:bg-opacity-80 before:h-[1.5px] duration-200 ease-in-out w-fit"
            >
              Our story
            </Link>
            <Link
              to="/"
              className="link-animate before:bg-black before:bg-opacity-80 before:h-[1.5px] duration-200 ease-in-out w-fit"
            >
              Contact Us
            </Link>
            <Link
              to="/"
              className="link-animate before:bg-black before:bg-opacity-80 before:h-[1.5px] duration-200 ease-in-out w-fit"
            >
              Visit Us
            </Link>
            <Link
              to="/"
              className="link-animate before:bg-black before:bg-opacity-80 before:h-[1.5px] duration-200 ease-in-out w-fit"
            >
              Journal
            </Link>
            <Link
              to="/"
              className="link-animate before:bg-black before:bg-opacity-80 before:h-[1.5px] duration-200 ease-in-out w-fit"
            >
              FAQ
            </Link>
            <Link
              to="/"
              className="link-animate before:bg-black before:bg-opacity-80 before:h-[1.5px] duration-200 ease-in-out w-fit"
            >
              Workspaces
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
