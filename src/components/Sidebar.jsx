import { sidebarData } from "../constants/constants"


export const Sidebar = () => {
  return (
    <div className="bg-[#202028] fixed left-0  flex flex-col justify-between h-[88vh] px-[25px] py-[30px] max-w-[90px]">
        <div className="flex flex-col gap-[30px]">
            {
                sidebarData.map((i) => (
                    <img className="cursor-pointer" key={i.id} src={i.img} alt="" width={30} />
                ))
            }
        </div>
        <img className="cursor-pointer" src='/icons/exit.svg' alt="" width={30} />
    </div>
  )
}
