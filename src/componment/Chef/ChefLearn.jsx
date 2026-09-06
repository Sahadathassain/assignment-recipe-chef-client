import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ChefLearn = () => {
  const recipes = [
    {
      title: "Kale Quinoa and Avocado Salad with Lemon Dijon vuna",
      description:
        "A fresh and flavorful combination of wholesome ingredients, prepared with a delicious twist.",
      image:
        "https://radiustheme.com/demo/wordpress/themes/ranna/wp-content/uploads/2019/09/ranna-wordpress-theme-radiustheme.com-4-530x338.jpg",
    },
    {
      title: "Apple Salad with Lemon rice and cooked vegetables",
      description:
        "A simple and inviting recipe idea bringing fresh ingredients and comforting flavors together.",
      image:
        "https://radiustheme.com/demo/wordpress/themes/ranna/wp-content/uploads/2019/09/ranna_wordpress_theme_radiustheme.com_1-530x338.jpg",
    },
  ];

  return (
    <section className="bg-[#F5F7F2] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-10">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-10 bg-[#C2412D]" />

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#14532D]">
              From Our Kitchen
            </span>
          </div>

          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-[#17201A] sm:text-4xl lg:text-5xl">
              Popular Recipes
            </h2>

            <p className="max-w-md text-sm leading-6 text-[#17201A]/60 sm:text-base">
              Explore delicious ideas and discover something new to bring to
              your table.
            </p>
          </div>
        </div>

        {/* Recipe Showcase */}
        <div className="grid gap-6 lg:grid-cols-2">
          {recipes.map((recipe, index) => (
            <article
              key={recipe.title}
              className="group overflow-hidden rounded-2xl border border-[#14532D]/10 bg-white"
            >
              {/* Image */}
              <div className="relative h-[280px] overflow-hidden sm:h-[340px]">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#17201A]/60 via-transparent to-transparent" />

                {/* Number */}
                <span className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-sm font-bold text-[#14532D] shadow-sm">
                  0{index + 1}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7">
                <h3 className="max-w-xl text-2xl font-bold leading-tight tracking-tight text-[#17201A] transition-colors duration-200 group-hover:text-[#14532D] sm:text-3xl">
                  {recipe.title}
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-6 text-[#17201A]/60 sm:text-base">
                  {recipe.description}
                </p>

                {/* CTA */}
                <button
                  type="button"
                  className="mt-6 inline-flex items-center gap-3 text-sm font-bold text-[#14532D] transition-colors duration-200 hover:text-[#C2412D]"
                >
                  <span>Learn More</span>

                  <FaArrowRight className="text-xs transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChefLearn;