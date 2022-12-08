import React from "react";
import Titles from "./Titles";
import { cards } from "../constants/cards";

function Benefits() {
  return (
    <div>
      <div>
        <Titles
          firstTitle="Benefits"
          secondTitle="Benefits when using our services"
          p="Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient."
        />
      </div>
      <div className="flex flex-col gap-y-[20px] mt-[30px]">
          {cards.map((elem, i) => {
               return (
                    <div key={i} className="shadow-title-color border-none shadow-[0px_4px_20px_-20px_rgba(175,173,181,0.1)]">
                         <div className="mt-[16px] mb-[14px] ml-[16px]">
                         <img 
                              src={elem.svg}
                              alt={elem.svg}
                         />
                         </div>
                         <h6 className="font-exodo font-bold text-[16px] mt-[14px] text-title-color mx-[16px]">{elem.title}</h6>
                         <p className="font-exodo font-medium text-[14px] text-paragraph-color mb-[18px] mx-[16px] text-left" >Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.</p>
                    </div>
               )
          })}
      </div>
    </div>
  );
}

export default Benefits;
