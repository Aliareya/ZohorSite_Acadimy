import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Input from "../shared/ui/Input";
import Select from "../shared/ui/Select";
import { useForm } from "react-hook-form";
import RadioButton from "../shared/ui/RadioButton";

function AddStudent() {
  const [subject, setSubject] = useState("");
  const [realtion, setRealtion] = useState("");
  const [gender , setGender] = useState("")
  const {register , handleSubmit , formState:{errors}} = useForm();
  const guardianRelation = ["Father", "Mother", "Brother", "Sister" ];
  const subjects = [
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "Computer Science",
    "English",
    "History",
    "Geography",
    "Economics",
    "Art"
  ];


  const handleRegisterStudent = (data) =>{
    const sendData = {
      name : data.name,
      last_name : data.last_name,
      age : data.age,
      realtion_graient : realtion,
      email : data.email , 
      phone : data.phone , 
      gradian_phone : data.gradian_phone,
      address : data.address,
      gender : gender,
      subject : subject
    }
    console.log(sendData)

  }

  return (
    <div className="w-full flex justify-center ">
      <div className="w-[90%] h-auto bg-[#d1e2e2] shadow-md rounded-md p-3 pb-7 border border-[#9ca3af4d]">
        <div className="w-full h-20 bg-[#338585] rounded-t-md flex flex-col justify-center items-center">
          <h1 className="text-xl font-bold font-[sans-serif] text-white">
            Register new Student
          </h1>
          <h1 className="text-sm font-normal font-[sans-serif] text-white">
            Please fill in all required information to register a new student
          </h1>
        </div>
        <form className="w-full h-auto " onSubmit={handleSubmit(handleRegisterStudent)}>
          <div className="flex items-start gap-5  mt-4">
            <div className="w-1/2 h-auto bg-[#a5c8c8] rounded-md p-3">
              <div className="w-full h-10 mb-2 bg-[#338585]/80 rounded-md flex gap-2 justify-center items-center">
                <Icon
                  icon="line-md:person-twotone"
                  width="18"
                  height="18"
                  style={{ color: "#fff" }}
                />
                <span className="text-sm font-semibold text-white">
                  Personal
                </span>
              </div>
              <Input label={"Name"} register={register("name")} />
              <Input label={"Last Name"} register={register("last_name")} /> 
              <Input label={"Age"} register={register("age")} />
              {/* <Input name={"name"} label={"Gender"} register={register("gender")} /> */}
              <RadioButton
                name="gender"
                label="Gender"
                options={["Male", "Female", "Other"]}
                selectedValue={gender}
                onChange={setGender}
              />
              <Input label={"Email"} register={register("email")} />
              <Input label={"Phone"} register={register("phone")} />
              <Input label={"Address"} register={register("address")} />
            </div>
            <div className="w-1/2">
              <div className="w-full h-auto bg-[#a5c8c8] rounded-md p-3">
                <div className="w-full h-10 bg-[#338585]/80 rounded-md flex gap-2 justify-center items-center">
                  <Icon
                    icon="fluent:guardian-20-filled"
                    width="18"
                    height="18"
                    style={{ color: "#fff" }}
                  />
                  <span className="text-sm font-semibold text-white">Guardian</span>
                </div>
                <Input label={"Name"} register={register("gradian_name")} />
                <Input label={"Last Name"} register={register("gradian_lastName")} />
                <Input label={"Phone"} register={register("gradian_phone")} />
                <Select options={guardianRelation} placeholder="Select Relation" setvalue={setRealtion}  />
              </div>
              <div className="w-full h-auto bg-[#a5c8c8] rounded-md p-3 mt-3">
                <div className="w-full h-10 bg-[#338585]/80 rounded-md flex gap-2 justify-center items-center">
                  <Icon
                    icon="mdi:book-outline"
                    width="18"
                    height="18"
                    style={{ color: "#fff" }}
                  />
                  <span className="text-sm font-semibold text-white">Subject</span>
                </div>
                <Select options={subjects} placeholder="Select Subject" setvalue={setSubject} />
              </div>
            </div>
          </div>
          <button type="submit" className="w-full h-10 bg-[#338585] rounded-md mt-5 text-white font-semibold">
            Register Student
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddStudent;
