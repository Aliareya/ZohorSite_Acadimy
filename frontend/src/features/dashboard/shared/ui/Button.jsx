import React from "react";
import { Icon } from "@iconify/react";

function Button({title , icon=null ,onclick }) {
  return (
    <button onClick={onclick} className="w-40  h-12 bg-[#338585] rounded-lg gap-2 flex justify-center items-center">
      <Icon
        icon="material-symbols:add-rounded"
        width="24"
        height="24"
        style={{ color: "#fff" }}
      />
      <h1 className="text-lg font-semibold text-white">{title}</h1>
    </button>
  );
}

export default Button;
