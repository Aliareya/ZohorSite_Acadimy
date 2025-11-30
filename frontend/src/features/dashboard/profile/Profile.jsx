import React, { useState } from "react";
import ProfileHeader from "./component/ProfileHeader";
import { Icon } from "@iconify/react";
import General from "./General";
import Security from "./Security";
import Privicy from "./Privicy";


function Profile() {
  const [profilePage, setProfilePage] = useState("General");
  const opti = ["General" , "Security", "Privacy"];
  return (
    <div className="w-full p-2">
      <div>
        <h1 className="text-3xl font-bold text-[#338585]">Profile</h1>
        <span>Manage your account settings and preference</span>
      </div>
      <ProfileHeader options={opti}  page={profilePage} setPage={setProfilePage} />
      <div className="w-full h-auto] bg-[#d1e2e2] shadow-md border rounded-md border-[#9ca3af4d] mt-5">
        {profilePage === "General" ? (<General/>):profilePage ==="Security" ? (<Security/>):
         (<Privicy/>)
        }
      </div>
    </div>
  );
}

export default Profile;
