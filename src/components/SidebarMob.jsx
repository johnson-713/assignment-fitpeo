/* eslint-disable react/prop-types */
import { sidebarData } from "../constants/constants";

export const SidebarMob = ({ closeSidebar }) => {
    const handleClick = () => {
        closeSidebar();
      };
 
  return (
    <div className="bg-[#202028] fixed left-10 flex items-center flex-col justify-between h-[90vh] pt-[10px] pb-[40px] max-w-[90px]">
      <div className="flex flex-col gap-[10px]">
        {sidebarData.map((i) => (
          <div
            key={i.id}
            className={`cursor-pointer flex text-[#fff] items-end gap-[20px] px-[25px] py-[20px]`}
          >
            <img
              onClick={() => handleClick}
              src={i.img}
              alt=""
              width={30}
            />
            <p className="text-[18px]">{i.mob}</p>
          </div>
        ))}
      </div>
      <div className="flex text-[#fff] items-end gap-[20px]">
      <img
        className="cursor-pointer"
        src="/icons/exit.svg"
        alt=""
        width={30}
      />
      <p className="text-[18px]">Exit</p>
      </div>
    </div>
  );
};
