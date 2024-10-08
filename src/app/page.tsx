"use client";

import BookMarkList from "@/components/BookMarkList";
import InputContainer from "@/components/InputContainer";
import Leaderboard from "@/components/Leaderboard";
import SquadSoloSelector from "@/components/SquadSoloSelector";
import TodayMatch from "@/components/TodayMatch";
import React, { useEffect } from "react";

export default function Home() {
  return (
    <div>
      <InputContainer />
      <div className="flex flex-col justify-center items-center bg-[#EAEAEA] h-auto w-auto pb-4 pt-4">
        <div className="flex md:flex-row flex-col">
          <div className="h-auto bg-white text-black w-80 mr-4 lg:mr-4 shadow-md mb-4 lg:mb-0 p-4">
            <div className="font-bold mb-4 ">리더보드</div>
            <SquadSoloSelector />
            <Leaderboard />
          </div>
          <div className="h-auto bg-white  text-black w-80 mt-4 md:mt-0 md:w-160 shadow-md">
            <BookMarkList />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-start bg-[#EAEAEA] pb-4 h-auto w-auto ">
        <div className="flex flex-row w-full lg:w-[974px] justify-center">
          <div className="h-auto bg-white text-black w-auto mt-4 md:mt-0 md:w-auto shadow-md flex flex-col lg:flex-row">
            <TodayMatch num={[0, 1, "17:00"]} />
            <TodayMatch num={[2, 3, "19:30"]} />
          </div>
        </div>
      </div>
    </div>
  );
}
