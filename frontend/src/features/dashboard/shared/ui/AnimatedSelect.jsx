import { useState } from "react";
import { Icon } from "@iconify/react";

export default function AnimatedSelect({selected , setSelected , options}) {
  const [open, setOpen] = useState(false);
  
  return (
    <div className="relative w-56">
      {/* Select Box */}
      <button
        onClick={() => setOpen(!open)}
        className="
          w-full px-4 py-3 text-sm
          bg-transparent
          border border-[#3d9797]
          rounded-lg text-slate-700 
          cursor-pointer
          flex justify-between items-center
          hover:border-[#48b3b3]
          transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-[#3d9797]
        "
      >
        <span className="text-md font-semibold">{selected ? selected.label : "Search By"}</span>

        <Icon
          icon={open ? "solar:alt-arrow-up-linear" : "solar:alt-arrow-down-linear"}
          className="text-[#3d9797]"
          width="22"
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="
            absolute left-0 mt-2 w-full bg-white 
            border border-[#3d9797]/40 rounded-lg shadow-md 
            overflow-hidden z-20 animate-fadeIn
          "
        >
          {options.map((opt) => (
            <div
              key={opt.value}
              onClick={() => {
                setSelected(opt);
                setOpen(false);
              }}
              className="
                flex items-center gap-3 px-4 py-3 text-sm 
                cursor-pointer transition-all duration-150
                hover:bg-[#e6f8f8] hover:text-[#2f7f7f]
              "
            >
              <Icon
                icon={opt.icon}
                width="20"
                className="text-[#3d9797]"
              />
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
