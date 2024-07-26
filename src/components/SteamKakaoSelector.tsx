import { ChevronDownIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

function SteamKakaoSelector() {
  const [steamKakaoDropMenu, setSteamKakaoDropMenu] = useState("hidden");
  const [steamOrKakao, setSteamOrKakao] = useState("Steam");

  const handlingDropMenu = () => {
    setSteamKakaoDropMenu((prev) => (prev === "hidden" ? "block" : "hidden"));
  };

  return (
    <div className="relative w-full">
      <div
        className="flex w-full p-2 justify-between border items-center cursor-pointer"
        onClick={handlingDropMenu}
      >
        <span>{steamOrKakao}</span>
        <span className="ml-2 h-5 w-5 text-gray-500">
          <ChevronDownIcon />
        </span>
      </div>
      <div
        className={`absolute w-full ${steamKakaoDropMenu} bg-white z-10 border mt-1`}
      >
        <div
          className="flex w-full p-2 justify-between items-center cursor-pointer"
          onClick={() => {
            setSteamOrKakao("Steam");
            handlingDropMenu();
          }}
        >
          <span>Steam</span>
        </div>
        <div
          className="flex w-full p-2 justify-between items-center cursor-pointer"
          onClick={() => {
            setSteamOrKakao("Kakao");
            handlingDropMenu();
          }}
        >
          <span>Kakao</span>
        </div>
      </div>
    </div>
  );
}

export default SteamKakaoSelector;
