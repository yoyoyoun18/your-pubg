"use client";

import useSearchStore from "@/store/searchStore";
import React, { useState } from "react";

function InputContainer() {
  const [input, setInput] = useState("");
  const setSearchQuery = useSearchStore((state) => state.setSearchQuery);
  const setSearchResults = useSearchStore((state) => state.setSearchResults);

  const handleSearch = async () => {
    setSearchQuery(input);
    try {
      const response = await fetch(
        `/api/pubg/player?platform=steam&playerName=${input}`
      );
      if (!response.ok) {
        throw new Error("Player data not found");
      }
      const data = await response.json();
      setSearchResults(data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error:", error.message);
      } else {
        console.error("Unknown error");
      }
      setSearchResults(null);
    }
  };

  return (
    <div className="w-full h-96 bg-main-container-img bg-center bg-cover bg-no-repeat flex flex-col items-center justify-between">
      <div className="flex-grow flex items-center">
        <div className="font-bold text-6xl text-black animate-tracking-in-contract-bck">
          YOUR.PUBG
        </div>
        {/*로고 이미지 제작 예정*/}
      </div>
      <div className="w-full flex justify-center mb-4 ">
        <div className="relative shadow-md">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="rounded-l border border-gray-300 p-2 rounded w-96 text-black"
            placeholder="닉네임을 입력해주세요."
          />
          <button
            onClick={handleSearch}
            className="absolute right-0 top-0 h-full px-4 bg-[#EBB014] text-white rounded-r"
          >
            검색
          </button>
        </div>
      </div>
    </div>
  );
}

export default InputContainer;
