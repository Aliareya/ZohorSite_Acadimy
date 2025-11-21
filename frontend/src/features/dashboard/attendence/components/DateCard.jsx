// DateCard.jsx
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function DateCard({ setDateFilter }) {
  const today = new Date();

  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [selectedDay, setSelectedDay] = useState(today.getDate());

  const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  const days = ["Su","Mo","Tu","We","Th","Fr","Sa"];

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const calendar = [];
  for (let i = 0; i < firstDay; i++) calendar.push("");
  for (let i = 1; i <= daysInMonth; i++) calendar.push(i);

  const goPrevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear((prev) => prev - 1);
    } else {
      setMonth((prev) => prev - 1);
    }
  };

  const goNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear((prev) => prev + 1);
    } else {
      setMonth((prev) => prev + 1);
    }
  };

  const selectDate = (day) => {
    setSelectedDay(day);
    setDateFilter({ day, month: month + 1, year });
  };

  return (
    <div className="w-full max-w-sm rounded-2xl shadow-md border border-gray-200 p-6 bg-[#338585]">
      <h2 className="text-xl font-semibold text-white mb-1">Select Date</h2>
      <p className="text-sm text-white mb-4">Choose a date to view attendance</p>

      <div className="flex items-center justify-between w-full px-1 py-2 mb-3">
        <button onClick={goPrevMonth} className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-300 hover:bg-gray-100">
          <ChevronLeft size={18} />
        </button>
        <div className="text-lg font-semibold text-white">{months[month]} {year}</div>
        <button onClick={goNextMonth} className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-300 hover:bg-gray-100">
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="rounded-xl border border-gray-200 p-4">
        <div className="grid grid-cols-7 text-center text-sm text-white mb-2">
          {days.map((d,i) => <div key={i}>{d}</div>)}
        </div>

        <div className="grid grid-cols-7 gap-2 text-white text-center">
          {calendar.map((day,i) => (
            <div
              key={i}
              onClick={() => day && selectDate(day)}
              className={`h-9 flex items-center justify-center rounded-md ${day ? "hover:bg-[#1e5959] cursor-pointer" : ""} ${day === selectedDay ? "bg-[#1e5959] text-white" : ""}`}
            >
              {day}
            </div>
          ))}
        </div>
      </div>

      {selectedDay && <p className="mt-4 text-center text-white font-medium">{months[month]} {selectedDay}, {year}</p>}
    </div>
  );
}
