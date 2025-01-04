import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import '../app/globals.css'
import Link from "next/link";

const TopHeader = () => {
  return (
    <div className="w-full h-[48px] pt-3 bg-[#000000] text-[#FAFAFA] flex items-center justify-between px-4">
      <div className="flex-grow text-center">
        <p className="text-sm font-normal font-poppins">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <span className="font-semibold underline cursor-pointer">Shop Now</span>
        </p>
      </div>
      <select name="language" id="language" className="bg-[#000000] text-[#FAFAFA] text-center ml-4">
        <option value="English">English</option>
      </select>
    </div>
  );
};

export default TopHeader;

export const Header = () => {
  return (
    <div className="border-b-2 border-[#F5F5F5F9] mb-4">
      <div className="flex flex-col md:flex-row w-full max-w-[1228px] mx-auto mt-[20px] items-center justify-between px-4 md:px-[100px]">
        <h2 className="font-Inter font-bold text-[20px] text-[#000000]">Exclusive</h2>
        <ul className="flex flex-wrap gap-[24px] text-[#000000]">
          <li className="font-poppins text-[16px] font-normal cursor-pointer"><Link href="/">Home</Link></li>
          <li className="font-poppins text-[16px] font-normal cursor-pointer"><Link href="../">Contact</Link></li>
          <li className="font-poppins text-[16px] font-normal cursor-pointer"><Link href="../about">About</Link></li>
          <li className="font-poppins text-[16px] font-normal cursor-pointer"><Link href="../">Sign Up</Link></li>
        </ul>
        <div className="flex items-center gap-4 flex-grow max-w-[300px] mt-4 md:mt-0">
          <div className="flex items-center bg-gray-200 rounded-md flex-grow">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="outline-none bg-transparent text-xs font-poppins text-[#000000] placeholder:text-[#000000] py-1 px-2 flex-grow"
            />
            <CiSearch className="text-[#000000] ml-2" />
          </div>
          <FaRegHeart className="text-[#000000] cursor-pointer" />
          <FaShoppingCart className="text-[#000000] cursor-pointer" />
          <FaRegUser className="text-[#000000] cursor-pointer" />
        </div>
        <h2 className="text-xl font-bold"></h2>
      </div>
      <hr className="border-t border-black mt-2" />
    </div>
  );
};