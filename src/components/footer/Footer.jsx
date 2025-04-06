import React from "react";
import List from "../common/List";

// icons
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { LiaDotCircleSolid } from "react-icons/lia";
import { MdOutlineWhatsapp } from "react-icons/md";
import { IoMailOpenOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="  bg-[#212529] ">
      <div className="container">
        <List
          listArr={[
            { list:  <FaFacebookF /> },
            { list:  <FaInstagram /> },
            { list:  <FaLinkedinIn /> },
          ]}
          boxStyle={"flex justify-center gap-10  py-[55px] "}
          listStyle={
            " w-[50px] h-[50px] bg-secondery/20 grid place-items-center rounded-full text-white  "
          }
        />
      </div>

      {/* copyright */}
      <div className="py-5 border-t border-white/10   ">
        <div className="container">
          <div className="flex justify-between  ">
            <ul className="flex gap-10">
              <li className="flex items-center gap-2 text-white/80 text-[12px] ">
                <LiaDotCircleSolid className="text-brand" />
                <span>1234 Street Name, City Name</span>
              </li>
              <li className="flex items-center gap-2 text-white/80 text-[12px] ">
                <MdOutlineWhatsapp className="text-brand" />
                <span>(800) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-white/80 text-[12px] ">
                <IoMailOpenOutline className="text-brand" />
                <span>mail@example.com</span>
              </li>
            </ul>
            <p className=" text-white/40 text-[12px]    ">© Copyright 2025. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
