/* eslint-disable react/prop-types */
import { Rating } from "@mui/material";


export const Feedback = ({ img, name, star, feedback }) => {
  return (
    <div className="flex flex-col text-[#fff] border-b-[#666666] border-b gap-[10px] py-[20px]">
      <div className="flex gap-[10px]">
        <img
          className="w-[20px] h-[20px] rounded-full cursor-pointer"
          width={40}
          src={img}
          alt=""
        />
        <p>{name}</p>
      </div>
      {star == 4 ? (
          <Rating value={4} readOnly />
        ) : (
          <Rating value={5} readOnly />
        )}
        <p className="text-[14px]">{feedback}</p>
    </div>
  );
};
