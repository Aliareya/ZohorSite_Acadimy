import React from "react";

function Input({ label ,register}) {
  return (
    <div className="w-full p-1">
      <label
        htmlFor="name"
        className="text-[15px] font-semibold pb-2 pl-0.5 text-[#338585]"
      >
        {label}
      </label>
      <input
        type="text"
        {...register}
        className="w-full h-9 ,  rounded-md bg-[#d1e2e2] focus:border-2 pl-2 focus:border-[#206060] outline-none"
      />
    </div>
  );
}

export default Input;
