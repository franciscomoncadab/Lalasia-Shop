import React from "react";
import Titles from "./Titles";
import imagen1 from "../assets/images/imagen1.png";
import imagen2 from "../assets/images/imagen2.png";

function Crafter() {
  return (
    <div className="lg:grid lg:grid-flow-col lg:items-start">
      <div className="lg:w-[580px]">
        <Titles
          mar="[50px]"
          colm="col"
          firstTitle="Our Product"
          secondTitle="Crafted by talented and high quality material"
          p="Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient."
        />
          <button className="bg-primary-color font-exodo font-bold text-[14px] xl:text-[18px] lg:w-[170px] mt-[30px] lg:mt-[90px] text-screen-color w-full h-[48px]">
               Learn More
          </button>
      </div>
      <div className="mt-[30px] lg:mt-[110px] xl:mt-[230px] lg:col-start-2 lg:col-span-2 lg:h-[99px]">
          <div className="flex flex-row gap-x-[20px] w-full lg:gap-x-[63px] lg:justify-end">
               <div>
                    <p className="font-exodo font-bold text-[22px] lg:text-[44px] text-title-color">20 +</p>
                    <p className="font-exodo font-medium text-[14px] lg:text-[18px] text-paragraph-color">Years Experience</p>
               </div>
               <div>
                    <p className="font-exodo font-bold text-[22px] lg:text-[44px] text-title-color">483</p>
                    <p className="font-exodo font-medium text-[14px] lg:text-[18px] text-paragraph-color">Happy Client</p>
               </div>
               <div>
                    <p className="font-exodo font-bold text-[22px] lg:text-[44px] text-title-color">150+</p>
                    <p className="font-exodo font-medium text-[14px] lg:text-[18px] text-paragraph-color">Project Finished</p>
               </div>
          </div>
      </div>
      <div className="mt-[50px] lg:lg:col-span-1 xl:mt-[50px]">
          <img src={imagen1} alt="img1" className="h-[200px] lg:h-auto lg:mr-[50px] object-cover" />
      </div>
      <div className="mt-[20px] lg:mt-[-197px] lg:col-start-2 lg:col-span-2">
          <img src={imagen2} alt="img2" className="w-full h-[200px] lg:h-auto object-cover"/>

      </div>
    </div>
  );
}

export default Crafter;
