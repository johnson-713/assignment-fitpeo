/* eslint-disable react/prop-types */
import { SidebarMob } from './SidebarMob'

export const MobileSidebar = ({isOpen, closeSidebar}) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-50"
          onClick={closeSidebar}
        />
      )}
      {/* Sidebar */}
      <div
        className={`fixed h-full w-60 bg-[#202028] top-0 left-0 transform transition-transform ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } z-50`}
      >
        {/* <div className=" px-[20px] py-[22px] mb-5">
          <AppImage src={PayrentzLogo} />
        </div> */}
        {/* Sidebar content */}
        {/* {console.log("dashboarData", dashboardData)} */}
        <SidebarMob closeSidebar={closeSidebar} />
      </div>
    </>
  )
}