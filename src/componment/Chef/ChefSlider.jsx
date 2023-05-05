import React from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ChefSlider = ({ chifslider }) => {
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

  return (
    <div className="w-full my-4">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="mySwiper"
      >
        {chifslider.map((chef, index) => (
          <SwiperSlide key={index}>
            <div className="flex bg-gradient-to-r from-purple-500 to-amber-9000 w-full h-96">
              <div className="w-3/5">
                <LazyLoadImage
                  src={chef.slider_img}
                  alt={chef.slider_title}
                  className="object-cover w-full h-full"
                  style={{ height: "600px", width: "800px" }}
                  effect="blur"
                />
              </div>
              <div className="w-2/5 flex text-center flex-col font-bold justify-center items-center">
                <h2 className="md:text-4xl text-xl mx-3 mb-2 text-center ">
                  {chef.slider_title}
                </h2>
                <p className="md:text-2xl text-sm mb-2 mx-5 text-stone-800">
                  {chef.slider_desc}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ChefSlider;