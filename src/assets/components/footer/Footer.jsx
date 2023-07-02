import React, { useEffect, useState } from "react";
import "../../css/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => {
      const checkboxes = document.querySelectorAll(
        ".footer .main-div input[type='checkbox']"
      );

      if (window.innerWidth >= 786) {
        checkboxes.forEach((checkbox) => {
          checkbox.checked = true;
          checkbox.disabled = true;
        });
        setIsChecked1(true);
        setIsChecked2(true);
        setIsChecked3(true);
        setIsChecked4(true);
      } else {
        checkboxes.forEach((checkbox) => {
          checkbox.checked = false;
          checkbox.disabled = false;
        });
        setIsChecked1(false);
        setIsChecked2(false);
        setIsChecked3(false);
        setIsChecked4(false);
      }
    };

    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const handleLabelClick1 = () => {
    setIsChecked1(!isChecked1);
  };

  const handleLabelClick2 = () => {
    setIsChecked2(!isChecked2);
  };

  const handleLabelClick3 = () => {
    setIsChecked3(!isChecked3);
  };

  const handleLabelClick4 = () => {
    setIsChecked4(!isChecked4);
  };

  return (
    <>
      <div className="footer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto md:px-8">
        <hr className="md:hidden" />
        <div className="main-div py-2 px-4">
          <input type="checkbox"id="faq-1" />
          <h1>
            <label
              htmlFor="faq-1"
              className="flex justify-between items-center cursor-pointer md:cursor-auto"
              onClick={handleLabelClick1}
            >
              <div className="font-semibold tracking-wider">SHOP</div>
              <i
                className={`fa-solid fa-chevron-right duration-200 ease-in-out md:hidden${
                  isChecked1 ? " rotate-90" : ""
                }`}
              ></i>
            </label>
          </h1>
          <div className={`content-div${isChecked1 ? " open" : ""}`}>
            <div>
              <ul className="py-2 text-black">
                <li>
                  <Link
                    to="/"
                    className="link-animate before:bg-black before:h-[1.5px]"
                  >
                    New Arrivals
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="link-animate before:bg-black before:h-[1.5px]"
                  >
                    Best Sellers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="link-animate before:bg-black before:h-[1.5px]"
                  >
                    Gifts
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="link-animate before:bg-black before:h-[1.5px]"
                  >
                    Sales
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="link-animate before:bg-black before:h-[1.5px]"
                  >
                    Plant Drop
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="md:hidden" />
        <div className="main-div py-2 px-4">
          <input type="checkbox"id="faq-2" />
          <h1>
            <label
              htmlFor="faq-2"
              className="flex justify-between items-center cursor-pointer md:cursor-auto"
              onClick={handleLabelClick2}
            >
              <div className="font-semibold tracking-wider">EXPLORE</div>
              <i
                className={`fa-solid fa-chevron-right duration-200 ease-in-out md:hidden${
                  isChecked2 ? " rotate-90" : ""
                }`}
              ></i>
            </label>
          </h1>
          <div className={`content-div${isChecked2 ? " open" : ""}`}>
            <div>
              <ul className="py-2">
                <li>
                  <Link
                    to="/"
                    className="link-animate before:bg-black before:h-[1.5px]"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="link-animate before:bg-black before:h-[1.5px]"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="link-animate before:bg-black before:h-[1.5px]"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="link-animate before:bg-black before:h-[1.5px]"
                  >
                    Shipping & Returns
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="md:hidden" />
        <div className="main-div py-2 px-4">
          <input type="checkbox"id="faq-3" />
          <h1>
            <label
              htmlFor="faq-3"
              className="flex justify-between items-center cursor-pointer md:cursor-auto"
              onClick={handleLabelClick3}
            >
              <div className="font-semibold tracking-wider">MORE</div>
              <i
                className={`fa-solid fa-chevron-right duration-200 ease-in-out md:hidden${
                  isChecked3 ? " rotate-90" : ""
                }`}
              ></i>
            </label>
          </h1>
          <div className={`content-div${isChecked3 ? " open" : ""}`}>
            <div>
              <ul className="py-2">
                <li>
                  <Link
                    to="/"
                    className="link-animate before:bg-black before:h-[1.5px]"
                  >
                    My Account
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="link-animate before:bg-black before:h-[1.5px]"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="link-animate before:bg-black before:h-[1.5px]"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="link-animate before:bg-black before:h-[1.5px]"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="link-animate before:bg-black before:h-[1.5px]"
                  >
                    Visit Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="md:hidden" />
        <div className="main-div py-2 px-4">
          <input type="checkbox"id="faq-4" />
          <h1>
            <label
              htmlFor="faq-4"
              className="flex justify-between items-center cursor-pointer md:cursor-auto"
              onClick={handleLabelClick4}
            >
              <div className="font-semibold tracking-wider">
                EXCLUSIVE BENEFITS
              </div>
              <i
                className={`fa-solid fa-chevron-right duration-200 ease-in-out md:hidden${
                  isChecked4 ? " rotate-90" : ""
                }`}
              ></i>
            </label>
          </h1>
          <div className={`content-div${isChecked4 ? " open" : ""}`}>
            <div className="py-2 space-y-4">
              <div className="footer-email-input border-b w-full flex justify-between items-center duration-200">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter email here"
                  className="focus:outline-none w-full py-2 pl-4 text-slate-500"
                />
                <i className="fa-solid fa-arrow-right hover:scale-110 hover:text-slate-400 cursor-pointer duration-100 ease-in-out pr-4"></i>
              </div>
              <p className="text-xs">
                Apply for our free membership to receive exclusive deals, news,
                and events.
              </p>
              <div className="flex justify-between items-center max-w-xs ml-auto">
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
        {/* <hr className="md:hidden" /> */}
      </div>
      <div className="px-4 md:px-10 flex flex-col-reverse md:flex-col justify-center space-y-2 mt-8 mb-4">
        <div className="flex justify-center md:justify-between">
          <p className="text-xs">© 2023, Be Yours. All rights reserved.</p>
          <span></span>
        </div>
        <div className="flex justify-center md:justify-between items-center pb-5 md:pd-0">
          <Link
            to="/"
            className="link-animate text-xs pb-1 before:bg-slate-300 before:h-[1px] -z-10 hidden md:block"
          >
            Powered by Shopify
          </Link>
          <div className="flex items-center space-x-3">
            <img src="/images/payments/payment-1.png" alt="" className="w-10 border border-slate-300 rounded overflow-hidden" />
            <img src="/images/payments/payment-2.png" alt="" className="w-10 border border-slate-300 rounded overflow-hidden" />
            <img src="/images/payments/payment-3.png" alt="" className="w-10 border border-slate-300 rounded overflow-hidden" />
            <img src="/images/payments/payment-4.png" alt="" className="w-10 border border-slate-300 rounded overflow-hidden" />
            <img src="/images/payments/payment-5.png" alt="" className="w-10 border border-slate-300 rounded overflow-hidden" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
