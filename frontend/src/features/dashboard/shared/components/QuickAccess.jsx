import React from 'react'
import { Icon } from '@iconify/react'

function QuickAccess() {
  return (
    <div className="w-full mt-4 hover:shadow-lg h-auto bg-[#d1e2e2] border pt-5 p-6 border-gray-400/30 rounded-lg">
        <h1 className="text-2xl font-semibold">Quick Actions</h1>
        <p className="text-sm text-gray-600 ">Common tasks you might want to perform</p>
        <div className="w-full flex gap-5 mt-5">
          <div className="w-1/4 h-24 bg-white/20 rounded-md hover:shadow-lg cursor-pointer border-gray-300 border flex flex-col gap-2 justify-center items-center">
            <Icon
              icon="majesticons:users-line"
              width="25"
              height="25"
              style={{ color: "#166534" }}
            />
            <h1 className="text-xl font-semibold">Add Student</h1>
          </div>
          <div className="w-1/4 h-24 bg-white/20 rounded-md hover:shadow-lg cursor-pointer border-gray-300 border flex flex-col gap-2 justify-center items-center">
            <Icon
              icon="majesticons:users-line"
              width="25"
              height="25"
              style={{ color: "#166534" }}
            />
            <h1 className="text-xl font-semibold">Add Student</h1>
          </div>
          <div className="w-1/4 h-24 bg-white/20 rounded-md hover:shadow-lg cursor-pointer border-gray-300 border flex flex-col gap-2 justify-center items-center">
            <Icon
              icon="majesticons:users-line"
              width="25"
              height="25"
              style={{ color: "#166534" }}
            />
            <h1 className="text-xl font-semibold">Add Student</h1>
          </div>
          <div className="w-1/4 h-24 bg-white/20 rounded-md hover:shadow-lg cursor-pointer border-gray-300 border flex flex-col gap-2 justify-center items-center">
            <Icon
              icon="majesticons:users-line"
              width="25"
              height="25"
              style={{ color: "#166534" }}
            />
            <h1 className="text-xl font-semibold">Add Student</h1>
          </div>
          
        </div>
      </div>
  )
}

export default QuickAccess
