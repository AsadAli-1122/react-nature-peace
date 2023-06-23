import React, { useState } from 'react';

const CartMenu = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="menu-side-bar">
        <i
          className="fa-solid fa-shopping-cart cursor-pointer text-xl text-black hover:text-black duration-200"
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
          className={`bg-white fixed w-full max-w-[500px] right-0 flex top-0 h-full duration-500 ease-in-out z-[2] overflow-auto ${
            isOpen ? "-mr-[500px]" : "ml-0"
          }`}
        >
          <div className="w-full h-full">
            <div className="flex justify-between items-center w-full p-6">
              <span className="text-2xl tracking-wider">Cart</span>
              <i
                className="fa-solid fa-xmark cursor-pointer bg-slate-300 w-6 h-6 flex justify-center items-center rounded-full hover:bg-slate-400 duration-200 ease-in-out"
                onClick={toggleMenu}
              ></i>
            </div>
            <hr />
            <div className="h-full w-full flex flex-col justify-between text-slate-500">
              {/* Cart content */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartMenu;
