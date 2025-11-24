import React from "react";

export default function RadioButton({
  name,
  options,
  selectedValue,
  onChange,
  label,
}) {
  return (
    <div className="flex flex-col gap-2 px-1 pt-2 pb-2">
      {label && <span className="font-semibold text-[15px] text-[#338585]">{label}</span>}
      <div className="flex gap-4">
        {options.map((option, idx) => (
          <label key={idx} className="flex items-center cursor-pointer gap-2">
            <input
              type="radio"
              name={name}
              value={option}
              checked={selectedValue === option}
              onChange={() => onChange(option)}
              className="accent-[#338585] w-4 h-4"
            />
            <span className="text-[#338585] font-semibold">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
