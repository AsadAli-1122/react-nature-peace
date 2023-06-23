import React, { useState, useEffect } from "react";
import MenuSideBar from "./MenuSideBar";
import CartMenu from "./CartMenu";
import { Link } from "react-router-dom";
import Search from "./Search";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <>
      <div
        className={`transition-all duration-500 bg-white z-[1] ${
          isScrolled
            ? "sticky top-0 left-0 right-0 shadow-md shadow-slate-400"
            : " mb-4"
        }`}
      >
        <div className={`px-4 lg:px-10 flex justify-between items-center py-4 mx-auto max-w-7xl`}>

          <MenuSideBar />
          <div>
            <Link to='/' className="">
            <img
              src="/images/main-logo.png"
              alt="nature peace"
              className="w-12 bg-white"
            />
            </Link>
          </div>
          <div className="space-x-8 hidden md:block">
            <Link to='/' className="link-animate before:bg-black pb-1 before:h-[1.5px] tracking-wider font-semibold px-1">HOME</Link>
            <Link to='/' className="link-animate before:bg-black pb-1 before:h-[1.5px] tracking-wider font-semibold px-1">SHOP</Link>
            <Link to='/' className="link-animate before:bg-black pb-1 before:h-[1.5px] tracking-wider font-semibold px-1">ROOMSCAPES</Link>
            <Link to='/' className="link-animate before:bg-black pb-1 before:h-[1.5px] tracking-wider font-semibold px-1">PLANT DROP</Link>
            <Link to='/' className="link-animate before:bg-black pb-1 before:h-[1.5px] tracking-wider font-semibold px-1">EXPLORE</Link>
          </div>
          <div className="flex items-center">
            <Search />
            <Link to="/login" className="hidden md:block mr-4">
              <i className="fa-solid fa-user cursor-pointer text-xl hover:text-black duration-200"></i>
            </Link>
            <CartMenu />
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Header;
