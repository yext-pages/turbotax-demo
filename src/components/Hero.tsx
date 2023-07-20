import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ComplexImage } from "../types/autogen";

export interface HeroProps {
  children?: React.ReactNode;
  backgroundImage?: ComplexImage;
}

export default function Hero({ backgroundImage, children }: HeroProps) {
  return (
    <div className="bg-gray-900 ">
      <div className="relative isolate overflow-hidden h-[482px]">
        {/* {backgroundImage && ( */}
        <img
          src="https://images.unsplash.com/photo-1634312944845-72e0075cf500?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FuJTIwZGllZ28lMjBza3lsaW5lfGVufDB8fDB8fHww&w=1000&q=80"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        {/* )} */}
        <div className="absolute inset-0 z-0 h-full w-full  bg-[#1C2E5ECC] opacity-80" />
        <div className="absolute inset-0 z-10 h-full w-full">
          <div className="mx-auto max-w-3xl py-32">{children}</div>
        </div>
      </div>
    </div>
  );
}
