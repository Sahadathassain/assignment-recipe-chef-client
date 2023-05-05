import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ChefCard = ({ chifslider }) => {
  return (
    <div className="">
      <h2 className="font-bold my-5 text-center text-5xl">
        Best Chefs of Bangladesh
      </h2>
      <div className="md:grid grid-cols-3  md:m-4 gap-4">
        {chifslider.map((chef) => (
          <div
            key={chef.id}
            className="card w-full md:w-96 bg-base-100 shadow-xl">
            <figure>
              <LazyLoadImage
                className="w-full"
                style={{ height: "300px" }}
                src={chef.chef_picture}
                alt={chef.chef_name}
                effect="blur"
              />
            </figure>
            <div className="card-body">
              <div>
                <h2 className="card-title text-3xl font-bold">
                  {chef.chef_name}
                </h2>
                <p className="card-text text-2xl font-bold">
                  Years of experience: {chef.years_of_experience}
                </p>
                <p className="card-text text-xl font-bold">
                  Number of recipes: {chef.number_of_recipes}
                </p>
              </div>
              <div className="card-actions">
                <div className="flex items-center">
                  <span className="font-bold text-xl mr-2">
                    Likes: {chef.likes}
                  </span>
                  <FaHeart className="h-4 w-4 fill-current text-red-600 mr-2" />
                </div>
              </div>
            </div>

            <Link to={`/recipes/${chef.id}`} className="btn btn-primary">
              View Recipes
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefCard;