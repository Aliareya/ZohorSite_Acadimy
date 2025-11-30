import React from "react";
import ToggleSwitch from "../../shared/ui/ToggleSwitch";

function PrivacyCart({enable , setEnabled , title , desc}) {
  return (
    <div className="w-full flex items-center justify-between bg-[#a5c8c8] px-5 py-1 rounded-md">
      <div className="flex flex-col ">
        <span className="text-lg font-bold">{title}</span>
        <span className="">{desc}</span>
      </div>
      <div>
        <ToggleSwitch
          enable={enable}
          setEnabled={setEnabled}
        />
      </div>
    </div>
  );
}

export default PrivacyCart;
