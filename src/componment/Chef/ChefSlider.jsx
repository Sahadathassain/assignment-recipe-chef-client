import React from "react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const ChefSlider = ({ chifslider = [] }) => {
  if (!chifslider.length) {
    return (
      <section className="bg-[#F5F7F2] px-4 py-5 sm:px-6 lg:px-8 lg:py-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex min-h-[420px] items-center justify-center rounded-[28px] bg-[#14532D]">
            <div className="text-center">
              <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-white/20 border-t-white" />
              <p className="mt-4 text-sm text-white/70">
                Discovering our chefs...
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#F5F7F2] px-4 py-5 sm:px-6 lg:px-8 lg:py-8">
      <div className="mx-auto max-w-7xl">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{
            clickable: true,
          }}
          scrollbar={{
            draggable: true,
          }}
          loop={chifslider.length > 1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="chef-hero-swiper overflow-hidden rounded-[24px] sm:rounded-[28px]"
        >
          {chifslider.map((chef, index) => (
            <SwiperSlide key={chef.id}>
              <article className="relative min-h-[520px] overflow-hidden bg-[#14532D] sm:min-h-[570px] lg:min-h-[620px]">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <LazyLoadImage
                    src={chef.slider_img}
                    alt={chef.slider_title || chef.chef_name}
                    effect="blur"
                    className="h-full w-full object-cover"
                    wrapperClassName="h-full w-full"
                  />

                  {/* Main Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#17201A]/95 via-[#17201A]/75 to-[#17201A]/20" />

                  {/* Bottom Overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#17201A]/70 to-transparent" />

                  {/* Subtle Green Tint */}
                  <div className="absolute inset-0 bg-[#14532D]/10 mix-blend-multiply" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex min-h-[520px] items-center sm:min-h-[570px] lg:min-h-[620px]">
                  <div className="w-full max-w-3xl px-6 py-16 sm:px-10 lg:px-16">
                    {/* Eyebrow */}
                    <div className="mb-5 flex items-center gap-3">
                      <span className="h-px w-9 bg-[#C2412D] sm:w-12" />

                      <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/75 sm:text-xs">
                        Featured Chef
                      </span>
                    </div>

                    {/* Title */}
                    <h1 className="max-w-2xl text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                      {chef.slider_title}
                    </h1>

                    {/* Description */}
                    <p className="mt-5 max-w-xl text-sm leading-6 text-white/75 sm:text-base sm:leading-7 lg:text-lg">
                      {chef.slider_desc}
                    </p>

                    {/* Chef Profile */}
                    <div className="mt-8 flex items-center gap-4">
                      <div className="relative">
                        <LazyLoadImage
                          src={chef.chef_picture}
                          alt={chef.chef_name}
                          effect="blur"
                          className="h-14 w-14 rounded-full border-2 border-white/80 object-cover sm:h-16 sm:w-16"
                        />

                        <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-[#17201A] bg-[#C2412D]" />
                      </div>

                      <div>
                        <p className="text-sm font-bold text-white sm:text-base">
                          {chef.chef_name?.trim()}
                        </p>

                        <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-white/60">
                          <span>
                            {chef.years_of_experience} years experience
                          </span>

                          <span className="hidden text-white/30 sm:inline">
                            •
                          </span>

                          <span>
                            {chef.number_of_recipes} recipes
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Specialty */}
                    {chef.chef_class_title && (
                      <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#C2412D]" />

                        <span className="text-xs font-medium text-white/85">
                          {chef.chef_class_title}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Slide Counter */}
                <div className="absolute bottom-7 right-7 z-20 hidden items-center text-xs font-medium text-white/50 sm:flex">
                  <span className="text-lg font-semibold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="mx-2 text-white/30">/</span>

                  <span>
                    {String(chifslider.length).padStart(2, "0")}
                  </span>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Swiper Custom Styling */}
      <style>
        {`
          .chef-hero-swiper .swiper-button-next,
          .chef-hero-swiper .swiper-button-prev {
            width: 42px;
            height: 42px;
            border-radius: 9999px;
            background: rgba(255, 255, 255, 0.12);
            border: 1px solid rgba(255, 255, 255, 0.18);
            backdrop-filter: blur(8px);
          }

          .chef-hero-swiper .swiper-button-next::after,
          .chef-hero-swiper .swiper-button-prev::after {
            font-size: 14px;
            font-weight: 700;
            color: white;
          }

          .chef-hero-swiper .swiper-button-next:hover,
          .chef-hero-swiper .swiper-button-prev:hover {
            background: #C2412D;
            border-color: #C2412D;
          }

          .chef-hero-swiper .swiper-pagination-bullet {
            width: 7px;
            height: 7px;
            background: rgba(255, 255, 255, 0.45);
            opacity: 1;
          }

          .chef-hero-swiper .swiper-pagination-bullet-active {
            width: 24px;
            border-radius: 9999px;
            background: #C2412D;
          }

          .chef-hero-swiper .swiper-scrollbar {
            background: rgba(255, 255, 255, 0.15);
          }

          .chef-hero-swiper .swiper-scrollbar-drag {
            background: #C2412D;
          }

          @media (max-width: 640px) {
            .chef-hero-swiper .swiper-button-next,
            .chef-hero-swiper .swiper-button-prev {
              width: 34px;
              height: 34px;
            }

            .chef-hero-swiper .swiper-button-next {
              right: 12px;
            }

            .chef-hero-swiper .swiper-button-prev {
              left: 12px;
            }

            .chef-hero-swiper .swiper-button-next::after,
            .chef-hero-swiper .swiper-button-prev::after {
              font-size: 11px;
            }
          }
        `}
      </style>
    </section>
  );
};

export default ChefSlider;