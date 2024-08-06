import { useState } from "react";
import { navData } from "../constants/constants";
import { MobileSidebar } from "./MobileSidebar";

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeSidebar = () => {
    setIsOpen(false);
  };
  return (
    <div className="bg-[#202028] block xl:hidden md:px-[19px] py-[20px] px-[20px]">
      <div>
        <div className="flex justify-between">
          <div className="flex gap-[18px] object-none">
            <img
              src={"/icons/logo.svg"}
              width={25}
              height={25}
              alt="ham-icon"
              className="max-w-[114px] md:max-w-[122px]"
              onClick={() => setIsOpen(true)}
            />
          </div>
          <div className="flex gap-[21px] items-center">
            <div className="flex gap-[20px]">
              {navData?.map((i) => (
                <a target="_blank" href={i?.link} key={i?.id}>
                  <img src={i?.img} alt="icons" width={20} height={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <MobileSidebar isOpen={isOpen} closeSidebar={closeSidebar} />
    </div>
  );
}

export default MobileNavbar;
