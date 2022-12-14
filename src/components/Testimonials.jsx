import React from "react";
import Titles from "./Titles";
import { cardsTest } from "../constants/testimonialsCard";
import { ReactComponent as Quote } from "../assets/icons/quote.svg";
import { ReactComponent as Star } from "../assets/icons/star.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";

function Testimonials() {
  return (
    <div>
      <div className="xl:w-[656px] xl:mx-auto xl:text-center">
        <Titles
          mar="[30px]"
          colm="col"
          firstTitle="Testimonials"
          secondTitle="What our customer say"
          p="Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient."
        />
      </div>
      <div className="mt-[30px] xl:mt-[50px] shadow-[0px_4px_20px_-20px_rgba(175,173,181,0.1)] shadow-title-color">
        <Swiper 
          loop={true}
          spaceBetween={window.innerWidth < 1024 ? 0 : 30}
          slidesPerView={window.innerWidth < 1024 ? 1 : 2.3}
          modules={[Pagination, Navigation]}
          >
          {cardsTest.map((elem, i) => {
            return (
              <SwiperSlide key={i} className="px-[16px]">
                <Quote className="w-[32px] h-[32px] my-[18px] xl:my-[26px] xl:w-[40px] xl:h-[40px]" />
                <p className="font-exodo font-medium text-[14px] xl:text-[18px] xl:leading-[32.4px] text-paragraph-color mb-[18px]">
                  Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
                  dignissim placerat nisi, adipiscing mauris non.
                </p>
                <div className="flex justify-between mb-[16px]">
                  <div className="flex flex-row items-center gap-x-[14px]">
                    <img
                      src={elem.image}
                      alt={elem.image}
                      className="w-[28px] h-[28px] xl:w-auto xl:h-auto"
                    />
                    <h6 className="font-exodo font-bold text-[14px] xl:text-[20px] text-title-color">
                      {elem.name}
                    </h6>
                  </div>
                  <div className="flex flex-row items-center gap-x-[12px]">
                    <Star className="w-[20px] h-[19.02px]" />
                    <h6 className="font-exodo font-bold text-[14px] xl:text-[18px] text-title-color">
                      {elem.avg}
                    </h6>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonials;
