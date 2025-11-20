import { Icon } from '@iconify/react'
import React from 'react'

function DashboardStatusCart({item}) {
  return (
     <div className="w-1/4 hover:shadow-lg h-auto bg-[#d1e2e2] border p-6 border-gray-400/30 rounded-lg">
      <div className="w-full flex justify-between pb-2 ">
        <span className="text-[16px] font-semibold">{item.title}</span>
        <Icon
          icon="majesticons:users-line"
          className="cursor-pointer"
          width="25"
          height="25"
          style={{ color: "#006666" }}
        />
      </div>
      <span className="text-2xl font-bold ">{item.total}</span>
      <p className="text-sm font-medium pt-3">Active enrollments</p>
      <p className="text-sm font-medium ">
        <span className="text-green-700">+{item.increase}%</span> from last month
      </p>
    </div>
  )
}

export default DashboardStatusCart
