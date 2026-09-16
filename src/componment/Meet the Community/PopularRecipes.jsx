import React, { useEffect, useState } from "react";
import { FaArrowRight, FaHeart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const PopularRecipes = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/recipes")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch recipes");
        }

        return res.json();
      })
      .then((data) => {
        setChefs(data);
      })
      .catch((error) => {
        console.error("Recipe loading error:", error);
      });
  }, []);

  // Collect recipes from all chefs
  const recipes = chefs
    .flatMap((chef) =>
      (chef.recipe || []).map((recipe) => ({
        ...recipe,
        chefId: chef.id,
        chefName: chef.chef_name,
      }))
    )
    .slice(0, 6);

  if (!recipes.length) {
    return null;
  }

  return (
    <section className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <div className="mb-2 flex items-center gap-3">
              <span className="h-px w-8 bg-[#C2412D]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#14532D]">
                Discover
              </span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-[#17201A] sm:text-4xl">
              Popular Recipes
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-[#17201A]/55">
              Explore recipes shared by chefs from our community.
            </p>
          </div>

          <Link
            to="/recipes"
            className="hidden items-center gap-2 text-xs font-semibold text-[#14532D] transition-colors hover:text-[#C2412D] sm:flex"
          >
            View All Recipes
            <FaArrowRight className="text-[10px]" />
          </Link>
        </div>

        {/* Recipe Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe) => (
            <article
              key={`${recipe.chefId}-${recipe.id}`}
              className="group overflow-hidden rounded-2xl border border-[#14532D]/10 bg-[#F5F7F2] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#E9EEE7]">
                <img
                  src={recipe.recipe_img}
                  alt={recipe.recipe_name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Rating */}
                <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1.5 text-[10px] font-bold text-[#17201A] shadow-sm">
                  <FaStar className="text-[#C2412D]" />
                  {recipe.rating}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">

                {/* Chef */}
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#14532D]">
                  By {recipe.chefName}
                </p>

                {/* Recipe Name */}
                <h3 className="mt-2 line-clamp-2 text-lg font-bold leading-6 text-[#17201A]">
                  {recipe.recipe_name}
                </h3>

                {/* Bottom */}
                <div className="mt-5 flex items-center justify-between border-t border-[#14532D]/10 pt-4">

                  <div className="flex items-center gap-1.5 text-xs text-[#17201A]/50">
                    <FaHeart className="text-[#C2412D]" />
                    <span>Popular</span>
                  </div>

                  <Link
                    to={`/recipes/${recipe.chefId}`}
                    className="flex items-center gap-2 text-xs font-bold text-[#14532D] transition-colors hover:text-[#C2412D]"
                  >
                    View Recipe
                    <FaArrowRight className="text-[9px] transition-transform group-hover:translate-x-1" />
                  </Link>

                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile */}
        <Link
          to="/recipes"
          className="mt-6 flex items-center justify-center gap-2 text-xs font-semibold text-[#14532D] sm:hidden"
        >
          View All Recipes
          <FaArrowRight className="text-[10px]" />
        </Link>
      </div>
    </section>
  );
};

export default PopularRecipes;