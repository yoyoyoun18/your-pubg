"use client";

import BookMarkList from "@/components/BookMarkList";
import InputContainer from "@/components/InputContainer";
import Leaderboard from "@/components/Leaderboard";
import SquadSoloSelector from "@/components/SquadSoloSelector";
import SteamKakaoSelector from "@/components/SteamKakaoSelector";
import React from "react";

export default function Home() {
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
          <BookMarkList />
        </div>
      </div>
    </div>
  );
}
