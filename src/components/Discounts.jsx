import React from "react";
import { ReactComponent as Arrow} from "../assets/icons/arrow-right.svg";

function Discount() {
  return (
    <div className="mt-[100px] xl:mt-[167px] xl:flex xl:justify-between xl:items-end">
      <h3 className="font-exodo font-bold text-title-color text-[24px] xl:text-[44px]">Join with me for get special discount</h3>
      <button className="bg-primary-color flex flex-row gap-x-[10px] items-center py-[15px] px-[34.5px] mt-[16px]">
          <p className="text-screen-color font-exodo font-bold text-[14px] xl:text-[18px]">Learn More</p>
          <Arrow />
      </button>
    </div>
  );
}

export default Discount;
