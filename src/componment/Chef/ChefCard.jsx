import React, { useState } from "react";
import { FaHeart, FaArrowRight, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ChefCard = ({ chifslider = [] }) => {
  const [showAll, setShowAll] = useState(false);

  // প্রথম ৮ জন দেখাবে, Show More করলে সবাই দেখাবে
  const visibleChefs = showAll
    ? chifslider
    : chifslider.slice(0, 8);

  return (
    <section className="bg-[#F5F7F2] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-10">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-10 bg-[#C2412D]" />

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#14532D]">
              Our Chefs
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-[#17201A] sm:text-4xl lg:text-5xl">
            Best Chefs of Bangladesh
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-[#17201A]/60 sm:text-base">
            Discover talented chefs, explore their recipes, and experience
            the stories behind their cooking.
          </p>
        </div>

        {/* Chef Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {visibleChefs.map((chef) => (
            <article
              key={chef.id}
              className="group overflow-hidden rounded-2xl border border-[#14532D]/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              {/* Image Area */}
              <div className="relative h-[280px] overflow-hidden bg-[#E9EEE7] sm:h-[290px]">

                {/* Soft Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#F5F7F2] via-[#E9EEE7] to-[#DDE5DC]" />

                {/* Chef Image */}
                <div className="relative z-10 flex h-full w-full items-center justify-center p-4">
                  <LazyLoadImage
                    src={chef.chef_picture}
                    alt={chef.chef_name}
                    effect="blur"
                    className="h-full w-full object-contain object-center transition-transform duration-700 group-hover:scale-[1.04]"
                    wrapperClassName="flex h-full w-full items-center justify-center"
                  />
                </div>

                {/* Bottom Overlay */}
                <div className="absolute inset-x-0 bottom-0 z-20 h-24 bg-gradient-to-t from-[#17201A]/55 to-transparent" />

                {/* Likes */}
                <div className="absolute bottom-3 right-3 z-30 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-[#17201A] shadow-sm backdrop-blur-sm">
                  <FaHeart className="text-[#C2412D]" />
                  <span>{chef.likes}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">

                {/* Chef Name */}
                <h3 className="truncate text-xl font-bold tracking-tight text-[#17201A]">
                  {chef.chef_name}
                </h3>

                {/* Stats */}
                <div className="mt-4 grid grid-cols-2 divide-x divide-[#14532D]/10 border-y border-[#14532D]/10 py-3">

                  {/* Experience */}
                  <div className="pr-3">
                    <p className="text-lg font-bold text-[#14532D]">
                      {chef.years_of_experience}
                    </p>

                    <p className="mt-1 text-[10px] uppercase tracking-wide text-[#17201A]/50">
                      Years Experience
                    </p>
                  </div>

                  {/* Recipes */}
                  <div className="pl-3">
                    <p className="text-lg font-bold text-[#14532D]">
                      {chef.number_of_recipes}
                    </p>

                    <p className="mt-1 text-[10px] uppercase tracking-wide text-[#17201A]/50">
                      Recipes
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  to={`/recipes/${chef.id}`}
                  className="mt-4 flex items-center justify-between rounded-xl bg-[#14532D] px-4 py-3 text-xs font-semibold text-white transition-all duration-200 hover:bg-[#0f4225]"
                >
                  <span>View Recipes</span>

                  <FaArrowRight className="text-[10px] transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Show More / Show Less */}
        {chifslider.length > 8 && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="group flex items-center gap-3 rounded-xl border border-[#14532D]/20 bg-white px-6 py-3 text-sm font-semibold text-[#14532D] shadow-sm transition-all duration-300 hover:border-[#14532D] hover:bg-[#14532D] hover:text-white hover:shadow-md"
            >
              <span>
                {showAll ? "Show Less" : "Show More Chefs"}
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

export default ChefCard;