import React from "react";
import { articles } from "../constants/articles";

function ImagesArticle() {
  return (
    <div>
      {articles.map((elem, i) => {
        return (
          <div
            key={i}
            className="flex flex-row gap-x-[14px] gap-y-[20px] mt-[20px] xl:items-center xl:space-y-[10px] xl:gap-x-[25px]"
          >
            <img
              src={elem.images}
              alt={elem.images}
              className="w-[110px] h-[110px] xl:w-auto xl:h-auto xl:mt-[6px]"
            />
            <div className="">
              <p className="font-exodo font-bold text-[12px] xl:text-[18px] text-paragraph-color mb-[4px] xl:leading-[32.2px]">
                {elem.name}
              </p>
              <h6 className="font-exodo font-bold text-[16px] xl:text-[24px] text-title-color">
                {elem.title}
              </h6>
              <p className="hidden font-exodo font-medium text-[18px] xl:flex text-paragraph-color mt-[14px] ">
                {`Pellentesque etiam blandit in tincidunt at donec. Eget ipsum .`.substring(0, 29)} ...
              </p>
              <div className="xl:flex xl:gap-x-[24px] xl:items-center mt-[16px] ">
                <div className="flex flex-row gap-x-[6px] items-center">
                  <img src={elem.userImg} alt={elem.userImg} />
                  <p className="font-exodo font-bold text-[12px] xl:text-[14px] text-title-color">
                    {elem.userName}
                  </p>
                </div>
                <p className="hidden font-exodo font-medium text-[14px] text-paragraph-color lg:flex lg:items-center">Friday, 1 April 2022</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ImagesArticle;
