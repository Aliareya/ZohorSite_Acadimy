import React from "react";

export default function ProfileInput({ 
  label, 
  type = "text", 
  placeholder = "", 
  register,
  defaultValue = "",
  disabled = false
}) {
  return (
    <div className="w-full p-1">
      <label className="text-[15px] font-semibold pb-2 pl-0.5 text-[#338585]">
        {label}
      </label>

      <input
        disabled={disabled}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        {...register}
        className="w-full h-9 rounded-md bg-[#b5d1d1] focus:border-2 pl-2 focus:border-[#206060] outline-none"
      />
    </div>
  );
}
