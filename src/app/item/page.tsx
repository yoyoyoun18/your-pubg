"use client";

import React, { useState } from "react";

function page() {
  const [focus, setFocus] = useState(0);
  const items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "sf",
  ];
  const weaponName = [
    "돌격소총",
    "지정사수소총",
    "기관단총",
    "저격소총",
    "산탄총",
    "권총",
    "근접",
    "투척무기",
    "기타",
  ];

  return (
    <div className="flex flex-col lg:flex-col justify-center items-center bg-[#EAEAEA] h-auto p-8 w-auto">
      <ul className="w-full text-xs md:text-xl md:w-[1024px] mb-4 flex justify-center overflow-hidden">
        {weaponName.map((a, index) => (
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
      <div className="h-auto bg-white text-black w-[480px] md:w-[680px] lg:w-[1500px] mr-0 lg:mr-4 shadow-md mb-4 lg:mb-0 p-4 overflow-hidden font-SBAggro grid grid-cols-12 gap-4 justify-center">
        {items.map((item, index) => (
          <div
            key={index}
            className="col-span-12 md:col-span-6 lg:col-span-4 flex justify-center"
          >
            <div className="bg-gray-300 h-64 w-[500px] text-center flex items-center justify-center border border-black mt-4">
              {item}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
