import React from "react";
import Titles from "./Titles";
import { products } from "../constants/productsSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";

function ProductSlider() {
  return (
    <div>
      <div className="text-center xl:w-[656px] xl:mx-auto">
        <Titles
          mar="[30px]"
          colm="col"
          firstTitle="Product"
          secondTitle="Our Popular Product"
          p="Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient."
        />
      </div>
      <div className="mt-[30px] xl:mt-[40px]">
        <Swiper
          spaceBetween={window.innerWidth < 1024 ? 20 : 10}
          slidesPerView={window.innerWidth < 1024 ? 1.4 : 2.95}
          loop={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {products.map((elem, i) => {
            return (
              <SwiperSlide key={i}>
                <div>
                  <img src={elem.image} alt={`img${i}`} />
                </div>
                <div className="flex flex-col">
                  <p className="font-exodo font-bold text-[12px] xl:text-[18px] mt-[14px] xl:mt-[26px] text-paragraph-color">
                    {elem.placeholder}
                  </p>
                  <h3 className="font-exodo font-bold text-[16px] xl:text-[26px] text-title-color mt-[6px]">
                    {elem.title}
                  </h3>
                  <p className="font-exodo font-medium text-[14px] xl:text-[18px] text-paragraph-color">
                    {elem.description}
                  </p>
                  <div>
                  <h3 className="font-exodo font-bold text-[16px] xl:text-[24px] text-title-color mt-[12px]">
                    {elem.price}
                  </h3>
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

export default ProductSlider;
