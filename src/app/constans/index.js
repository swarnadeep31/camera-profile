import { BsCamera } from "react-icons/bs";
import { RiCameraLensLine } from "react-icons/ri";
import { LuCable } from "react-icons/lu";
import Image from "next/image";

export const DATA1 = [
  {
    head: "shop",
  },
  {
    head: "About us",
  },
  {
    head: "compare",
  },
  {
    head: "FAQs",
  },
  {
    head: "contact",
  },
];

export const DATA2 = [
  {
    head: "Search",
  },
  {
    head: "My Account",
  },
  {
    head: "Shipping",
  },
  {
    head: "Refund Policy",
  },
  {
    head: "Privacy Policy",
  },
];

export const DATA3 = [
  {
    head: "Careers",
  },
  {
    head: "Press",
  },
  {
    head: "Story",
  },
];

export const DATA4 = [
  {
    icon: <BsCamera size={60} />,
    title: "NIKON 5Z",
  },
  {
    icon: <RiCameraLensLine size={60} />,
    title: "LENS",
  },
  {
    icon: <LuCable size={60} />,
    title: "CABLE",
  },
  {
    icon: <BsCamera size={60} />,
    title: "NIKON 5Z",
  },
];

export const DATA5 = [
  {
    img: (
      <Image
        src="/profile.jpg"
        width={300}
        height={300}
        className="p-2 rounded-2xl min-w-48 xl:w-auto"
      />
    ),
    title: "Super powered",
    body: "Z 5 is powered by Nikon&apos;s fast, comprehensive EXPEED 6 image processing system. It&apos;s the secret behind the camera&apos;s sensational photo and video quality, autofocus performance, low-light capabilities, discontrol, image clarity, color reproduction, and more.",
  },
  {
    img: (
      <Image
        src="/ball.jpg"
        width={300}
        height={300}
        className="p-2 rounded-2xl min-w-48 xl:w-auto"
      />
    ),
    title: "In the blink of an iris.",
    body: "Freeze time with shutter speeds as fast as 1/8000 of a second—fast enough to capture moments invisible to the naked eye. When shooting with wide aperture settings for shallow depth-of-field and blurred backgrounds, that speed can also be used to control your shot&apos;s brightness.",
  },
  {
    img: (
      <Image
        src="/profile.jpg"
        width={300}
        height={300}
        className="p-2 rounded-2xl min-w-48 xl:w-auto"
      />
    ),
    title: "The stability you crave.",
    body: "Z 5 is powered by Nikon&apos;s fast, comprehensive EXPEED 6 image processing system. It&apos;s the secret behind the camera&apos;s sensational photo and video quality, autofocus performance, low-light capabilities, discontrol, image clarity, color reproduction, and more.",
  },
];

export const DATA6 = [
  {
    title: <span className="font-bold">Best on the market</span>,
    body: (
      <span className="text-sm">
        I love this product because the support is great. Please
      </span>
    ),
    footer: <span className="font-bold">Worldtraveler</span>,
  },
  {
    title: <span className="font-bold">Best on the market</span>,
    body: (
      <span className="text-sm">
        I love this product because the support is great. Please
      </span>
    ),
    footer: <span className="font-bold">Worldtraveler</span>,
  },
  {
    title: <span className="font-bold">Best on the market</span>,
    body: (
      <span className="text-sm">
        I love this product because the support is great. Please
      </span>
    ),
    footer: <span className="font-bold">Worldtraveler</span>,
  },
  {
    title: <span className="font-bold">Best on the market</span>,
    body: (
      <span className="text-sm">
        I love this product because the support is great. Please
      </span>
    ),
    footer: <span className="font-bold">Worldtraveler</span>,
  },
];

export const DATA7 = [
  {
    img: <Image src="/camera1.jpg" width={100} height={100} />,
    body: "Canon EOS R6",
    body1: "$1999.00",
  },
  {
    img: <Image src="/camera2.jpg" width={100} height={100} />,
    body: "Nikon Z6",
    body1: "$2496.95",
  },

  {
    img: <Image src="/camera4.jpg" width={100} height={100} />,
    body: "Sony a7R V",
    body1: "$3398.00",
  },
  {
    img: <Image src="/camera5.jpg" width={100} height={100} />,
    body: "FUJIFILM X-T50",
    body1: "$1499.00",
  },
  {
    img: <Image src="/camera6.jpg" width={100} height={100} />,
    body: "FUJIFILM GFX 100S",
    body1: "$4999.00",
  },
];
