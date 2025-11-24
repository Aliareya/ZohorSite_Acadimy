import React from "react";
import { Icon } from "@iconify/react";
import img from "../../../assets/ali.jpg";
import Input from "./ui/Input";
import { useForm } from "react-hook-form";
import Textareya from "./ui/Textareya";

function General() {
   const {register , handleSubmit} = useForm();

   const handleEditProfile =(data)=>{
     console.log(data)
   }

  return (
    <div className="w-full ">
      <div className="bg-[#357e7e] px-5 pt-5 rounded-t-md">
        <div className="w-full flex gap-2 items-center pb-2">
          <Icon
            icon="line-md:person-twotone"
            width="35"
            height="35"
            style={{ color: "#fff" }}
          />
          <span className="text-2xl font-bold text-white">
            Personal Information
          </span>
        </div>
        <span className="pl-1 text-gray-100">
          Update your personal details and profile information
        </span>
        <div className="w-full flex gap-3 items-center pt-10 pb-7 border-b border-[#4e7878]">
          <div
            className="w-20 h-20 rounded-full bg-slate-600 bg-center bg-cover border border-white"
            style={{ backgroundImage: `url(${img})` }}
          ></div>
          <div className="flex  gap-3 flex-col  ">
            <span className="text-xl font-bold text-white">
              Alireza Ebrahimi
            </span>
            <div className="w-40 h-8 bg-[#a5c8c8] rounded-md flex items-center justify-center gap-3">
              <Icon
                icon="material-symbols:add-a-photo-outline"
                width="20"
                height="20"
                style={{ color: "#35634f" }}
              />
              <span className="text-sm font-bold text-[#1a5252]">
                Change Photo
              </span>
            </div>
          </div>
        </div>
      </div>
      <form className="w-full p-3 flex flex-col gap-5" onSubmit={handleSubmit(handleEditProfile)}>
         <div className="w-full flex justify-center items-center gap-20">
           <Input label={"Name"} defaultValue="Alireza" register={register("name",{required:true})}/>
           <Input label={"Last Name"} defaultValue="Ebrahimi" register={register("last_name",{required:true})}/>
         </div>
         <div className="w-full flex justify-center items-center gap-20">
           <Input label={"Email"} defaultValue="ali@gmail.com" disabled={true} register={register("email",{required:true})}/>
           <Input label={"Phone"} defaultValue="+93 0705702789" register={register("phone",{required:true})}/>
         </div>
         <div className="w-full flex justify-center items-center gap-20">
           <Textareya register={register("bio")} label={"Biography"} defaultValue="This is for test"/>
         </div>
         <button type="submit" className="w-full h-10 bg-[#338585] rounded-md mt-5 text-white font-semibold">
            Update Profile
         </button>
      </form>
    </div>
  );
}

export default General;
