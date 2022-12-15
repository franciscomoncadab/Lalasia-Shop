import React from "react";
import Titles from "./Titles";
import { cardsTest } from "../constants/testimonialsCard";
import { ReactComponent as Quote } from "../assets/icons/quote.svg";
import { ReactComponent as Star } from "../assets/icons/star.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";
import "../assets/scss/main.scss";

function Testimonials() {
  return (
    <div className="testimonials">
      <div className="xl:w-[656px] xl:mx-auto xl:text-center">
        <Titles
          mar="[30px]"
          colm="col"
          firstTitle="Testimonials"
          secondTitle="What our customer say"
          p="Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient."
        />
      </div>
      <div className="testimonials__cardContainer">
        <Swiper 
          loop={true}
          spaceBetween={window.innerWidth < 1024 ? 0 : 30}
          slidesPerView={window.innerWidth < 1024 ? 1 : 2.3}
          modules={[Pagination, Navigation]}
          >
          {cardsTest.map((elem, i) => {
            return (
              <SwiperSlide key={i} className="px-[16px]">
                <Quote className="testimonials__cardContainer-logoQuote" />
                <p className="testimonials__cardContainer-paragraph">
                  Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
                  dignissim placerat nisi, adipiscing mauris non.
                </p>
                <div className="flex justify-between mb-[24px]">
                  <div className="flex flex-row items-center gap-x-[14px] xl:mt-2">
                    <img
                      src={elem.image}
                      alt={elem.image}
                      className="w-[28px] h-[28px] xl:w-auto xl:h-auto"
                    />
                    <h6 className="testimonials__cardContainer-elemName">
                      {elem.name}
                    </h6>
                  </div>
                  <div className="flex flex-row items-center gap-x-[12px]">
                    <Star className="w-[20px] h-[19.02px]" />
                    <h6 className="testimonials__cardContainer-elemAvg">
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
