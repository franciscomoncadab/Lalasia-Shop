import React from "react";
import Titles from "./Titles";
import imagen1 from "../assets/images/imagen1.png";
import imagen2 from "../assets/images/imagen2.png";

function Crafter() {
  return (
    <div className="lg:grid lg:grid-cols-2 ">
      <div className="">
        <Titles
          style="col"
          firstTitle="Our Product"
          secondTitle="Crafted by talented and high quality material"
          p="Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient."
        />
          <button className="bg-primary-color font-exodo font-bold text-[14px] lg:w-[170px] mt-[30px] text-screen-color w-full h-[48px]">
               Learn More
          </button>
      </div>
      <div className="mt-[30px] lg:mt-[110px] xl:mt-[208px]">
          <div className="flex flex-row gap-x-[20px] w-full lg:items-center lg:gap-x-[50px] lg:justify-center">
               <div>
                    <p className="font-exodo font-bold text-[22px] lg:text-[44px] text-title-color">20+</p>
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
      <div className="flex flex-col gap-y-[20px] mt-[50px] lg:flex-row lg:gap-x-[50px] lg:mt-0 lg:items-end lg:z-0">
          <img src={imagen1} alt="img1" class="lg:h-[260px]" />
          <img src={imagen2} alt="img2" className="h-[200px] lg:h-auto"/>
      </div>
    </div>
  );
}

export default Crafter;
