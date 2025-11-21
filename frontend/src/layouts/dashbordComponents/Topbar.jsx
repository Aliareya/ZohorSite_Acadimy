import { Icon } from "@iconify/react";

function Topbar() {
  const date = new Date();
  const formatted = `${date.getFullYear()}/${String(date.getMonth() + 1).padStart(2, '0')}/${String(date.getDate()).padStart(2, '0')} (Afghanistan)`;


  return (
    <div className="w-full flex h-16 bg-[#d1e2e2]  ">
      <div className="w-1/2  h-16 flex justify-start items-center ">
        {/* {showSidebar ? 
           (
            <Icon icon="ic:round-menu-open" className="cursor-pointer"
              onClick={toggleSidebar}
              width="39" height="39" style={{ color: '#006666' }} />
            ) : (
              <Icon icon="line-md:menu-fold-right" className="cursor-pointer"
                onClick={toggleSidebar}
                width="32" height="32" style={{ color: '#006666' }} />
            )
        } */}
        <div className="h-16 flex flex-col justify-center pl-5">
          <span className="text-lg font-semibold italic">Areya 
            <span className="text-yellow-900 italic">Tech</span> Management</span>
          <span className="text-sm font-semibold">{formatted}</span>
        </div>

      </div>
      <div className="w-1/2 flex justify-end items-center h-16 px-5 gap-5">
        <span className="w-4 p-0.5 h-4 absolute right-[69px] top-2 text-sm flex justify-center items-center text-white font-bold rounded-full bg-[#006666]">2</span>
        <Icon icon="ic:outline-notifications" width="30" height="30"  style={{color: '#006666'}} />
        <Icon icon="ix:user-profile-filled" width="35" height="35"  style={{color: '#006666'}} />
      </div>
    </div> 
  );
}

export default Topbar;
