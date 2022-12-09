import React from "react";
import img1 from "../assets/images/img1.png";
import { ReactComponent as CircularLogo } from "../assets/icons/starcircular.svg";
import { ReactComponent as Stars } from "../assets/icons/stars.svg";
import { ReactComponent as Search } from "../assets/icons/search-normal.svg";

function Discover() {
  return (
    <div className="mt-[50px] lg:mt:[100px]">
      <div className="flex flex-col justify-center my-0 mx-auto lg:px-[358px]">
        <div className="relative">
          <CircularLogo className="absolute top-[24.88px] left-[-3%] w-[60.43px] h-[60.43px]" />
          <h3 className="font-bold font-exodo text-[26px] text-center text-title-color">
            Discover Furniture With <br /> High Quality Wood
          </h3>
          <Stars className="absolute right-[10%] top-[37px] w-[24px] h-[24px]" />
        </div>
        <div className="mt-[20px]">
          <p className="text-paragraph-color text-center text-[14px] font-medium font-exodo">
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
            dignissim placerat nisi, adipiscing mauris non. Purus parturient
            viverra nunc, tortor sit laoreet. Quam tincidunt aliquam adipiscing
            tempor.
          </p>
        </div>
      </div>
      <div className="lg:relative lg:z-0 lg:mt-[62px]">
        <div className="relative lg:absolute lg:z-10 lg:mt-0 lg:top-[-8%] right-[18%] z-0 mt-[30px] mx-auto">
          <Search className="absolute z-10 top-[15px] left-[15px] lg:top-[26px]" />
          <input
            className="shadow-[0px_4px_30px_-20px_rgba(175,173,181,0.2)] shadow-title-color text-[14px] lg:text-[18px] font-exodo font-medium w-full h-[54px] pl-[50px] lg:h-[84px] lg:w-[810px]"
            placeholder="Search property"
          />
          <button className="absolute bg-primary-color font-exodo font-bold text-[14px] lg:text-[18px] text-screen-color px-[26px] py-[10px] z-10 right-[1.5%] top-[4.5px] lg:px-[46.81px] lg:py-[15px] lg:top-[16%] lg:right-[1.7%]">
            Search
          </button>
        </div>
        <div className="mt-[30px] lg:z-0">
          <img src={img1} alt="img1" />
        </div>
      </div>
    </div>
  );
}

export default Discover;
