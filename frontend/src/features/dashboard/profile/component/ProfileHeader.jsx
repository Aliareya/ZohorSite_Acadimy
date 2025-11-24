import React from 'react'

function ProfileHeader({page , options , setPage}) {
  return (
    <div className="w-full h-12 rounded-md bg-[#a5c8c8] p-2 mt-4 flex gap-5 justify-center items-center">
        {options.map((item , index)=>{
         return(
            <button onClick={()=>setPage(item)} key={index}                   
               className={`${page === item ?"bg-[#338585]/80 font-semibold text-white " :"text-black" }
               w-2/6 h-9 rounded-md`}>
               {item}
            </button>
         )
        })}
      </div>
  )
}

export default ProfileHeader
