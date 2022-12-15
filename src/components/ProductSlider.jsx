import React from "react";
import Titles from "./Titles";
import { products } from "../constants/productsSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";
import "../assets/scss/main.scss";

function ProductSlider() {
  return (
    <div className="productSlider">
      <div className="productSlider__titles">
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
                  <p className="productSlider__placeholder">
                    {elem.placeholder}
                  </p>
                  <h3 className="productSlider__sliderTitle">
                    {elem.title}
                  </h3>
                  <p className="productSlider__description">
                    {elem.description}
                  </p>
                  <div>
                  <h3 className="productSlider__price">
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
