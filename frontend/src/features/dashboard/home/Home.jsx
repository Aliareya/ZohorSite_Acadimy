import React from "react";
import bannerimage from "../../../assets/bannerimage.jpg";
import DashboardStatusCart from "../shared/ui/DashboardStatusCart";
import DashboardNotifCart from "../shared/ui/DashboardNotifCart";
import QuickAccess from "../shared/components/QuickAccess";

function Home() {
  const dashboardStatsTotal = [
    {title:"Total Students" , icon :"" , total : "2,530" , increase : "30" , decrease :null},
    {title:"Total Teachers" , icon :"" , total : "300" , increase : "5" , decrease :null},
    {title:"Attendance Rate" , icon :"" , total : "80.7%" , increase : "40" , decrease :null},
    {title:"Active Courses" , icon :"" , total : "50" , increase : "5" , decrease :null},
  ];

  const notifications = [
        {
            message: "New student John Doe enrolled in Computer Science",
            time: "5 minutes ago",
            type: "success"
        },
        {
            message: "Weekly attendance report generated",
            time: "1 hour ago",
            type: "info"
        },
        {
            message: "Low attendance alert for Mathematics class",
            time: "2 hours ago",
            type: "warning"
        },
        {
            message: "Science Fair event scheduled for next week",
            time: "3 hours ago",
            type: "success"
        }
  ];

  const schedule = [
        {
            message: "Parent-Teacher Conference",
            time: "Tomorrow, 9:00 AM",
            type: "meeting"
        },
        {
            message: "Science Fair",
            time: "Friday, 10:00 AM",
            type: "event"
        },
        {
            message: "Monthly Assessment",
            time: "Next Monday, 2:00 PM",
            type: "exam"
        }
    ];

  return (
    <div className="w-full">
      <div
        className="w-full  h-60 rounded-xl bg-cover overflow-hidden"
        style={{
          backgroundImage: `url(${bannerimage})`,
          backgroundPosition: "60% 66%",
        }}
      >
        <div className="w-full h-60 bg-[#006666]/40 pl-5 flex-col justify-center items-center pt-10">
          <span className="text-4xl text-white font-semibold">
            Welcome back, Admin!
          </span>
          <p className="text-lg text-white font-normal pt-2">
            Here's what's happening at your academy today
          </p>
        </div>
      </div>

      <div className="w-full pt-5 flex gap-4">
        {dashboardStatsTotal.map((item, index) => {
          return <DashboardStatusCart item={item} key={index} />;
        })}
      </div>

      <div className="w-full pt-5 flex items-start gap-5">
        <DashboardNotifCart notifications={notifications} title={"Recent Activities"} subtitle={"Latest updates from your academy"} />
        <DashboardNotifCart notifications={schedule} title={"Upcoming Events"} subtitle={"Don't miss these important dates"} />
      </div>

      <QuickAccess/>
      
    </div>
  );
}

export default Home;
