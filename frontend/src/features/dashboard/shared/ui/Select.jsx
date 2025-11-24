import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function AnimatedSelect({ options, placeholder = "انتخاب کنید", setvalue }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const [openAbove, setOpenAbove] = useState(false);
  const selectRef = useRef(null);

  const handleSelect = (value) => {
    setSelected(value);
    setvalue(value);
    setOpen(false);
  };

  useEffect(() => {
    if (open && selectRef.current) {
      const rect = selectRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const dropdownHeight = Math.min(options.length * 40, 240);
      setOpenAbove(spaceBelow < dropdownHeight);
    }
  }, [open, options.length]);

  return (
    <div className="relative w-full mt-3 px-1" ref={selectRef}>
      <div
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center bg-[#d1e2e2] px-4 py-2 rounded-md cursor-pointer"
      >
        <span>{selected || placeholder}</span>
        <ChevronDown className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </div>

      <div
        className={`absolute left-0 right-0 z-50
          ${openAbove ? "bottom-full mb-2 origin-bottom" : "top-full mt-2 origin-top"}
          bg-[#74b4b4] border border-gray-200 rounded-xl shadow-lg overflow-hidden
          transition-all duration-300
          ${open ? "max-h-60 opacity-100 scale-y-100" : "max-h-0 opacity-0 scale-y-0"}
        `}
      >
        {options.map((item, index) => (
          <div
            key={index}
            onClick={() => handleSelect(item)}
            className="px-4 py-2 hover:bg-[#278282] cursor-pointer text-white font-semibold"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
