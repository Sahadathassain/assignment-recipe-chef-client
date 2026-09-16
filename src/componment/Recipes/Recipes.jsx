import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  FaHeart,
  FaStar,
  FaArrowRight,
  FaClock,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Recipes = () => {
  const recipes = useLoaderData();

  const {
    chef_picture,
    chef_name,
    bio,
    likes,
    number_of_recipes,
    recipe = [],
  } = recipes;

  const handleFavoriteBtn = (event) => {
    toast.success("Added to Favorites");

    event.currentTarget.disabled = true;
    event.currentTarget.classList.add(
      "opacity-60",
      "cursor-not-allowed"
    );
  };

  return (
    <main className="min-h-screen bg-[#F5F7F2] text-[#17201A]">

      {/* ==================================================
          CHEF PROFILE
      ================================================== */}
      <section className="px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-7xl">

          <div className="overflow-hidden rounded-2xl border border-[#14532D]/10 bg-white">

            <div className="grid items-center md:grid-cols-[280px_1fr] lg:grid-cols-[340px_1fr]">

              {/* Chef Image */}
              <div className="h-[300px] bg-[#E9EEE7] sm:h-[340px] md:h-full">
                <LazyLoadImage
                  src={chef_picture}
                  alt={chef_name}
                  effect="blur"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Chef Information */}
              <div className="px-6 py-8 sm:px-9 lg:px-12">

                <div className="mb-3 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#C2412D]" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#14532D]">
                    Chef Profile
                  </span>
                </div>

                <h1 className="text-3xl font-bold tracking-tight text-[#17201A] sm:text-4xl">
                  {chef_name}
                </h1>

                <p className="mt-4 max-w-2xl text-sm leading-6 text-[#17201A]/60 sm:text-base">
                  {bio}
                </p>

                {/* Stats */}
                <div className="mt-7 flex flex-wrap gap-8 border-t border-[#14532D]/10 pt-6">

                  <div>
                    <div className="flex items-center gap-2">
                      <FaHeart className="text-sm text-[#C2412D]" />

                      <span className="text-xl font-bold text-[#14532D]">
                        {likes}
                      </span>
                    </div>

                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#17201A]/45">
                      Likes
                    </p>
                  </div>

                  <div className="border-l border-[#14532D]/10 pl-8">
                    <p className="text-xl font-bold text-[#14532D]">
                      {number_of_recipes}
                    </p>

                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#17201A]/45">
                      Recipes
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* ==================================================
          RECIPES
      ================================================== */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-7xl">

          {/* Section Header */}
          <div className="mb-8">
            <div className="mb-2 flex items-center gap-3">
              <span className="h-px w-8 bg-[#C2412D]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#14532D]">
                From the Kitchen
              </span>
            </div>

            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-[#17201A] sm:text-4xl">
                  Recipes by {chef_name}
                </h2>

                <p className="mt-2 text-sm text-[#17201A]/55">
                  Explore signature recipes and discover something delicious.
                </p>
              </div>

              <span className="text-xs font-semibold text-[#14532D]">
                {recipe.length} Recipes
              </span>
            </div>
          </div>


          {/* Recipe Grid */}
          <div className="grid gap-5 lg:grid-cols-3">

            {recipe.map((item, index) => (
              <article
                key={item.id || index}
                className="group overflow-hidden rounded-2xl border border-[#14532D]/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >

                {/* ==================================================
                    FOOD IMAGE
                ================================================== */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#E9EEE7]">

                  <LazyLoadImage
                    src={item.recipe_img}
                    alt={item.recipe_name}
                    effect="blur"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Recipe Number */}
                  <span className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-[10px] font-bold text-[#14532D] shadow-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Rating */}
                  <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 shadow-sm">
                    <FaStar className="text-[10px] text-[#C2412D]" />

                    <span className="text-[10px] font-bold text-[#17201A]">
                      {item.rating}
                    </span>
                  </div>
                </div>


                {/* ==================================================
                    CONTENT
                ================================================== */}
                <div className="p-5">

                  <h3 className="text-xl font-bold leading-6 text-[#17201A]">
                    {item.recipe_name}
                  </h3>


                  {/* Ingredients */}
                  <div className="mt-6">

                    <div className="flex items-center justify-between">
                      <h4 className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#14532D]">
                        Ingredients
                      </h4>

                      <span className="text-[10px] text-[#17201A]/35">
                        {item.ingredients?.length || 0} items
                      </span>
                    </div>

                    <ul className="mt-3 space-y-2">

                      {(item.ingredients || []).map(
                        (ingredient, ingredientIndex) => (
                          <li
                            key={ingredientIndex}
                            className="flex items-start gap-2 text-sm leading-5 text-[#17201A]/60"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C2412D]" />

                            <span>{ingredient}</span>
                          </li>
                        )
                      )}

                    </ul>
                  </div>


                  {/* Method */}
                  <div className="mt-6 border-t border-[#14532D]/10 pt-6">

                    <div className="flex items-center justify-between">
                      <h4 className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#14532D]">
                        Method
                      </h4>

                      <span className="flex items-center gap-1 text-[10px] text-[#17201A]/40">
                        <FaClock className="text-[#C2412D]" />

                        {item.method?.length || 0} Steps
                      </span>
                    </div>


                    <ol className="mt-3 space-y-3">

                      {(item.method || []).map(
                        (step, stepIndex) => (
                          <li
                            key={stepIndex}
                            className="flex items-start gap-3 text-sm leading-6 text-[#17201A]/60"
                          >

                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F5F7F2] text-[10px] font-bold text-[#14532D]">
                              {stepIndex + 1}
                            </span>

                            <span>{step}</span>

                          </li>
                        )
                      )}

                    </ol>
                  </div>


                  {/* Favorite Button */}
                  <button
                    type="button"
                    onClick={handleFavoriteBtn}
                    className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl border border-[#14532D]/15 px-4 py-3 text-xs font-bold text-[#14532D] transition-all duration-200 hover:border-[#C2412D] hover:bg-[#C2412D] hover:text-white"
                  >
                    <FaHeart className="text-[11px]" />

                    <span>Add to Favorite</span>

                    <FaArrowRight className="ml-1 text-[9px]" />
                  </button>

                </div>
              </article>
            ))}

          </div>


          {/* Empty State */}
          {!recipe.length && (
            <div className="rounded-2xl border border-[#14532D]/10 bg-white px-6 py-12 text-center">
              <p className="text-sm text-[#17201A]/50">
                No recipes available for this chef.
              </p>
            </div>
          )}

        </div>
      </section>


      {/* ==================================================
          TOAST
      ================================================== */}
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar
        theme="light"
      />

    </main>
  );
};

export default Recipes;