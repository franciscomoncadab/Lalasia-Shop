import React from "react";
import { ReactComponent as Arrow} from "../assets/icons/arrow-right.svg";

function Discount() {
  return (
    <div className="mt-[100px]">
      <h3 className="font-exodo font-bold text-title-color text-[24px]">Join with me for get special discount</h3>
      <button className="bg-primary-color flex flex-row gap-x-[10px] items-center py-[15px] px-[34.5px] mt-[16px]">
          <p className="text-screen-color font-exodo font-bold text-[14px]">Learn More</p>
          <Arrow />
      </button>
    </div>
  );
}

export default Discount;
