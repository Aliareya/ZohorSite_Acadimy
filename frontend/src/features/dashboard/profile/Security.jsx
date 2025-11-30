import React from "react";
import { Icon } from "@iconify/react";
import Input from "./ui/Input";
import { useForm } from "react-hook-form";

function Security() {
   const {register , handleSubmit} = useForm();

   const handleEditProfile =(data)=>{
     console.log(data)
   }

  return (
    <div className="w-full ">
      <div className="bg-[#357e7e] px-5 pt-5 pb-5 rounded-t-md">
        <div className="w-full flex gap-2 items-center pb-2">
          <Icon
            icon="ic:twotone-lock"
            width="35"
            height="35"
            style={{ color: "#fff" }}
          />
          <span className="text-2xl font-bold text-white">
            Security Settings
          </span>
        </div>
        <span className="pl-1 text-gray-100">
         Manage your password and security preferences
        </span>

      </div>
      <form className="w-full p-6 flex  gap-5" onSubmit={handleSubmit(handleEditProfile)}>
         <div className="w-1/2 shadow-md rounded-b-md">
            <div className="w-full h-20 bg-[#357e7e] rounded-t-md flex justify-center items-center">
               <span className="text-xl font-semibold text-white">Change Your Password</span>
            </div>
            <div className="w-full p-5 flex flex-col justify-center items-center gap-4">
               <Input label={"Current Password"} defaultValue="Alireza" register={register("curren_pass",{required:true})}/>
               <Input label={"New Password"} defaultValue="Ebrahimi" register={register("newpass",{required:true})}/>
               <Input label={"Confirm New Password"} defaultValue="Ebrahimi" register={register("confirm_pass",{required:true})}/>
               <button type="submit" className="w-full h-10 bg-[#338585] rounded-md mt-5 text-white font-semibold">
                  Change Password
               </button>
            </div>
         </div>
         <div className="w-1/2 shadow-md rounded-b-md">
            <div className="w-full h-20 bg-[#357e7e] rounded-t-md flex justify-center items-center">
               <span className="text-xl font-semibold text-white">Two-Factor Authentication</span>
            </div>
            <div className="w-full p-5 flex flex-col justify-center items-center gap-4">
              <span className="text-lg font-semibold">Commning Soon</span>
            </div>
         </div>
      </form>
    </div>
  );
}

export default Security;
