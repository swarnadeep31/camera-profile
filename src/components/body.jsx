import React from "react";
import { BsCamera } from "react-icons/bs";
import { RiCameraLensLine } from "react-icons/ri";
import { LuCable } from "react-icons/lu";
import { DATA3, DATA4, DATA5, DATA6, DATA7 } from "@/app/constans";
import Image from "next/image";
import { IoMdStarHalf } from "react-icons/io";
import { IoMdStar } from "react-icons/io";
import { Button } from "./ui/button";
import Bannar from "./bannar";
import { Card, CardContent, CardDescription, CardFooter } from "./ui/card";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

export default function Body() {
  return (
    <div className="container">
      <div className="p-2 grid justify-center ">
        <span className="font-bold text-3xl p-6 flex justify-center">
          What&apos;s included
        </span>
      </div>
      <div className="flex p-2 justify-evenly">
        {DATA4.map((ua, index) => (
          <div className="grid p-2" key={index}>
            {ua.icon}
            <p className="flex justify-center font-bold">{ua.title}</p>
          </div>
        ))}
      </div>
      <div className=" flex p-6 justify-center ">
        <div className="grid  bg-green-900 text-white rounded-2xl  ">
          <span className="p-4 text-xl font-bold">
            Expand your creative playground
          </span>
          <span className="p-4 text-sm font-bold">
            Z 5 is powered by Nikon&apos;s fast, comprehensive EXPEED 6 image
            processing system. It&apos;s the secret behind the camera&apos;s
            sensational photo and video quality, autofocus performance,
            low-light capabilities, distortion control, image clarity, color
            reproduction and more.
          </span>
        </div>
        <Image
          src="/camera.jpg"
          width={400}
          height={400}
          className="rounded-2xl"
        />
      </div>

      <div className="flex justify-between gap-4 ">
        {DATA5.map((yo, index) => (
          <div className="grid p-4 " key={index}>
            {yo.img}
            <div className="grid p-2 gap-4 ">
              <div className="text-xl font-bold">{yo.title}</div>
              <div className="text-xs font-semibold">{yo.body}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid">
        <div className="flex justify-center items-center text-3xl font-bold p-4">
          Don&apos;t take our word for it
        </div>
        {DATA6.map((op, index) => (
          <div
            className="grid grid-cols-1 justify-center gap-y-4 p-4 drop-shadow-2xl rounded-2xl "
            key={index}
          >
            <div className="flex gap-10 p-2 justify-between">
              <div className="flex">
                <IoMdStar size={20} />
                <IoMdStar size={20} />
                <IoMdStar size={20} />
                <IoMdStar size={20} />
                <IoMdStarHalf size={20} />
              </div>
              <div className="flex justify-end">2 days Agos</div>
            </div>
            {op.title}
            {op.body}
            {op.footer}
          </div>
        ))}
      </div>
      <div className="flex justify-center p-4">
        <Button>Write a rivew</Button>
      </div>

      <div className=" flex bg-green-950 rounded-2xl text-white p-4">
        <div className="grid ">
          <div className="text-2xl font-bold px-2">
            Got question? We are here to help
          </div>

          <div className="flex px-2 gap-4">
            <Button>Contact Us</Button>
            <p className="text-xs p-2 ">
              You&apos;ll get a response within 24 hours
            </p>
          </div>
        </div>
        <Image
          src="/show.jpg"
          width={400}
          height={400}
          className="min-w-min rounded-2xl"
        />
      </div>

      <div>
        <div className=" p-2 rounded-2xl">
          <Bannar />
        </div>
      </div>
      <div>
        <div className="p-5 text-xl font-semibold">
          You might like this also
        </div>
        <div className="flex gap-6 p-4">
          {DATA7.map((da, index) => (
            <Card
              className="grid items-center justify-center rounded-2xl"
              key={index}
            >
              <CardContent>
                <CardDescription>{da.img}</CardDescription>
                <div>{da.body}</div>
                <div>{da.body1}</div>
              </CardContent>
              <CardFooter>
                <Button>+ Quick Add</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <div className="bg-green-950 text-white flex justify-center items-center text-4xl p-2 font-bold">
        YOUR DREAM CAMERA SEARCH ENDS HERE
      </div>
    </div>
  );
}
