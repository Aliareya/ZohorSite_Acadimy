import { Icon } from "@iconify/react";
import ToggleSwitch from "../shared/ui/ToggleSwitch";
import { useState } from "react";
import PrivacyCart from "./component/PrivacyCart";

function Privicy() {
  const [isPrivateProfile, setIsPrivateProfile] = useState(false);
  const [isPrivateOnline, setIsPrivateOnline] = useState(false);
  return (
    <div>
      <div className="bg-[#357e7e] px-5 pt-5 pb-5 rounded-t-md">
        <div className="w-full flex gap-2 items-center pb-2">
          <Icon
            icon="material-symbols:privacy-tip"
            width="35"
            height="35"
            style={{ color: "#fff" }}
          />
          <span className="text-2xl font-bold text-white">
            Privacy Settings
          </span>
        </div>
        <span className="pl-1 text-gray-100">
          Control your privacy and data sharing preferences
        </span>
      </div>
      <div className="flex flex-col gap-3 p-3 pt-4">
        <PrivacyCart
          enable={isPrivateProfile}
          setEnabled={setIsPrivateProfile}
          title={"Profile Visibility"}
          desc={"Hide your profile From other users"}
        />
        <PrivacyCart
          enable={isPrivateOnline}
          setEnabled={setIsPrivateOnline}
          title={"Activity Status"}
          desc={"Show when you're online"}
        />
        {/* <PrivacyCart
          enable={isPrivateProfile}
          setEnabled={setIsPrivateProfile}
          title={"Data Analytics"}
          desc={"Help improve our services with usage data"}
        /> */}
      </div>
    </div>
  );
}

export default Privicy;
