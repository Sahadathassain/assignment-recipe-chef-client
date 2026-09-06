import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaArrowRight,
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
    recipe,
  } = recipes;

  const isLiked = likes > 0;

  const handleFavoriteBtn = (event) => {
    toast.success("Added Favorite");
    event.currentTarget.disabled = true;
    event.currentTarget.classList.add("opacity-60", "cursor-not-allowed");
  };

  return (
    <main className="min-h-screen bg-[#F5F7F2]">

      {/* Chef Profile Hero */}
      <section className="px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#14532D] shadow-lg">

          <div className="grid lg:grid-cols-2">

            {/* Chef Image */}
            <div className="relative h-[400px] sm:h-[500px] lg:h-[560px]">
              <LazyLoadImage
                src={chef_picture}
                alt={chef_name}
                effect="blur"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#17201A]/60 via-transparent to-transparent" />
            </div>

            {/* Chef Information */}
            <div className="flex items-center px-7 py-12 sm:px-12 lg:px-14">
              <div className="max-w-xl">

                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#C2412D]" />

                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/70">
                    Chef Profile
                  </span>
                </div>

                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  {chef_name}
                </h1>

                <p className="mt-6 text-base leading-7 text-white/70">
                  {bio}
                </p>

                {/* Stats */}
                <div className="mt-8 grid max-w-md grid-cols-2 border-y border-white/15 py-5">
                  <div>
                    <div className="flex items-center gap-2">
                      {isLiked ? (
                        <FaHeart className="text-[#C2412D]" />
                      ) : (
                        <FaRegHeart className="text-white/60" />
                      )}

                      <span className="text-2xl font-bold text-white">
                        {likes}
                      </span>
                    </div>

                    <p className="mt-1 text-xs uppercase tracking-wider text-white/50">
                      Likes
                    </p>
                  </div>

                  <div className="border-l border-white/15 pl-6">
                    <p className="text-2xl font-bold text-white">
                      {number_of_recipes}
                    </p>

                    <p className="mt-1 text-xs uppercase tracking-wider text-white/50">
                      Recipes
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recipes */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">

          {/* Section Header */}
          <div className="mb-10">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C2412D]" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#14532D]">
                From the Kitchen
              </span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-[#17201A] sm:text-4xl">
              Recipes by {chef_name}
            </h2>

            <p className="mt-3 text-sm text-[#17201A]/55 sm:text-base">
              Explore signature recipes and discover something delicious.
            </p>
          </div>

          {/* Recipe Grid */}
          <div className="grid gap-6 lg:grid-cols-3">
            {recipe.map((item, index) => (
              <article
                key={item.id || index}
                className="group overflow-hidden rounded-2xl border border-[#14532D]/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                {/* Recipe Image */}
                <div className="relative h-56 overflow-hidden">
                  <LazyLoadImage
                    src={item.recipe_img}
                    alt={item.recipe_name}
                    effect="blur"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#17201A]/60 to-transparent" />

                  {/* Recipe Number */}
                  <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-xs font-bold text-[#14532D] shadow-sm">
                    0{index + 1}
                  </span>

                  {/* Rating */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-1 rounded-full bg-white/95 px-3 py-1.5 shadow-sm">
                    <FaStar className="text-sm text-[#C2412D]" />

                    <span className="text-xs font-bold text-[#17201A]">
                      {item.rating}
                    </span>
                  </div>
                </div>

                {/* Recipe Content */}
                <div className="p-6">

                  <h3 className="text-xl font-bold leading-tight text-[#17201A] sm:text-2xl">
                    {item.recipe_name}
                  </h3>

                  {/* Ingredients */}
                  <div className="mt-6">
                    <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-[#14532D]">
                      Ingredients
                    </h4>

                    <ul className="mt-3 space-y-2">
                      {item.ingredients.map((ingredient, ingredientIndex) => (
                        <li
                          key={ingredientIndex}
                          className="flex items-start gap-2 text-sm leading-5 text-[#17201A]/60"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C2412D]" />
                          <span>{ingredient}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Method */}
                  <div className="mt-6 border-t border-[#14532D]/10 pt-6">
                    <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-[#14532D]">
                      Method
                    </h4>

                    <ol className="mt-3 space-y-3">
                      {item.method.map((step, stepIndex) => (
                        <li
                          key={stepIndex}
                          className="flex items-start gap-3 text-sm leading-6 text-[#17201A]/60"
                        >
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F5F7F2] text-[10px] font-bold text-[#14532D]">
                            {stepIndex + 1}
                          </span>

                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Favorite */}
                  <button
                    type="button"
                    onClick={handleFavoriteBtn}
                    className="mt-7 flex w-full items-center justify-center gap-3 rounded-xl border border-[#14532D]/15 px-5 py-3 text-sm font-bold text-[#14532D] transition-all duration-200 hover:border-[#C2412D] hover:bg-[#C2412D] hover:text-white"
                  >
                    <FaHeart className="text-sm" />
                    <span>Add to Favorite</span>
                    <FaArrowRight className="text-xs" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Toast */}
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