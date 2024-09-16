import Image from "next/image";
import React from "react";
import { CgProfile, CgSearch } from "react-icons/cg";
import { IoSearch } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";

export default function Navbar() {
  return (
    <div className=" w-full">
      <div className="flex justify-center items-center bg-black text-white ">
        Free Delivery order above 500
      </div>
      <div className="flex container items-start mx-auto  grid-cols-6 justify-between p-3 ">
        <div className="flex">
          <Image src="/logo.png" height={50} width={50} />
          <div className="text-2xl gap-2  font-bold p-2">SID</div>
        </div>
        <div className="flex gap-x-6  justify-center font-semibold">
          <div className="p-2">Shop</div>
          <div className="p-2">About Us</div>
          <div className="p-2">Compare</div>
          <div className="p-2">FAQs</div>
          <div className="p-2">Contact</div>
        </div>
        <div className="flex gap-3 p-2">
          <CgProfile size={20} />
          <IoSearch size={20} />
          <IoCartOutline size={20} />
        </div>
      </div>
    </div>
  );
}
