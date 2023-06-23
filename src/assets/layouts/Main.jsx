import React from "react";
import Footer from "../components/footer/Footer";
import Side from "../components/sidebar/Side";
import Header from "../components/header/Header";

const Main = ({ children }) => {
  return (
    <>
      <div className="">
        <Side />
        <Header />

        {children}

        <Footer />
      </div>
    </>
  );
};

export default Main;
