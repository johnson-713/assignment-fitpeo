// eslint-disable-next-line react/prop-types
export const Statistics = ({ data }) => {
  return (
    <div className="flex gap-[10px]">
      {
        // eslint-disable-next-line react/prop-types
        data.map((i, ind) => (
          <div
            key={ind}
            className="flex p-[20px] bg-[#202028] rounded-md gap-[20px]"
          >
            <div className="text-[#fff] flex flex-col gap-[10px]">
              <div
                className={`w-[40px] h-[40px] flex items-center justify-center ${
                  ind == 0
                    ? "bg-[#283266]"
                    : ind == 1
                    ? "bg-[#155146]"
                    : ind == 2
                    ? "bg-[#5F3336]"
                    : "bg-[#5C2B4A]"
                } p-[5px] rounded-xl`}
              >
                <img width={30} src={i.img} alt="" />
              </div>
              <p className="text-[14px] whitespace-nowrap">{i.title}</p>
              <p className="text-[20px] font-bold">{i.total}</p>
            </div>
            <div className="flex gap-[10px] items-end">
              <img width={10} className="mb-[5px]" src={`/icons/${ind == 0 || ind == 2 ? 'caret-up.svg' : 'caret-down.svg'}`} alt="" />
              <p
                className={`${
                  ind == 0 || ind == 2 ? "text-[#02DD99]" : "text-[#96413E]"
                } `}
              >
                {i.percent}
              </p>
            </div>
          </div>
        ))
      }
    </div>
  );
};
