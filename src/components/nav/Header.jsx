import React from "react";
import List from "../common/List";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { CiMenuFries } from "react-icons/ci";

function Header() {

    const navItems = [
        { list: "Home" },
        { list: "Elements", },
        { list: "Features", },
        { list: "Pages", },
        { list: "Portfolio", },
        { list: "Blog", },
        { list: "Shop", },
      ];
  return (
    <header className="flex justify-center items-center px-6 pb-px w-full bg-white h-[101px]">
      <div className="flex justify-between items-center w-full h-[100px]">
        {/* Logo Section */}
        <div className="flex items-center py-7 pr-6 border-r border-black/10 border-opacity-10 h-[100px]">
          <div className="flex justify-center items-center h-12 w-[100px]">
            <img src="/images/logo.png" alt="Porto" className="w-[100px] h-[48px]" />
          </div>
        </div>
        <List listArr={navItems} boxStyle={"flex"} listStyle={"px-3.5 hover:text-brand duration-300 text-sm font-semibold tracking-tight leading-6 uppercase h-[100px] flex items-center "}/>

        {/* Hamburger Menu */}
        <div className="flex items-center px-4 hidden  ">
          <button aria-label="Toggle menu">
            <CiMenuFries/>
          </button>
        </div>

        {/* Social Icons */}
        <List listArr={[{list: <FaFacebookF/>} , {list: <FaInstagram/>}]} boxStyle={"flex gap-10  "} listStyle={""}   />
      </div>
    </header>
  );
}

export default Header;
