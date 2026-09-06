import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ChefDoing = ({ chifslider = [] }) => {
  const [showAll, setShowAll] = useState(false);

  // প্রথমে ৪ জন দেখাবে
  // Show All চাপলে সব chef দেখাবে
  const visibleChefs = showAll
    ? chifslider
    : chifslider.slice(0, 4);

  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-10 text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#C2412D]" />

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#14532D]">
              Meet the Community
            </span>

            <span className="h-px w-8 bg-[#C2412D]" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-[#17201A] sm:text-4xl">
            Chefs Doing What They Love
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#17201A]/60 sm:text-base">
            Passionate chefs bringing their experience, creativity, and
            favorite recipes to the table.
          </p>
        </div>

        {/* Chef List */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {visibleChefs.map((chef) => (
            <article
              key={chef.id}
              className="group rounded-2xl border border-[#14532D]/10 bg-[#F5F7F2] p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
            >
              {/* Chef Image */}
              <div className="flex justify-center">
                <div className="relative">

                  <LazyLoadImage
                    src={chef.chef_picture}
                    alt={chef.chef_name}
                    effect="blur"
                    className="h-20 w-20 rounded-full object-cover ring-4 ring-white shadow-md transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Small Accent */}
                  <span className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full border-4 border-[#F5F7F2] bg-[#C2412D]" />
                </div>
              </div>

              {/* Chef Name */}
              <h3 className="mt-5 truncate text-center text-base font-bold text-[#17201A]">
                {chef.chef_name}
              </h3>

              {/* Experience */}
              <div className="mt-4 text-center">
                <p className="text-lg font-bold text-[#14532D]">
                  {chef.years_of_experience}
                </p>

                <p className="text-[11px] font-medium uppercase tracking-wide text-[#17201A]/50">
                  Years Experience
                </p>
              </div>

              {/* Recipes */}
              <div className="mt-4 border-t border-[#14532D]/10 pt-4 text-center">
                <p className="text-lg font-bold text-[#14532D]">
                  {chef.number_of_recipes}
                </p>

                <p className="text-[11px] font-medium uppercase tracking-wide text-[#17201A]/50">
                  Recipes
                </p>
              </div>

              {/* Likes */}
              <div className="mt-4 flex items-center justify-center gap-1.5 text-sm font-semibold text-[#17201A]/70">
                <AiOutlineHeart className="text-lg text-[#C2412D]" />

                <span>{chef.likes}</span>

                <span className="font-normal text-[#17201A]/40">
                  likes
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Show All Button */}
        {chifslider.length > 4 && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="group flex items-center gap-3 rounded-xl border border-[#14532D]/20 bg-white px-6 py-3 text-sm font-semibold text-[#14532D] shadow-sm transition-all duration-300 hover:border-[#14532D] hover:bg-[#14532D] hover:text-white hover:shadow-md"
            >
              <span>
                {showAll ? "Show Less" : "Show All Chefs"}
              </span>

              <FaChevronDown
                className={`text-xs transition-transform duration-300 ${
                  showAll ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ChefDoing;