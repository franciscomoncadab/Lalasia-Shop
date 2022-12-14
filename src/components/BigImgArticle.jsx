import React from "react";
import bigarticle from "../assets/images/bigarticle.png";
import arrowRight from "../assets/images/arrow-right.png";
import arrowLeft from "../assets/images/arrow-left.png";

function BigImageArticle() {
     const substring = window.innerWidth < 1024 ? 41 : 60
  return (
    <div className="relative mt-[30px] xl:mt-[50px]">
      <img src={bigarticle} alt="Image1" className="z-0 object-center xl:h-[565px]" />
      <div className="absolute bottom-[10%] xl:bottom-[5.5%] z-10 ml-[14px] xl:ml-[26px]">
        <p className="font-exodo font-bold text-[12px] xl:text-[18px] text-screen-color opacity-70">
          Tips and Trick
        </p>
        <h6 className="font-exodo font-bold text-[16px] xl:text-[26px] text-screen-color my-[6px]">
          Create Cozy Dinning Room Vibes
        </h6>
        <p className="font-exodo font-medium text-[14px] xl:text-[18px] text-screen-color opacity-70">
          {`Decorating with neutrals brings balance to the dining room. With
            eclectic decoration on the sides, Caruso Dining Table and Cyrillo
            Dining Chairs elevate the tonal base of the room. The modern
            furniture set gives personality to any space in all types of
            architecture. The wide volume enables everyone to sit back and
            relax, be it in the dining room, conference, or office.`.substring(
            0,
            substring
          )}
          ...
        </p>
        <button className="font-exodo font-bold text-[12px] xl:text-[18px] text-screen-color mt-[12px]">
          Read More
        </button>
        <div className="hidden xl:absolute xl:z-10 xl:flex xl:flex-row right-[-13.5%] bottom-[-58%]">
          <div className="bg-screen-color w-[70px] h-[70px] items-center justify-center flex"><img src={arrowLeft} alt="arrowLeft" /></div>
          <div className="bg-primary-color  w-[70px] h-[70px] items-center justify-center flex"><img src={arrowRight} alt="arrowRight" /></div>
        </div>
      </div>
    </div>
  );
}

export default BigImageArticle;
