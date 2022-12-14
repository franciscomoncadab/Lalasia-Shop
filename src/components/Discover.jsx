import React from "react";
import img1 from "../assets/images/img1.png";
import { ReactComponent as CircularLogo } from "../assets/icons/starcircular.svg";
import { ReactComponent as Stars } from "../assets/icons/stars.svg";
import { ReactComponent as Search } from "../assets/icons/search-normal.svg";

function Discover() {
  return (
    <div className="mt-[50px] xl:mt-[100px]">
      <div className="flex flex-col justify-center my-0 mx-auto">
        <div className="relative">
          <CircularLogo className="absolute top-[24.88px] left-[-3%] w-[60.43px] h-[60.43px] xl:w-full xl:h-full xl:left-[-38%] xl:top-[50%]" />
          <h3 className="font-bold font-exodo text-[26px] xl:text-[64px] text-center text-title-color leading-[82.2px]">
            Discover Furniture With <br /> High Quality Wood
          </h3>
          <Stars className="absolute right-[10%] top-[37px] xl:right-[23%] xl:top-[50%] w-[24px] h-[24px] xl:w-[51px] xl:h-[51px]" />
        </div>
        <div className="mt-[20px] xl:mt-[30px]">
          <p className="text-paragraph-color text-center text-[14px] xl:text-[18px] xl:px-[247.5px] font-medium font-exodo xl:leading-[32.4px]">
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
            dignissim placerat nisi, adipiscing mauris non. Purus parturient
            viverra nunc, tortor sit laoreet. Quam tincidunt aliquam adipiscing
            tempor.
          </p>
        </div>
      </div>
      <div className="xl:relative xl:z-0 xl:mt-[62px]">
        <div className="relative xl:absolute xl:z-10 xl:mt-0 xl:top-[-8.6%] xl:right-[17.6%] z-0 mt-[30px] mx-auto">
          <Search className="absolute z-10 top-[15px] left-[15px] xl:left-[28px] xl:top-[26px] xl:w-[30px] xl:h-[35px]" />
          <input
            className="shadow-[0px_4px_30px_-20px_rgba(175,173,181,0.2)] shadow-title-color text-[14px] xl:text-[18px] font-exodo font-medium w-full h-[54px] pl-[50px] xl:pl-[76px] xl:h-[84px] xl:w-[810px]"
            placeholder="Search property"
          />
          <button className="absolute bg-primary-color font-exodo font-bold text-[14px] xl:text-[18px] text-screen-color px-[26px] py-[10px] z-10 right-[1.5%] top-[4.5px] xl:px-[54.81px] xl:py-[13.5px] xl:top-[19%] xl:right-[1.7%]">
            Search
          </button>
        </div>
        <div className="mt-[30px] xl:z-0 xl:mt-[90px]">
          <img src={img1} alt="img1" />
        </div>
      </div>
    </div>
  );
}

export default Discover;
