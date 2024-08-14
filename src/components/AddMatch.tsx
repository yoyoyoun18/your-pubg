import useMatchCounterStore from "@/store/useMatchCounterStore ";
import React from "react";

function AddMatch() {
  const { increment } = useMatchCounterStore();

  return (
    <div
      className="w-full flex justify-center items-center cursor-pointer bg-gray-200 rounded-lg font-extrabold hover:bg-gray-100 shadow-md"
      onClick={increment}
    >
      +
    </div>
  );
}

export default AddMatch;
