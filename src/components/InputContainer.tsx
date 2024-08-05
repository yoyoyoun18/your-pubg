"use client";

import useSearchStore from "@/store/searchStore";
import useUserStore from "@/store/useUserStore";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function InputContainer() {
  const [input, setInput] = useState("");
  const searchResult = useSearchStore((state) => state.searchResults);
  const setSearchQuery = useSearchStore((state) => state.setSearchQuery);
  const setSearchResults = useSearchStore((state) => state.setSearchResults);
  const setTargetUser = useUserStore((state) => state.setTargetUser);

  // useEffect(() => {
  //   console.log(searchResult);
  // }, [searchResult]);

  const router = useRouter();

  const handleClick = () => {
    const fullIdentifier = "Blue#KR33";
    const [gameName, tagLine] = fullIdentifier.split("#");

    setTargetUser({
      gameName: gameName,
      tagLine: tagLine,
    });
    router.push(`/user/${gameName}${tagLine}`);
  };

  useUserStore.subscribe((state, prevState) => {
    console.log("Previous state:", prevState);
    console.log("Current state:", state);
  });

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
            onClick={handleClick}
            className="absolute right-0 top-0 h-full px-4 bg-[#5383E8] text-white rounded-r"
          >
            검색
          </button>
        </div>
      </div>
    </div>
  );
}

export default InputContainer;
