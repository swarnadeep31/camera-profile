import { DATA1, DATA2, DATA3 } from "@/app/constans";
import Image from "next/image";
import React from "react";
import { Input } from "./ui/input";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex justify-evenly items-start container mx-auto p-4 ">
      <div>
        <div className="flex p-2 justify-center items-start text-3xl font-bold ">
          <Image src="/logo.png" width={80} height={80} />
          <span className="p-5">SID</span>
        </div>
        <div className="grid gap-4">
          <div className=" text-xs xl:text-sm font-semibold">
            Sign up for news, updates & 10% off your first order.
          </div>
          <div>
            <Input type="email" placeholder="Email" />
          </div>
          <div className="flex gap-2 p-2">
            <FaFacebookF
              size={20}
              className="rounded-full text-white bg-black p-1"
            />
            <FaTwitter
              size={20}
              className="rounded-full text-white bg-black p-1"
            />
            <FaInstagram
              size={20}
              className="rounded-full text-white bg-black p-1"
            />
            <FaYoutube
              size={20}
              className="rounded-full text-white bg-black p-1"
            />
            <FaWhatsapp
              size={20}
              className="rounded-full text-white bg-black p-1"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-start gap-8 ">
        <div className="grid p-2 gap-2 ">
          <span className="font-semibold text-xs xl:text-sm">Main Menu</span>
          {DATA1.map((da, index) => (
            <span key={index} className="font-normal text-xs">
              {da.head}
            </span>
          ))}
        </div>
        <div className="grid p-2 gap-2 ">
          <span className="font-semibold text-xs xl:text-sm">
            Additional Information
          </span>
          {DATA2.map((ta, index) => (
            <span key={index} className="font-normal text-xs">
              {ta.head}
            </span>
          ))}
        </div>
        <div className="grid p-2 gap-2 ">
          <span className="font-semibold text-xs xl:text-sm">Extra</span>
          {DATA3.map((ea, index) => (
            <span key={index} className="font-normal text-xs">
              {ea.head}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
