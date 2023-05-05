import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Recipes = () => {
    
    const recipes = useLoaderData();
    // console.log(recipe);
    const { chef_picture, chef_name, bio, likes, number_of_recipes, recipe } =
      recipes;
    const isLiked = likes > 0;
  
    const handleFavoriteBtn = (event) => {
      toast.success("Added Favorite");
      event.currentTarget.disabled = true;
    };
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="bg-gray-200 p-6 ">
        <div className="md:inline-flex">
          <div className="lg:w-2/3 rounded-lg lg:rounded-none lg:rounded-l-lg">
            <LazyLoadImage
              className=""
              style={{ height: "600px", width: "800px" }}
              effect="blur"
              src={chef_picture}
              alt={chef_name}
            />
          </div>

          <div className="lg:w-1/3 text-center my-auto lg:pl-8">
            <h2 className="text-3xl font-bold mb-2">{chef_name}</h2>
            <p className="mb-4">{bio}</p>
            <div className="flex justify-center items-center">
              <p className="mr-4 inline-flex">
                {isLiked ? (
                  <FaHeart className="text-red-500 h-6" />
                ) : (
                  <FaRegHeart className="text-gray-500" />
                )}
                <span className="ml-1 font-bold">{likes} Likes</span>
              </p>
              <p>
                <span className="font-bold">{number_of_recipes}</span> Recipes
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl text-center font-bold mb-4">Recipes</h2>
        <div className="md:grid my-4 lg:grid-cols-3 gap-4">
        {recipe.map((recipe, index) => (
        <div className="rounded-lg overflow-hidden" key={index}>
          <LazyLoadImage
            className="w-full mx-auto h-48 object-cover"
            src={recipe.recipe_img}
            alt={recipe.recipe_name}
            style={{
              height: "200px",
              width: "300px",
            }}
            effect="blur"
          />
          <div className="p-4">
            <h3 className="font-bold text-xl mb-2">{recipe.recipe_name}</h3>
            <h3 className="text-center font-bold text-lg">Ingredients</h3>
            <ul className="list-disc list-inside mb-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <h3 className="text-center font-bold text-lg">Method</h3>
            <ul className="list-disc list-inside mb-2">
              {recipe.method.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
            <div className="inline-flex">
              <p className="sm:text-xs md:text-xl font-bold">
                Rating: {recipe.rating}
              </p>
              <span className="text-yellow-500 flex mt-1 md:m-2">
                {Array.from({ length: 5 }, (_, index) => (
                  <FaStar
                    className={`ms-1 ${
                      index < recipe.rating
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }`}
                    key={index}
                  />
                ))}
              </span>
            </div>
          </div>
          <button className="btn btn-primary" onClick={handleFavoriteBtn}>
            Add to Favorite
          </button>
          <ToastContainer />
        </div>
      ))}
        </div>
      </div>
    </div>
  );
};

export default Recipes;