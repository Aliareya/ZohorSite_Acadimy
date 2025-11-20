import React, { useState } from "react";
import ContentHeader from "../shared/components/ContentHeader";
import QuickAccess from "../shared/components/QuickAccess";
import StudentCart from "./components/StudentLineCart";
import Searchcomponent from "../shared/components/Searchcomponent";
import { Icon } from "@iconify/react";
import StudentBoxCart from "./components/StudentBoxCart";

function Student() {
  const [isGride, setisGride] = useState(false);

  const studentStatusStats = [
    { title: "Active Students", total: "2,100", increase: "50" },
    { title: "Inactive Students", total: "250", decrease: "10" },
    { title: "Suspended Students", total: "80", decrease: "5" },
    { title: "Graduated Students", total: "100", increase: "10" },
  ];

  const students = [
    { name: "John Doe", last_name:"Golf", status: "Active", email: "john@email.com", id: "STU001", course: "CS", year: "2nd" },
    { name: "Alireza", last_name:"Ebrahimi", status: "Active", email: "a@email.com", id: "STU002", course: "CS", year: "2nd" },
    { name: "Student 3", last_name:"Stu", status: "Active", email: "s3@email.com", id: "STU003", course: "CS", year: "2nd" },
    { name: "Student 4", last_name:"Stud", status: "Active", email: "s4@email.com", id: "STU004", course: "CS", year: "2nd" },
    { name: "Student 5", last_name:"Stu", status: "Active", email: "s5@email.com", id: "STU005", course: "CS", year: "2nd" },
    { name: "Student 6", last_name:"Dhnd", status: "Active", email: "s6@email.com", id: "STU006", course: "CS", year: "2nd" },
    { name: "Student 7", last_name:"Mshw", status: "Active", email: "s7@email.com", id: "STU007", course: "CS", year: "2nd" },
  ];

  const [filterStudent , setStudentFilter] = useState(students);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(filterStudent.length / itemsPerPage);

  const paginatedStudents = filterStudent.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

 
  const [selected, setSelected] = useState({label: "Search By Name",value: "name"});

  const options = [
    { label: "Search By Name", value: "name", icon: "simple-icons:namecheap" },
    { label: "Search By ID", value: "id", icon: "material-symbols-light:qr-code" },
    { label: "Search By Email", value: "email", icon: "line-md:email-twotone" },
  ];

  const handleSearch = (value) =>{
    const search = value;

    const filteredStudents = students.filter((item) => {
      if (!search) return true;

      let field = (item[selected.value] || "").toLowerCase(); 
      if (selected.value === "email") {
        field = field.split("@")[0]; 
      }
      const words = search.toLowerCase().trim().split(/\s+/); 

      return words.every((w) => field.includes(w));
    });

    setStudentFilter(filteredStudents)

  }

  const handleGrideStyle = ()=>{
    setisGride(true)
  }
  const handleLinerStyle = ()=>{
    setisGride(false)
  }

  return (
    <div>
      <ContentHeader
        title="Student"
        desc="Manage student profiles and information"
        data={studentStatusStats}
      />

      <div className="h-auto bg-[#d1e2e2] rounded-lg border border-gray-400/30 p-6 mt-4">
        <div className="max-w-6xl mx-auto">

          {/* Title */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-slate-900">Student Directory</h2>
            <p className="text-sm text-slate-500">Search and manage all student records</p>
          </div>

          <div className="rounded-xl shadow-sm  border border-gray-400/30 p-6">
          {/* Search */}
            <div className="flex gap-2 mb-4">
              <div className="w-[90%]">
              <Searchcomponent
                handleSearch={handleSearch}
                setSelectFilter={setSelected}
                selectFilter={selected}
                filters={options}
              />
              </div>
              <div className="w-[10%] flex gap-2">
                <button onClick={handleGrideStyle} className={`${isGride?"bg-[#336464]":"border-[#336464]"}  p-1 px-3 flex justify-center items-center gap-3 rounded-md border border-white `}>
                  <Icon icon="mingcute:grid-fill" width="22" height="22"  style={{color: isGride?'#fff':"#336464"}} />
                </button>
                <button onClick={handleLinerStyle} className={`${!isGride?"bg-[#336464]":"border-[#336464]"} p-2 px-3 flex justify-center items-center rounded-md border`}>
                  <Icon icon="ooui:menu" width="22" height="22"  style={{color: isGride?'#336464':"#fff"}} />
                </button>
              </div>
            </div>

            {/* Student List */}
            <div className={`${isGride? "flex flex-wrap" : ""} space-y-4 justify-between items-center`}>
              
              {paginatedStudents.map((item) => (
                isGride ? (
                  <StudentBoxCart item={item}/>
                ):(
                  <StudentCart
                    key={item.id}
                    student={item}
                  />
                )
              ))}
            </div>

            {/* Pagination */}
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
                onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
                className="bg-[#389393] p-1.5 rounded-full text-white disabled:opacity-40"
                disabled={currentPage === totalPages}
              >
                <Icon icon="mingcute:arrow-right-line" width="20" height="20" />
              </button>

            </div>

          </div>
        </div>
      </div>

      <QuickAccess />
    </div>
  );
}

export default Student;
