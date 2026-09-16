import React, { useMemo } from "react";
import { FaArrowRight, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const CulinaryStyles = ({ chifslider = [] }) => {
  const styles = useMemo(() => {
    return chifslider
      .filter((chef) => chef.chef_class_title && chef.slider_img)
      .slice(0, 6);
  }, [chifslider]);

  if (!styles.length) {
    return null;
  }

  return (
    <section className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">

        {/* =========================
            SECTION HEADER
        ========================== */}
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <div className="mb-2 flex items-center gap-3">
              <span className="h-px w-8 bg-[#C2412D]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#14532D]">
                Explore
              </span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-[#17201A] sm:text-4xl">
              Culinary Styles
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-[#17201A]/55">
              Discover different cuisines and cooking styles from our talented
              chefs.
            </p>
          </div>

          {/* Desktop link */}
          <Link
            to="/"
            className="hidden items-center gap-2 text-xs font-semibold text-[#14532D] transition-colors duration-200 hover:text-[#C2412D] sm:flex"
          >
            View All Styles
            <FaArrowRight className="text-[10px]" />
          </Link>
        </div>

        {/* =========================
            CULINARY STYLE CARDS
        ========================== */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {styles.map((chef) => (
            <Link
              key={chef.id}
              to={`/recipes/${chef.id}`}
              className="group overflow-hidden rounded-2xl border border-[#14532D]/10 bg-[#F5F7F2] transition-all duration-300 hover:-translate-y-1 hover:border-[#14532D]/20 hover:bg-white hover:shadow-md"
            >
              {/* =========================
                  FOOD IMAGE
              ========================== */}
              <div className="aspect-[4/3] overflow-hidden bg-[#E9EEE7]">
                <img
                  src={chef.slider_img}
                  alt={chef.chef_class_title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              {/* =========================
                  CARD CONTENT
              ========================== */}
              <div className="flex min-h-[94px] flex-col justify-between p-3.5">
                <div>
                  <h3 className="line-clamp-2 text-sm font-bold leading-5 text-[#17201A]">
                    {chef.chef_class_title}
                  </h3>

                  <p className="mt-1.5 text-[10px] font-medium text-[#17201A]/45">
                    {chef.number_of_recipes} Recipes
                  </p>
                </div>

                {/* Bottom row */}
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-[#14532D]">
                    Explore
                  </span>

                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#14532D] text-white transition-all duration-300 group-hover:bg-[#C2412D]">
                    <FaChevronRight className="text-[8px]" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* =========================
            MOBILE LINK
        ========================== */}
        <Link
          to="/"
          className="mt-6 flex items-center justify-center gap-2 text-xs font-semibold text-[#14532D] transition-colors hover:text-[#C2412D] sm:hidden"
        >
          View All Styles
          <FaArrowRight className="text-[10px]" />
        </Link>
      </div>
    </section>
  );
};

export default CulinaryStyles;