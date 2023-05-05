import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ChefDoing = ({ chifslider }) => {
  return (
    <div className="md:flex flex-col justify-center items-center mt-10">
      <h2 className="text-4xl font-bold mb-4">Chef Doing</h2>

      <div className="md:grid gap-4  md:grid-cols-2 lg:grid-cols-6">
        {chifslider.map((chef) => (
          <div key={chef.id} className="mb-8 md:mb-0">
            <div className="bg-white rounded-lg shadow-lg flex flex-col justify-between">
            
              <div className="p-4">
                <div className="flex items-center justify-center">
                  <div className="h-20 w-20 bg-gray-200 rounded-full overflow-hidden border-2 border-white">
                    <LazyLoadImage
                      src={chef.chef_picture}
                      alt={chef.chef_name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-medium mt-4">{chef.chef_name}</h3>
                <div className="flex items-center mt-2">
                  <span className="text-lg font-medium text-gray-600 mr-1">
                    Experience:
                  </span>
                  <span className="text-lg font-medium text-gray-700">
                    {chef.years_of_experience} years
                  </span>
                </div>
                <div className="flex items-center mt-2">
                  <span className="text-lg font-medium text-gray-600 mr-1">
                    Recipes:
                  </span>
                  <span className="text-lg font-medium text-gray-700">
                    {chef.number_of_recipes}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between px-4 pb-4">
                <span className="text-lg font-bold text-gray-700">
                  Likes: {chef.likes}
                </span>
                <AiOutlineHeart className="h-6 w-6 text-red-500" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefDoing;