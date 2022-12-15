import React from "react";
import "../assets/scss/main.scss";

function Titles(props) {
  return (
    <div className={`titleContainer ${props.colm === "col" ? "flex-col" : "flex-row space-x-[305px] items-center"}`}>
      <div className="mb-[16px] xl:mb-0">
        <h6 className="titleContainer__yellowTitle">{props.firstTitle}</h6>
        <h3 className={`titleContainer__bigTitle ${props.colm === "row" ? "w-[427px]" : null}`}>{props.secondTitle}</h3>
      </div>
      <p className={`titleContainer__paragraph mt-${props.mar} ${props.colm === "row" ? "w-[505px] justify-start xl:mt-[35px] " : null}`}>{props.p}</p>
    </div>
  );
}

export default Titles;