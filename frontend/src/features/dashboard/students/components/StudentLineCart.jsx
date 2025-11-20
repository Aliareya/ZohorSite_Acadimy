import React, { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";
import MenuPopup from "../../shared/popups/MenuPopup";

function StudentCart({ student}) {

  return (
    <div
      className="flex items-center relative justify-between hover:bg-[#4e8a8a] bg-[#5d9f9f] rounded-lg border border-slate-100 p-4 shadow-md transition duration-200"
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 font-medium">
          {student.name.slice(0, 2).toUpperCase()}
        </div>
        <div>
          <div className="flex items-center gap-3">
            <h3 className="text-white cursor-pointer text-xl font-semibold">
              {student.name}
            </h3>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#b7998c] text-white">
              {student.status}
            </span>
          </div>
          <div className="text-xs text-white mt-2 flex flex-wrap gap-6">
            <span>
              <b>ID:</b> {student.id}
            </span>
            <span>
              <b>Course:</b> {student.course}
            </span>
            <span>
              <b>Year:</b> {student.year}
            </span>
            <span>
              <b>Email:</b> {student.email}
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-4">
        <Icon
          className="cursor-pointer"
          icon="material-symbols-light:delete-outline"
          width="25"
          height="25"
          style={{ color: "#623c1e" }}
        />
        <Icon
          icon="cuida:edit-outline"
          className="cursor-pointer"
          width="20"
          height="20"
          style={{ color: "#fff" }}
        />
        <Icon
          className="cursor-pointer"
          icon="carbon:view"
          width="24"
          height="24"
          style={{ color: "#fff" }}
        />
      </div>
    </div>
  );
}

export default StudentCart;
