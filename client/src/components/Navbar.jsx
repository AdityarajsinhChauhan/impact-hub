import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ setshowMenu , active , setactive}) => {
  return (
    <div
      className={`w-[100vw] 
    ${
      active === "home"
        ? "backdrop-blur-sm absolute   top-0 left-0 z-40"
        : " bg-white border-b border-black "
    }`}
    >
      <div className="flex justify-between">
        <div className="flex">
          <img 
          onClick={()=>{setshowMenu(true)}}
          className="md:hidden my-5 ml-3 flex w-5 h-5" src="/ui-images/hamburger.svg" alt="" />
        <Link to="/" className=" text-black text-lg md:text-2xl font-bold py-3 pl-3 ">
          Impact Hub
        </Link>
        </div>
        <div className="py-3 transition-all duration-200">
          <button className=" border border-black rounded-full mr-3 hover:bg-black hover:text-white px-4 py-1 font-medium">Login</button>
          <button className=" border border-black rounded-full hover:bg-black hover:text-white mr-5 px-4 py-1 font-medium">SignUp</button>
        </div>
      </div>
      <ul className="md:flex hidden px-5 duration-200">
        <li
          onClick={() => {
            setactive("home");
          }}
          className={` px-4 py-1 mb-2 mt-2 cursor-pointer mx-1 transition-all font-medium rounded-full border border-transparent 
            ${
              active === "home"
                ? "text-white bg-black"
                : "text-black hover:border-black"
            }`}
        >
          <Link to="/">home</Link>
        </li>
        <li
          onClick={() => {
            setactive("content library");
          }}
          className={` px-4 py-1 mb-2 mt-2 cursor-pointer mx-1 transition-all font-medium rounded-full border border-transparent 
            ${
              active === "content library"
                ? "text-white bg-black"
                : "text-black hover:border-black"
            }`}
        >
          <Link to="/content-library">content library</Link>
        </li>
        <li
          onClick={() => {
            setactive("find your passion");
          }}
          className={` px-4 py-1 mb-2 mt-2 cursor-pointer mx-1 transition-all font-medium rounded-full border border-transparent 
            ${
              active === "find your passion"
                ? "text-white bg-black"
                : "text-black hover:border-black"
            }`}
        >
          <Link to="/find-passion">find your passion</Link>
        </li>
        <li
          onClick={() => {
            setactive("action hub");
          }}
          className={` px-4 py-1 mb-2 mt-2 cursor-pointer mx-1 transition-all font-medium rounded-full border border-transparent 
            ${
              active === "action hub"
                ? "text-white bg-black"
                : "text-black hover:border-black"
            }`}
        >
          <Link to="/action-hub">action hub</Link>
        </li>
        <li
          onClick={() => {
            setactive("interactive map");
          }}
          className={` px-4 py-1 mb-2 mt-2 cursor-pointer mx-1 transition-all font-medium rounded-full border border-transparent 
            ${
              active === "interactive map"
                ? "text-white bg-black"
                : "text-black hover:border-black"
            }`}
        >
          <Link to="/interactive-map">interactive map</Link>
        </li>
        <li
          onClick={() => {
            setactive("chat");
          }}
          className={` px-4 py-1 mb-2 mt-2 cursor-pointer mx-1 transition-all font-medium rounded-full border border-transparent 
            ${
              active === "chat"
                ? "text-white bg-black"
                : "text-black hover:border-black"
            }`}
        >
          <Link to="/chat">community & chat</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
