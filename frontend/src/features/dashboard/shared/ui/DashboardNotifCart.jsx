import React from 'react';
import { Icon } from '@iconify/react';

function DashboardNotifCart({notifications , title , subtitle}) {
  return (
    <div className="w-1/2 hover:shadow-lg h-auto bg-[#d1e2e2] border pt-5 p-6 border-gray-400/30 rounded-lg">
          <h1 className="text-2xl font-semibold">{title}</h1>
          <p className="text-sm text-gray-600 ">{subtitle}</p>
          <div className="w-full pt-5 ">
            {notifications.map((item, index) => {
              return (
                <div key={index} className="w-full hover:shadow-md border p-2 mb-3 rounded-lg bg-white/20">
                  <div className="flex gap-3 ">
                    <Icon
                      icon="majesticons:users-line"
                      width="23"
                      height="23"
                      style={{ color: "#166534" }}
                    />
                    <h6 className="font-semibold">{item.message}</h6>
                  </div>
                  <div className="w-full flex justify-between items-end pl-8 pt-1 gap-2">
                    <div className="flex gap-2">
                      <Icon
                        icon="iconamoon:clock-duotone"
                        width="24"
                        height="24"
                        style={{ color: "#166534" }}
                      />
                      <span className="text-sm font-semibold text-black/45">
                        {item.time}
                      </span>
                    </div>
                    <span
                      className={`${
                        item.type === "success"
                          ? "bg-[#166534]"
                          : "bg-[#166534]/50"
                      } text-sm font-semibold text-white px-1.5 py-0.5  cursor-pointer rounded-md`}
                    >
                      {item.type}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
  )
}

export default DashboardNotifCart
