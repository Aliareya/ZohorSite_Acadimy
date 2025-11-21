import React from "react";
import { Icon } from "@iconify/react";

function AttendanceCard({ attendance }) {
  return (
    <div className="flex items-center relative justify-between hover:bg-[#4e8a8a] bg-[#5d9f9f] rounded-lg border border-slate-100 p-4 shadow-md transition duration-200">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 font-medium">
          {attendance?.name.slice(0, 2).toUpperCase()}
        </div>
        <div>
          <div className="flex items-center gap-3">
            <h3 className="text-white cursor-pointer text-xl font-semibold">
              {attendance.name}
            </h3>
            <span
              className={`bg-white  ${
                attendance?.attendanceStatus === "Present"
                  ? "text-green-900"
                  : attendance?.attendanceStatus === "Late"
                  ? "text-[#b7998c]"
                  : "text-red-500"
              } text-sm absolute flex gap-2 right-4 top-1/3 font-semibold px-3 py-2 rounded-full  text-white`}
            >
              {attendance?.attendanceStatus}

              <Icon
                icon={
                  attendance?.attendanceStatus === "Present"
                    ? "line-md:check-all"
                    : attendance?.attendanceStatus === "Late"
                    ? "ph:check-bold"
                    : "line-md:close-circle"
                }
                // className="absolute -top-3 -right-1 "
                width="24"
                height="24"
                style={{
                  color:
                    attendance?.attendanceStatus === "Present"
                      ? "green"
                      : attendance?.attendanceStatus === "Late"
                      ? "#b7998c"
                      : "red",
                }}
              />
            </span>
          </div>
          <div className="text-xs text-white mt-2 flex flex-wrap gap-6">
            <span>
              <b>Student Code</b> {attendance.studentCode}
            </span>
            <span>
              <b>Subject:</b> {attendance.subjectName}
            </span>
            <span>
              <b>Date:</b> {attendance?.date.year}/{attendance?.date.month}/
              {attendance?.date.day}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AttendanceCard;
