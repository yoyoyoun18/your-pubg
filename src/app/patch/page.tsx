import Leaderboard from "@/components/Leaderboard";
import PatchList from "@/components/PatchList";
import RecentPatchContainer from "@/components/RecentPatchContainer";
import React from "react";

function page() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start bg-[#EAEAEA] h-auto p-8 w-auto">
      <div className="flex flex-col ">
        <RecentPatchContainer />
        <RecentPatchContainer />
      </div>

      <div className="h-auto bg-white text-black w-[480px] mr-0 lg:mr-4 shadow-md mb-4 lg:mb-0 p-4 lg:w-[512px]">
        <div className="mb-4 font-bold">지난 패치 내역</div>
        <PatchList />
      </div>
    </div>
  );
}

export default page;
