import React from "react";
import Footer from "../components/footer/Footer";
import Side from "../components/sidebar/Side";
import Header from "../components/header/Header";

const Main = ({ children }) => {
  return (
    <>
      <div className="">
        <Side />
        <div className="absolute top-0 left-0 right-0 z-[1]">
          <Header />
        </div>

        {children}

        <hr className="hidden md:block mb-8" />
        <Footer />
      </div>
    </>
  );
};

export default Main;
