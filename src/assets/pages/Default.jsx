import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../css/Default.css';

const Default = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setIsScrollingUp(currentPosition < scrollPosition && currentPosition > 100);
      setScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <>
      <div className="text-white bg-cover-1">
        <div className="relative flex flex-col md:flex-row pt-12 md:pt-20">
          <div
            className={`content w-full max-w-7xl mx-auto flex flex-col px-6 md:pl-12 py-12 md:py-20 lg:py-32`}
          >
            {/* Content 1 */}
            <h2 className="tracking-widest font-base text-sm">
              PLANTS MADE EASY
            </h2>
            <h1 className="mt-2 lg:mt-3 tracking-wider text-3xl font-normal max-w-lg">
              Plants and Gardening for Everyone,{" "}
              <span className="whitespace-nowrap">in a Planet-Friendly</span>{" "}
              way.
            </h1>
            <button className="mt-2 lg:mt-3 text-sm tracking-widest font border-b pt-[9px] pb-[8px] w-fit hover:bg-black hover:border-none hover:px-8 hover:rounded duration-200">
              <span>SHOP NOW</span>{" "}
              <i className="fa-solid fa-arrow-right ml-2"></i>
            </button>
            <Link
              to=""
              className="mt-10 text-sm tracking-widest font w-fit flex justify-center items-center duration-200 hover:scale-105 play-button"
            >
              <i className="fa-solid fa-circle-play text-4xl mr-4"></i>
              <span className="link-animate before:bg-white before:h-[1.5px] text-white pb-1 pt-1">
                Play Video
              </span>
            </Link>
          </div>
          <div
            className={`content-2 bg-[#FFA781] px-6 md:px-12 flex flex-col justify-center space-y-4 md:absolute right-0 md:max-w-sm md:h-full md:-mt-20 duration-500 overflow-hidden ${
              isScrollingUp ? "max-h-0" : "max-h-64 py-12"
            }`}
          >
            {/* Content 2 */}
            <h1 className="text-2xl max-w-lg">
              20% Birthday Sale ends midnight on Halloween Sunday!
            </h1>
            <button className="px-12 bg-white text-[#FFA781] text-sm py-2 w-fit tracking-widest hover:bg-opacity-90 hover:text-black hover:scale-105 duration-200 font-medium">
              GET 20% OFF
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Default;
