import React, { useState } from "react";
import MenuCart from "../../features/dashboard/shared/ui/MenuCart";

function SidebarMenu() {
  const [menu, setMenu] = useState([
    { title: "Dashborad", icon: "mage:chart", path: "/dashboard" },
    { title: "Students", icon: "majesticons:users-line", path: "/students" },
    { title: "Teachers", icon: "heroicons:users-20-solid", path: "/teachers" },
    { title: "Attendance", icon: "proicons:task-list", path: "/attendance" },
    { title: "Add Student", icon: "humbleicons:user-add", path: "/addstudent" },
    {title: "Add Teacher",icon: "mdi:account-student-outline",path: "/addteacher"},
  ]);

  const [menuSystem, setmenuSystem] = useState([
    { title: "Profile", icon: "ix:user-profile", path: "/porfile" },
    { title: "User Roles", icon: "oui:app-users-roles", path: "/roles" },
    { title: "Setting", icon: "tdesign:setting-1", path: "/setting" },
  ]);

  const logout = [
    { title: "Logout", icon: "streamline-sharp:logout-2-remix", path: "/login" },
  ];

  const handleLogout =()=>{
    console.log("user logout")
  }

  return (
    <div className="h-[calc(100%-64px)] flex flex-col justify-between">

      <div className="w-full h-auto px-2 py-2">
        {menu.map((item, index) => {
          return <MenuCart menu={item} key={index} />;
        })}
      </div>

      <div className={`w-full h-auto  px-2 py-2 `}>

        <div className={`w-full  border-b mb-2 border-gray-400  p-2 `}>
          <span className="text-white">System</span>
        </div>
        {menuSystem.map((item, index) => {
          return <MenuCart menu={item} key={index} />;
        })}

        <div className=" border-t border-gray-400 mt-2 pt-2">
          {logout.map((item, index) => {
            return <MenuCart menu={item} key={index} handleLogout={handleLogout} />;
          })}
        </div>

      </div>
    </div>
  );
}

export default SidebarMenu;
