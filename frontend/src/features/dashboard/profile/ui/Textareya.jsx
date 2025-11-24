import React from "react";

export default function Textareya({
  label,
  register,
  placeholder = "",
  defaultValue = "",
  required = false,
  disabled = false,
  rows = 4
}) {
  return (
    <div className="w-full p-1">
      <label className="text-[15px] font-semibold pb-1 pl-0.5 text-[#338585]">
        {label} {required && <span className="text-red-600">*</span>}
      </label>

      <textarea
        rows={rows}
        placeholder={placeholder}
        defaultValue={defaultValue}
        disabled={disabled}
        {...register}
        className={`w-full rounded-md bg-[#b5d1d1] p-2 outline-none
          focus:border-2 focus:border-[#206060] 
          ${disabled ? "opacity-60 cursor-not-allowed" : ""}`}
      ></textarea>
    </div>
  );
}
