import React from "react";

function Titles(props) {
  return (
    <div className="mt-[100px]">
      <div className="mb-[16px]">
        <h6 className="font-exodo font-bold text-secondary-color text-[14px]">{props.firstTitle}</h6>
        <h3 className="font-exodo font-bold text-title-color text-[24px]">{props.secondTitle}</h3>
      </div>
      <p className="font-exodo font-medium text-paragraph-color text-[14px] text-left">{props.p}</p>
    </div>
  );
}

export default Titles;
