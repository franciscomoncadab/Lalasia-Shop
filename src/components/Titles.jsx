import React from "react";

function Titles(props) {
  return (
    <div className={`mt-[100px] xl:mt-[180px] flex ${props.colm === "col" ? "flex-col" : "flex-row space-x-[300px] items-center"}`}>
      <div className="mb-[16px] xl:mb-0">
        <h6 className="font-exodo font-bold text-secondary-color text-[14px] xl:text-[18px] xl:mt-[14px]">{props.firstTitle}</h6>
        <h3 className="font-exodo font-bold text-title-color text-[24px] xl:text-[44px] xl:leading-[57.2px]">{props.secondTitle}</h3>
      </div>
      <p className={`font-exodo font-medium text-paragraph-color text-[14px] xl:text-[18px] xl:leading-[32.4px] xl:mt-${props.mar}`}>{props.p}</p>
    </div>
  );
}

export default Titles;
