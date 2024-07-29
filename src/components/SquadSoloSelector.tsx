"use client";

import React, { useState } from "react";

function SquadSoloSelector() {
  const [squad, setSquad] = useState("bg-[#5383E8] text-white");
  const [solo, setSolo] = useState("");

  const handleSquadClick = () => {
    setSquad((prevState) =>
      prevState === "" ? "bg-[#5383E8] text-white" : ""
    );
    if (solo !== "") {
      setSolo("");
    }
  };

  const handleSoloClick = () => {
    setSolo((prevState) => (prevState === "" ? "bg-[#5383E8] text-white" : ""));
    if (squad !== "") {
      setSquad("");
    }
  };

  return (
    <div className="flex w-full border mb-4 mt-4">
      <div
        className={`w-1/2 flex justify-center items-center ${squad} border-r p-1 cursor-pointer`}
        onClick={handleSquadClick}
      >
        경쟁전
      </div>
      <div
        className={`w-1/2 flex justify-center items-center ${solo} p-1 cursor-pointer`}
        onClick={handleSoloClick}
      >
        경쟁전 솔로
      </div>
    </div>
  );
}

export default SquadSoloSelector;
