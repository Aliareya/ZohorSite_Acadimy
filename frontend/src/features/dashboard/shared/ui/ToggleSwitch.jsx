import { useState } from "react";

export default function ToggleSwitch({enable , setEnabled}) {

  return (
    <div
      onClick={() => setEnabled(!enable)}
      className={`w-[50px] h-7 px-0.5 py-1 flex items-center rounded-full cursor-pointer transition-all duration-300 ${
        enable ? "bg-[#2e5252] pr-4" : "bg-[#84a7a7]"
      }`}
    >
      <div
        className={`w-5 h-5 bg-white rounded-full shadow transform transition-all duration-300 ${
          enable ? "translate-x-6 bg-white mr-2" : "translate-x-1"
        }`}
      ></div>
    </div>
  );
}
