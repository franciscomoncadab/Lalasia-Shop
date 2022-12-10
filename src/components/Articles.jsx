import React from "react";
import Titles from "./Titles";
import bigarticle from "../assets/images/bigarticle.png";
import { articles } from "../constants/articles";

function Articles() {
  return (
    <div className="xl:grid ">
      <Titles
        style="col"
        firstTitle="Articles"
        secondTitle="The best furniture comes from Lalasia"
        p="Pellentesque etiam blandit in tincidunt at donec."
      />
      <div className="relative mt-[30px]">
        <img src={bigarticle} alt="Image1" className="z-0 object-center" />
        <div className="absolute bottom-[10%] z-10 ml-[14px]">
          <p className="font-exodo font-bold text-[12px] text-screen-color opacity-70">
            Tips and Trick
          </p>
          <h6 className="font-exodo font-bold text-[16px] text-screen-color my-[6px]">
            Create Cozy Dinning Room Vibes
          </h6>
          <p className="font-exodo font-medium text-[14px] text-screen-color opacity-70">
            {`Decorating with neutrals brings balance to the dining room. With
            eclectic decoration on the sides, Caruso Dining Table and Cyrillo
            Dining Chairs elevate the tonal base of the room. The modern
            furniture set gives personality to any space in all types of
            architecture. The wide volume enables everyone to sit back and
            relax, be it in the dining room, conference, or office.`.substring(
              0,
              41
            )}
            ...
          </p>
          <button className="font-exodo font-bold text-[12px] text-screen-color mt-[12px]">
            Read More
          </button>
        </div>
      </div>
      <div>
        {articles.map((elem, i) => {
          return (
            <div
              key={i}
              className="flex flex-row gap-x-[14px] gap-y-[20px] mt-[20px]"
            >
              <img
                src={elem.images}
                alt={elem.images}
                className="w-[110px] h-[110px] xl:w-auto xl:h-auto"
              />
              <div>
                <p className="font-exodo font-bold text-[12px] text-paragraph-color mb-[4px]">
                  {elem.name}
                </p>
                <h6 className="font-exodo font-bold text-[16px] text-title-color">
                  {elem.title}
                </h6>
                <div className="flex flex-row gap-x-[6px] mt-[16px] items-center">
                  <img src={elem.userImg} alt={elem.userImg} />
                  <p className="font-exodo font-bold text-[12px] text-title-color">
                    {elem.userName}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Articles;
