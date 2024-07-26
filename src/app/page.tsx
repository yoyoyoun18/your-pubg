"use client";

import InputContainer from "@/components/InputContainer";
import Leaderboard from "@/components/Leaderboard";
import SquadSoloSelector from "@/components/SquadSoloSelector";
import SteamKakaoSelector from "@/components/SteamKakaoSelector";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

export default function Home() {
  const [steamKakaoDropMenu, setSteamKakaoDropMenu] = useState("hidden");
  const [steamOrKakao, setSteamOrKakao] = useState("Steam");

  const handlingDropMenu = () => {
    setSteamKakaoDropMenu((prev) => (prev === "hidden" ? "block" : "hidden"));
  };

  return (
    <div className=" ">
      <InputContainer />
      <div className="flex flex-col lg:flex-row justify-center items-center bg-[#EAEAEA] h-auto p-8 w-auto">
        <div className="h-160 bg-white text-black w-80 mr-0 lg:mr-4 shadow-md mb-4 lg:mb-0 p-4">
          <div className="font-bold mb-4 ">리더보드</div>
          <SteamKakaoSelector />
          <SquadSoloSelector />
          <Leaderboard />
        </div>
        <div className="h-160 bg-white text-black w-80 mt-4 md:mt-0 md:w-160 shadow-md">
          <div className="flex flex-col items-center p-4 h-full">
            <div className="bg-white shadow-md rounded-lg w-full max-w-4xl h-full">
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="font-bold">즐겨찾기</h2>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox cursor-pointer"
                    />
                    <span className="ml-2">FPP</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-4 p-2 text-start text-xs text-gray-800 bg-gray-200">
                <div className="col-span-5 flex items-center font-bold">
                  닉네임
                </div>
                <div className="col-span-3 flex items-center font-bold">
                  경쟁전
                </div>
                <div className="col-span-4 flex items-center font-bold">
                  경쟁전 솔로
                </div>
              </div>
              <div className="p-4 text-center text-gray-500 h-full">
                <p className="mb-4">프로필 화면에서 즐겨찾기 버튼을 누르고</p>
                <p>홈 화면에서 즐겨찾기한 플레이어의 정보를 확인해보세요.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
