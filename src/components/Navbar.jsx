import { navData } from "../constants/constants";

export const Navbar = () => {
  return (
    <div className="bg-[#202028] py-[20px] px-[15px] flex justify-between">
      <div className="flex gap-[30px]">
        <img
          src="/icons/logo.svg"
          alt=""
          width={50}
          className="cursor-pointer"
        />
        <div className="bg-[#2A2B30] flex gap-2 px-[10px] py-[2px] border-[#35353B] border rounded-lg">
          <img width={20} src="/icons/search.svg" alt="" />
          <input
            type="text"
            placeholder="Search"
            className="bg-[#2A2B30] text-[#fff] outline-none"
          />
        </div>
      </div>
      <div className="flex gap-[40px]">
        <div className="flex items-center gap-[20px]">
          {navData?.map((i, ind) => (
            <div
              key={i.id}
              className={`${
                ind != 3 ? "bg-[#44454A]" : "bg-white"
              } cursor-pointer flex items-center justify-center w-[40px] h-[40px] p-[10px] rounded-[35px]`}
            >
              <img width={25} height={25} src={i.img} alt="" />
            </div>
          ))}
        </div>
        <img
          className="w-[45px] h-[45px] rounded-[23px] cursor-pointer"
          width={40}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdmX__TMVdiSC90cJN-7TOdZBJNwxsip97wQ&s"
          alt=""
        />
      </div>
    </div>
  );
};
