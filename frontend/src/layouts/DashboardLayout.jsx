import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./dashbordComponents/Sidebar";
import Topbar from "./dashbordComponents/Topbar";

function DashboardLayout() {
  const [showSidebar, setShowSidebar] = useState(true);

//   const toggleSidebar = () =>{
//     setShowSidebar(!showSidebar);
//   }

  return (
    <div className="w-full h-auto">
      <div className={`${ showSidebar ? "w-60" : "w-0" } fixed left-0 top-0 h-screen bg-white shadow-md sidebar-animate z-40`}>
        <Sidebar />
      </div>

      <div className={`${showSidebar ? "ml-60" : "ml-0"} flex-1 min-h-screen bg-[#d1e2e2d5] transition-all duration-300`}>
        <div className="sticky top-0 z-30 bg-white shadow">
          <Topbar />
        </div>

        <div className="p-4">
            <Outlet />
        </div>
      </div>

    </div>
  );
}

export default DashboardLayout;
