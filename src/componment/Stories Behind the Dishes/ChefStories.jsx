import React, { useMemo } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ChefStories = ({ chifslider = [] }) => {
  const stories = useMemo(() => {
    return chifslider
      .filter(
        (chef) =>
          chef.slider_img &&
          chef.slider_title &&
          chef.slider_desc &&
          chef.chef_name
      )
      .slice(0, 3,);
  }, [chifslider]);

  if (!stories.length) {
    return null;
  }

  return (
    <section className="bg-[#F5F7F2] px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <div className="mb-2 flex items-center gap-3">
              <span className="h-px w-8 bg-[#C2412D]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#14532D]">
                From the Kitchen
              </span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-[#17201A] sm:text-4xl">
              Stories Behind the Dishes
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-[#17201A]/55">
              Discover the people, passion, and stories behind the food.
            </p>
          </div>

          <Link
            to="/blogs"
            className="hidden items-center gap-2 text-xs font-semibold text-[#14532D] transition-colors hover:text-[#C2412D] sm:flex"
          >
            Read Stories
            <FaArrowRight className="text-[10px]" />
          </Link>
        </div>

        {/* Stories */}
        <div className="grid gap-5 md:grid-cols-3">
          {stories.map((story, index) => (
            <article
              key={story.id}
              className="group overflow-hidden rounded-2xl border border-[#14532D]/10 bg-white"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#E9EEE7]">
                <img
                  src={story.slider_img}
                  alt={story.slider_title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Number */}
                <span className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-xs font-bold text-[#14532D] shadow-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2">
                  <div className="h-7 w-7 overflow-hidden rounded-full bg-[#E9EEE7]">
                    <img
                      src={story.chef_picture}
                      alt={story.chef_name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <span className="text-xs font-semibold text-[#17201A]/55">
                    {story.chef_name}
                  </span>
                </div>

                <h3 className="mt-4 line-clamp-2 text-xl font-bold leading-6 text-[#17201A]">
                  {story.slider_title}
                </h3>

                <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#17201A]/55">
                  {story.slider_desc}
                </p>

                <Link
                  to={`/recipes/${story.id}`}
                  className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-[#14532D] transition-colors hover:text-[#C2412D]"
                >
                  Explore Chef
                  <FaArrowRight className="text-[9px] transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile link */}
        <Link
          to="/blogs"
          className="mt-6 flex items-center justify-center gap-2 text-xs font-semibold text-[#14532D] sm:hidden"
        >
          Read All Stories
          <FaArrowRight className="text-[10px]" />
        </Link>
      </div>
    </section>
  );
};

export default ChefStories;