import React from "react";
import { Icon } from "@iconify/react";
import { useLocation, useNavigate } from "react-router-dom";

function MenuCart({ menu , handleLogout = null}) {
  const navigate = useNavigate();
  const location = useLocation().pathname;

  const fullPath = menu.path === "/dashboard" 
    ? "/dashboard"
    : `/dashboard${menu.path}`;

  const isActive = location === fullPath;

  const handleClick = () => {
    if(handleLogout){
      handleLogout();
    }else{
      navigate(fullPath);

    }
  };

  return (
    <div
      onClick={handleClick}
      className={`${
        isActive && "bg-[#338585] border-b border-white"
      } px-2.5 mb-1.5 w-full h-10 cursor-pointer py-5 rounded-lg flex items-center hover:bg-[#338585]`}
    >
      <Icon icon={menu.icon} width="23" height="23" style={{ color: "#fff" }} />
      <span className="text-[18px] text-white pl-3">{menu.title}</span>
    </div>
  );
}

export default MenuCart;
