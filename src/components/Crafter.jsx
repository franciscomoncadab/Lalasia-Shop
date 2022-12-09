import React from "react";
import Titles from "./Titles";
import imagen1 from "../assets/images/imagen1.png";
import imagen2 from "../assets/images/imagen2.png";

function Crafter() {
  return (
    <div>
      <div>
        <Titles
          firstTitle="Our Product"
          secondTitle="Crafted by talented and high quality material"
          p="Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient."
        />
      </div>
      <div className="mt-[30px]">
          <button className="bg-primary-color font-exodo font-bold text-[14px] text-screen-color w-full h-[48px]">
               Learn More
          </button>
          <div className="flex flex-row gap-x-[20px] mt-[30px] w-full">
               <div>
                    <p className="font-exodo font-bold text-[22px] text-title-color">20+</p>
                    <p className="font-exodo font-medium text-[14px] text-paragraph-color">Years Experience</p>
               </div>
               <div>
                    <p className="font-exodo font-bold text-[22px] text-title-color">483</p>
                    <p className="font-exodo font-medium text-[14px] text-paragraph-color">Happy Client</p>
               </div>
               <div>
                    <p className="font-exodo font-bold text-[22px] text-title-color">150+</p>
                    <p className="font-exodo font-medium text-[14px] text-paragraph-color">Project Finished</p>
               </div>
          </div>
      </div>
      <div className="flex flex-col gap-y-[20px] mt-[50px]">
          <img src={imagen1} alt="img1" />
          <img src={imagen2} alt="img2" className="h-[200px]"/>
      </div>
    </div>
  );
}

export default Crafter;
