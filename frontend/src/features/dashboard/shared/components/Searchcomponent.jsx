import React from "react";
import { Icon } from "@iconify/react";
import AnimatedSelect from "../ui/AnimatedSelect";

function Searchcomponent({handleSearch , selectFilter , setSelectFilter , filters , page=null , secounfiletr=null , secounSelect=null , secoundFiltershow=null}) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center ">
      <div className="flex-1">
        <div className="relative">
          <span className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Icon
              icon="gridicons:search"
              width="20"
              height="20"
              style={{ color: "#338585" }}
            />
          </span>
          <input
            onChange={(e)=>handleSearch(e.target.value)}
            type="text"
            placeholder="Search students..."
            className="w-full pl-12 pr-4 py-3 rounded-lg border-2 bg-transparent  border-[#3d9797] focus:border-[#247474] focus:ring-0 outline-none shadow-sm"
          />
        </div>
      </div>
      <AnimatedSelect selected={selectFilter}  setSelected={setSelectFilter}  options={filters} page={"attendance"}/>
      {page === "attendance" &&(
        <AnimatedSelect selected={secoundFiltershow}  setSelected={secounSelect}  options={secounfiletr} page={"attendance"}/>
      )}
    </div>
  );
}

export default Searchcomponent;
