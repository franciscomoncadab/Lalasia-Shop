import React from "react";
import Titles from "./Titles";
import { cards } from "../constants/cards";

function Benefits() {
  return (
    <div>
      <div>
        <Titles
          style={`${window.innerWidth < 1024 ? "col" : "row"}`}
          firstTitle="Benefits"
          secondTitle="Benefits when using our services"
          p="Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient."
        />
      </div>
      <div className="flex flex-col xl:flex-row xl:gap-x-[29px] xl:gap-y-0 gap-y-[20px] mt-[30px]">
          {cards.map((elem, i) => {
               return (
                    <div key={i} className="shadow-title-color border-none py-[16px] pl-[23px] :pr-[25px] shadow-[0px_4px_20px_-20px_rgba(175,173,181,0.1)]">
                         <div className="mb-[14px]">
                         <img 
                              src={elem.svg}
                              alt={elem.svg}
                              className="xl:w-[62px] xl:h-[62px]"
                         />
                         </div>
                         <h6 className="font-exodo font-bold text-[16px] xl:text-[24px] mt-[14px] text-title-color">{elem.title}</h6>
                         <p className="font-exodo font-medium text-[14px] xl:text-[18px] text-paragraph-color mb-[18px] text-left" >Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.</p>
                    </div>
               )
          })}
      </div>
    </div>
  );
}

export default Benefits;
