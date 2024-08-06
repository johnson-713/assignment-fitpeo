import { Progress } from "./Progress";


export const ProfitProgress = () => {

  return (
    <div className="text-[#fff] rounded-xl bg-[#202028] p-[20px] flex justify-between">
      <div>
        <p>Net Profit</p>
        <p className="text-[32px] font-bold mt-[10px]">$ 6759.25</p>
        <div className="flex gap-[10px] mt-[10px]">
          <img width={10} src="/icons/caret-up.svg" alt="" />
          <p className="text-[#6BDD51]">3%</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
      <div className="w-[90px] h-[90px]">
        <Progress>
          <div className="text-center">
            <p className="font-bold">70%</p>
            <p className="text-[8px]">Goal Completed</p>
          </div>
        </Progress>
      </div>
      <p className="text-[10px] mt-[5px]">*The values here has been rounded off</p>
      </div>
    </div>
  );
};
