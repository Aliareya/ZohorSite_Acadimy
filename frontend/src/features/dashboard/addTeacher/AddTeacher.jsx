import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Input from "../shared/ui/Input";
import { useForm } from "react-hook-form";
import Select from "../shared/ui/Select"
import Input_ from "postcss/lib/input";

function AddTeacher() {
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
  const salary_Type = ["AFG" , "USD" , "EUR","TOMAN"];
  const payment_at = ["Monthly" , "Weekly" , "Yearly"];

  const [salaryType , setSalaryType] = useState();
  const [paymenAt , setPayment] = useState();
  const [subject , setSubject] = useState();
  const {register  , handleSubmit } = useForm();

  const handleTeacher = (data) => {
    const teacherdate = {
      name : data.name,
      last_name : data.last_name,
      email : data.email,
      phone : data.phone,
      experience : data.experience,
      subject : subject,
      salary_type : salaryType , 
      paymenAt : paymenAt
    }

    console.log(teacherdate)
     
  }

  return (
    <div className="w-full flex justify-center ">
      <div className="w-[90%] h-auto bg-[#c0d2d2] p-3 rounded-md">
        <div className="w-full h-20 bg-[#338585] rounded-t-md flex justify-center items-center">
          <h1 className="text-xl font-bold font-[sans-serif] text-white">
            Register new Teacher
          </h1>
        </div>
        <form className="w-full h-auto" onSubmit={handleSubmit(handleTeacher)}>
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
              <Input label={"Name"} register={register("name")}/>
              <Input label={"Last Name"} register={register("last_name")}/>
              <Input label={"Email"} register={register("email")}/>
              <Input label={"Phone"} register={register("phone")}/>
              <Input label={"Experience"} register={register("experience")}/>
            </div>
            <div className="w-1/2">
              <div className="w-full h-auto bg-[#a5c8c8] rounded-md p-3">
                <div className="w-full h-10 bg-[#338585]/80 rounded-md flex gap-2 justify-center items-center">
                  <Icon
                    icon="lets-icons:book-duotone"
                    width="18"
                    height="18"
                    style={{ color: "#fff" }}
                  />
                  <span className="text-sm font-semibold text-white">Subject</span>
                </div>
                <Select options={subjects} placeholder="Subject" setvalue={setSubject}  />
              </div>
              <div className="w-full h-auto bg-[#a5c8c8] rounded-md p-3 mt-3">
                <div className="w-full h-10 bg-[#338585]/80 rounded-md flex gap-2 justify-center items-center">
                  <Icon
                    icon="rivet-icons:money"
                    width="18"
                    height="18"
                    style={{ color: "#fff" }}
                  />
                  <span className="text-sm font-semibold text-white">Salary</span>
                </div>
                <Input label={"Salary Amount"} register={register("salary_amount")}/>
                <Select placeholder="Salary Type" options={salary_Type} setvalue={setSalaryType}/>
                <Select placeholder="Payment time" options={payment_at} setvalue={setPayment}/>
              </div>
            </div>
          </div>
            <button type="submit" className="w-full h-10 bg-[#338585] rounded-md mt-5 text-white font-semibold">
              Register Teacher
            </button>
        </form>
      </div>
    </div>
  );
}

export default AddTeacher;
