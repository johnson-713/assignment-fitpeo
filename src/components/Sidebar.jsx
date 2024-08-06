import { useState } from "react";
import { sidebarData } from "../constants/constants";

export const Sidebar = () => {
  const [active, setActive] = useState("home");
  return (
    <div className="bg-[#202028] fixed left-0 hidden md:flex flex-col justify-between h-[90vh] pt-[10px] pb-[40px] max-w-[90px]">
      <div className="flex flex-col gap-[10px]">
        {sidebarData.map((i) => (
          <div key={i.id} className={`cursor-pointer px-[25px] py-[10px] ${active == i.active ? 'border-l border-l-blue-500' : '' }`}>
            <img onClick={() => setActive(i.active)}  src={active == i.active ? i.activeImg : i.img} alt="" width={30} />
          </div>
        ))}
      </div>
      <img
        className="cursor-pointer ml-[25px]"
        src="/icons/exit.svg"
        alt=""
        width={30}
      />
    </div>
  );
};
