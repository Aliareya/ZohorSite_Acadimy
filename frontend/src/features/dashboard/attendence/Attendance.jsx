// Attendance.jsx
import React, { useEffect, useState } from "react";
import ContentHeader from "../shared/components/ContentHeader";
import DateCard from "./components/DateCard";
import Searchcomponent from "../shared/components/Searchcomponent";
import { ArrowLeft, ArrowRight } from "lucide-react";
import AttendanceCard from "./components/AttendanceCard";
import QuickAccess from "../shared/components/QuickAccess";

export default function Attendance() {
  const attendanceStatusStats = [
    { title: "Present Attendance", icon: "", total: "2,100", increase: "40", decrease: null },
    { title: "Absent Attendance", icon: "", total: "200", increase: null, decrease: "15" },
    { title: "Late Attendance", icon: "", total: "120", increase: "5", decrease: null },
    { title: "Excused Attendance", icon: "", total: "110", increase: null, decrease: null },
  ];

  const attendanceData = [
    { studentCode: "STU001", name: "John Doe", attendanceStatus: "Present", subjectName: "Computer Science", subjectCode: "CS101", date: { year: 2025, month: 11, day: 20 } },
    { studentCode: "STU002", name: "Alireza Ebrahimi", attendanceStatus: "Absent", subjectName: "Mathematics", subjectCode: "MATH201", date: { year: 2025, month: 11, day: 21 } },
    { studentCode: "STU003", name: "Student 3", attendanceStatus: "Late", subjectName: "Physics", subjectCode: "PHY101", date: { year: 2025, month: 11, day: 19 } },
    { studentCode: "STU004", name: "Student 4", attendanceStatus: "Absent", subjectName: "Chemistry", subjectCode: "CHEM101", date: { year: 2025, month: 11, day: 21 } },
    { studentCode: "STU005", name: "Student 5", attendanceStatus: "Present", subjectName: "Biology", subjectCode: "BIO101", date: { year: 2025, month: 11, day: 20 } },
    { studentCode: "STU006", name: "Student 6", attendanceStatus: "Present", subjectName: "English", subjectCode: "ENG101", date: { year: 2023, month: 11, day: 17 } },
    { studentCode: "STU007", name: "Student 7", attendanceStatus: "Absent", subjectName: "History", subjectCode: "HIST101", date: { year: 2024, month: 11, day: 21 } },
    { studentCode: "STU008", name: "Student 8", attendanceStatus: "Late", subjectName: "Economics", subjectCode: "ECON101", date: { year: 2025, month: 5, day: 21 } },
    { studentCode: "STU009", name: "Student 9", attendanceStatus: "Present", subjectName: "Geography", subjectCode: "GEO101", date: { year: 2025, month: 11, day: 21 } },
    { studentCode: "STU010", name: "Student 10", attendanceStatus: "Present", subjectName: "Art", subjectCode: "ART101", date: { year: 2025, month: 11, day: 21 } },
  ];

  const today = new Date();
  const [dateFilter, setDateFilter] = useState({
    day: today.getDate(),
    month: today.getMonth() + 1,
    year: today.getFullYear(),
  });

  const [finalAttendance, setFinalAttendance] = useState(attendanceData);
  const [selected, setSelected] = useState({ label: "Search By Name", value: "name" });
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const options = [
    { label: "Search By Name", value: "name" },
    { label: "Search By ID", value: "studentCode" },
    { label: "Search By Email", value: "email" },
  ];

  const subjects = [
    { label: "All", value: "all" },
    { label: "Physics", value: "physics" },
    { label: "Chemistry", value: "chemistry" },
    { label: "English", value: "english" },
  ];

  const [subjectFilter, setSubjectFilter] = useState({ label: "All", value: "all" });

  useEffect(() => {
    let filtered = attendanceData;

    filtered = filtered.filter(
      (item) =>
        item.date.year === dateFilter.year &&
        item.date.month === dateFilter.month &&
        item.date.day === dateFilter.day
    );

    if (subjectFilter.value !== "all") {
      filtered = filtered.filter((item) =>
        item.subjectName.toLowerCase().includes(subjectFilter.value)
      );
    }

    if (searchValue) {
      filtered = filtered.filter((item) => {
        let field = (item[selected.value] || "").toLowerCase();
        if (selected.value === "email") field = field.split("@")[0];
        return field.includes(searchValue.toLowerCase().trim());
      });
    }

    setFinalAttendance(filtered);
    setCurrentPage(1);
  }, [dateFilter, subjectFilter, searchValue, selected]);

  const totalPages = Math.ceil(finalAttendance.length / itemsPerPage);
  const paginatedStudents = finalAttendance.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <ContentHeader
        title="Student"
        desc="Manage student profiles and information"
        data={attendanceStatusStats}
      />

      <div className="w-full flex gap-5 items-start mt-5">
        <DateCard setDateFilter={setDateFilter} />

        <div className="h-auto bg-[#d1e2e2] rounded-lg border border-gray-400/30 p-6 w-full">
          <div className="max-w-6xl mx-auto">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-slate-900">Attendance Records</h2>
            </div>

            <div className="rounded-xl shadow-sm border border-gray-400/30 p-6">
              <Searchcomponent
                handleSearch={setSearchValue}
                setSelectFilter={setSelected}
                selectFilter={selected}
                filters={options}
                secounfiletr={subjects}
                secounSelect={setSubjectFilter}
                secoundFiltershow={subjectFilter}
                page={"attendance"}
              />

              <div className="pt-5">
                {paginatedStudents.map((item, index) => (
                  <AttendanceCard attendance={item} key={index} />
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center pt-5 gap-4">
              <button
                onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                className="bg-[#389393] p-1.5 rounded-full text-white disabled:opacity-40"
                disabled={currentPage === 1}
              >
                <ArrowLeft width={20} height={20} />
              </button>

              <div className="flex items-center gap-1">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`px-3 py-1 rounded-lg text-sm ${
                      currentPage === i + 1
                        ? "text-[#1f5656] text-xl font-bold"
                        : "text-[#1f5656]"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
                className="bg-[#389393] p-1.5 rounded-full text-white disabled:opacity-40"
                disabled={currentPage === totalPages}
              >
                <ArrowRight width={20} height={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <QuickAccess />
    </div>
  );
}
