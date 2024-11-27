import React from "react";
import logo from "../assets/Logo Shapes 56.svg";

const Header = () => {
  return (
    <header className="bg-white max-w-7xl m-auto">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center py-6 px-4">
        <div className="logo flex flex-row items-center">
          <img src={logo} alt="" className="h-6 w-6" />
          <span className="pl-2 text-2xl text-customBlue font-bold">
            Saviour Care
          </span>
        </div>
        <nav className="space-x-6 text-gray-500 font-medium">
          <a href="#home">
            Home
          </a>
          <a href="#find-doctor">
            Find a doctor
          </a>
          <a href="#apps">
            Apps
          </a>
          <a href="#testimonials">
            Testimonials
          </a>
          <a href="#about">
            About us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
