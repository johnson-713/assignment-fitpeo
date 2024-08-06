/* eslint-disable react/no-unescaped-entities */
import { feedbackData, menus, statsData } from "../constants/constants";
import { ActivityChart } from "./ActivityChart";
import AppTable from "./AppTable";
import { Feedback } from "./Feedback";
import { ProfitProgress } from "./ProfitProgress";
import { Statistics } from "./Statistics";

export const Dashboard = () => {
  return (
    <div className="h-[100%] overflow-y-auto overflow-x-hidden">
      <p className="text-[#fff] text-[20px] font-bold mb-[30px]">Dashboard</p>
      <div className="flex flex-col md:flex-row flex-1 gap-[30px] mb-[30px]">
        <div className="flex-[0.6]">
          <Statistics data={statsData} />
        </div>
        <div className="flex-[0.4]">
          <ProfitProgress />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-[30px] flex-1 mb-[30px]">
        <div className="bg-[#1F2029] flex-[0.6] md:min-w-[770px] p-[20px] rounded-xl">
          <div className="flex justify-between">
            <p className="text-[#fff] font-bold text-[20px] mb-[20px]">
              Activity
            </p>
            <select className="bg-[#4C4E52] text-[#fff] h-[30px] px-[10px] py-[5px] rounded-full">
              <option>Weekly</option>
            </select>
          </div>
          <ActivityChart />
        </div>
        <div className="bg-[#1F2029] flex flex-col gap-[20px] flex-[0.4] p-[20px] rounded-xl">
          {menus.map((i, ind) => (
            <div key={ind} className="flex justify-between">
              <div className="flex items-center gap-[20px] text-[#fff]">
                <div
                  className={`${
                    ind == 0
                      ? "bg-[#5E313C]"
                      : ind == 1
                      ? "bg-[#2A3066]"
                      : "bg-[#214B61]"
                  } rounded-full p-[10px]`}
                >
                  <img width={40} src={i.img} alt="" />
                </div>
                <p>{i.title}</p>
              </div>
              <img
                width={20}
                className="cursor-pointer"
                src="/icons/chevron.svg"
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-[30px] flex-1">
        <div className="bg-[#1F2029] flex-[0.6] p-[20px] rounded-xl">
          <p className="text-[#fff] font-bold text-[20px] mb-[20px]">
            Recent Orders
          </p>
          <AppTable />
        </div>
        <div className="bg-[#1F2029] flex-[0.4] py-[20px] pl-[20px] rounded-xl">
          <p className="text-[#fff] font-bold text-[20px] mb-[10px]">
            Customer's Feedback
          </p>
          <div className="max-h-[450px] feedback-container overflow-y-auto">
            {feedbackData.map((i, ind) => (
              <Feedback
                key={ind}
                img={i.img}
                name={i.name}
                star={i.star}
                feedback={i.feedback}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
