import React from "react";
import { FaRegStar } from "react-icons/fa";
import { Button } from "./ui/button";
import { IoHardwareChipOutline } from "react-icons/io5";
import { RiCameraLensFill } from "react-icons/ri";
import { MdOutlineLensBlur } from "react-icons/md";
import { CiBatteryEmpty } from "react-icons/ci";
import { IoChatbubblesOutline } from "react-icons/io5";
import { FiBox } from "react-icons/fi";
import { FaRegShareFromSquare } from "react-icons/fa6";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex  container">
      <div className="flex gap-6 p-2">
        <div className="p-6 gap-2 grid">
          <Image src="/main.jpg" width={300} height={300} />
          <Image src="/top.jpg" width={300} height={300} />
          <Image src="/back.jpg" width={300} height={300} />
          <Image src="/side.jpg" width={300} height={300} />
          <Image src="/view.jpg" width={300} height={300} />
        </div>
        <div>
          <div>
            <Image src="/main.jpg" width={450} height={450} />
          </div>
          <div>
            <div className="text-xl font-semibold p-2">Describtion</div>
            <div className="text-sm p-2 font-semibold">
              Your full frame journey begins with the Z 5. Simple yet
              sophisticated, compact yet powerful, the Z 5 is built to grow with
              you. It’s everything you’d expect from a full frame mirrorless
              camera—intense detail, expansive views, brilliant low light
              capabilities, 4K UHD video and more—plus all the innovative tools
              you need to push the limits of your creativity.
            </div>
            <div className="p-2 text-xl font-semibold">Tech Specs</div>
            <div className="p-2 text-xl font-semibold">Shipping & Warranty</div>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="grid gap-2 p-2 ">
          <div className="text-2xl font-bold">NikonZ5</div>
          <div className=" text-xl">$899</div>
          <div className=" text-sm  ">options</div>
          <div>
            <div className="flex gap-3">
              <Button className="text-black hover:bg-white bg-white">
                Z5 Body only
              </Button>
              <Button className="text-black hover:bg-white bg-white">
                24-50mm lens kit
              </Button>
            </div>
          </div>
          <div className="text-xs">Currenly in stock</div>
          <div className="flex text-sm gap-2 font-bold">
            <IoHardwareChipOutline size={20} />
            Expeed 6 Chip
          </div>
          <div className="flex text-sm gap-2 font-bold">
            <RiCameraLensFill size={20} />
            Wokes with 24mm-30mm lens
          </div>
          <div className="flex text-sm gap-2 font-bold">
            <MdOutlineLensBlur size={20} />
            24.3 million effectiv Pixels
          </div>
          <div className="flex text-sm gap-2 font-bold">
            <CiBatteryEmpty size={20} />
            EN-EL15c rechargeable LIion battery
          </div>
          <div className="text-sm">View all tech supports</div>
          <div className="gap-8">
            <div className=" flex p-4 gap-4 ">
              <Button className="rounded-2xl shadow-xl bg-white text-black">
                Add to Cart
              </Button>
              <Button className="rounded-2xl  text-black shadow-xl bg-white">
                Buy it Now
              </Button>
            </div>
          </div>
          <div className="gap-6 flex">
            <div className="p-2 gap-2 flex font-semibold ">
              <IoChatbubblesOutline size={30} />
              Got any Questions
            </div>
            <div>
              <Button>Contact Us</Button>
            </div>
          </div>
          <div>
            <div className="font-semibold p-2 flex gap-2">
              <FiBox size={20} />
              Free shipping over $150
            </div>
            <div className="font-semibold p-2 flex gap-2">
              <FaRegShareFromSquare size={20} />
              Share
            </div>
          </div>
        </div>
        <div className="flex  p-2 ">
          4.2(1234)
          <FaRegStar size={20} />
          <FaRegStar size={20} />
          <FaRegStar size={20} />
          <FaRegStar size={20} />
          <FaRegStar size={20} />
        </div>
      </div>
    </div>
  );
}
