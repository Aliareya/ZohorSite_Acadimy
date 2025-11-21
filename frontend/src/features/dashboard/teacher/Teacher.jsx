import React, { useState } from "react";
import ContentHeader from "../shared/components/ContentHeader";
import Searchcomponent from "../shared/components/Searchcomponent";
import StudentBoxCart from "../students/components/StudentBoxCart";
import { Icon } from "@iconify/react";
import QuickAccess from "../shared/components/QuickAccess";

function Teacher() {
  const teacherStatusStats = [
    {
      title: "Active Teachers",
      icon: "",
      total: "250",
      increase: "5",
      decrease: null,
    },
    {
      title: "On Leave Teachers",
      icon: "",
      total: "20",
      increase: null,
      decrease: "2",
    },
    {
      title: "Retired Teachers",
      icon: "",
      total: "10",
      increase: null,
      decrease: null,
    },
    {
      title: "Terminated Teachers",
      icon: "",
      total: "5",
      increase: null,
      decrease: null,
    },
  ];

  const teachers = [
    {
      name: "John Doe",
      last_name: "Golf",
      status: "Active",
      email: "john@email.com",
      id: "STU001",
      course: "CS",
      year: "2nd",
    },
    {
      name: "Alireza",
      last_name: "Ebrahimi",
      status: "Active",
      email: "a@email.com",
      id: "STU002",
      course: "CS",
      year: "2nd",
    },
    {
      name: "Student 3",
      last_name: "Stu",
      status: "Active",
      email: "s3@email.com",
      id: "STU003",
      course: "CS",
      year: "2nd",
    },
    {
      name: "Student 4",
      last_name: "Stud",
      status: "Active",
      email: "s4@email.com",
      id: "STU004",
      course: "CS",
      year: "2nd",
    },
    {
      name: "Student 5",
      last_name: "Stu",
      status: "Active",
      email: "s5@email.com",
      id: "STU005",
      course: "CS",
      year: "2nd",
    },
    {
      name: "Student 6",
      last_name: "Dhnd",
      status: "Active",
      email: "s6@email.com",
      id: "STU006",
      course: "CS",
      year: "2nd",
    },
    {
      name: "Student 7",
      last_name: "Mshw",
      status: "Active",
      email: "s7@email.com",
      id: "STU007",
      course: "CS",
      year: "2nd",
    },
  ];

  const [selected, setSelected] = useState({
    label: "Search By Name",
    value: "name",
  });

  const options = [
    { label: "Search By Name", value: "name", icon: "simple-icons:namecheap" },
    {
      label: "Search By ID",
      value: "id",
      icon: "material-symbols-light:qr-code",
    },
    { label: "Search By Email", value: "email", icon: "line-md:email-twotone" },
  ];

  const [filterStudent, setStudentFilter] = useState(teachers);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(filterStudent.length / itemsPerPage);

  const paginatedStudents = filterStudent.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSearch = (value) => {
    const search = value;

    const filteredStudents = teachers.filter((item) => {
      if (!search) return true;

      let field = (item[selected.value] || "").toLowerCase();
      if (selected.value === "email") {
        field = field.split("@")[0];
      }
      const words = search.toLowerCase().trim().split(/\s+/);

      return words.every((w) => field.includes(w));
    });

    setStudentFilter(filteredStudents);
  };

  return (
    <div>
      <ContentHeader
        title="Teachers"
        desc="Manage Teachers profiles and information"
        data={teacherStatusStats}
      />
      <div className="h-auto bg-[#d1e2e2] rounded-lg border border-gray-400/30 p-6 mt-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-slate-900">
              Teacher Directory
            </h2>
            <p className="text-sm text-slate-500">
              Search and manage all Teacher records
            </p>
          </div>

          <div className="rounded-xl shadow-sm border border-gray-400/30 p-6">
            <Searchcomponent
              handleSearch={handleSearch}
              setSelectFilter={setSelected}
              selectFilter={selected}
              filters={options}
            />

            <div className="pt-5 flex justify-between flex-wrap gap-3 items-center ">
              {paginatedStudents.map((item, index) => {
                return <StudentBoxCart item={item} />;
              })}
            </div>
          </div>
          <div className="flex items-center justify-center pt-5 gap-4">
            <button
              onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
              className="bg-[#389393] p-1.5 rounded-full text-white disabled:opacity-40"
              disabled={currentPage === 1}
            >
              <Icon icon="mingcute:arrow-left-line" width="20" height="20" />
            </button>

            <div className="flex items-center gap-1">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 rounded-lg text-sm ${
                    currentPage === i + 1
                      ? " text-[#1f5656] text-xl font-bold"
                      : "text-[#1f5656]"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() =>
                currentPage < totalPages && setCurrentPage(currentPage + 1)
              }
              className="bg-[#389393] p-1.5 rounded-full text-white disabled:opacity-40"
              disabled={currentPage === totalPages}
            >
              <Icon icon="mingcute:arrow-right-line" width="20" height="20" />
            </button>
          </div>
        </div>
      </div>
        <QuickAccess/>
    </div>
  );
}

export default Teacher;
