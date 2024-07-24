"use client";

import Carousel from "@/components/Carousel";
import React, { useState } from "react";

function Page() {
  const mapName = [
    "에란겔",
    "미라마",
    "사녹",
    "카라킨",
    "파라모",
    "헤이븐",
    "태이고",
    "데스턴",
    "비켄디",
    "론도",
  ];
  const [focus, setFocus] = useState(0);

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start bg-[#EAEAEA] h-auto p-8 w-auto font-SBAggro">
      <div className="flex flex-col justify-center">
        <ul className="w-full text-xs md:text-xl md:w-[1024px] flex justify-center overflow-hidden">
          {mapName.map((a, index) => (
            <li
              key={index}
              id={`${index}`}
              className={`hover:border-b hover:border-black transition-transform duration-200 cursor-pointer p-2 md:p-3 items-center ${
                focus === index
                  ? "border-b border-black"
                  : "border-b border-gray-200"
              }`}
              onClick={() => setFocus(index)}
            >
              <div className="text-center w-full text-black font-bold">{a}</div>
            </li>
          ))}
        </ul>
        <div className="flex justify-center items-center bg-[#EAEAEA]">
          <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start bg-[#EAEAEA] w-[350px] h-[350px] md:w-[500px] md:h-[500px] lg:w-[1000px] lg:h-[1000px] bg-ernagel-map bg-center bg-cover bg-no-repeat mt-4"></div>
        </div>

        <div className="flex justify-center font-bold text-black mt-20 text-2xl md:text-5xl">
          ERANGEL 사진전
        </div>
        <div className="flex justify-center items-center h-auto bg-gray-200 mt-10 ">
          <Carousel />
        </div>
      </div>
    </div>
  );
}

export default Page;
