import React, { useEffect, useState } from "react";
import ChefSlider from "../Chef/ChefSlider";
import ChefCard from "../Chef/ChefCard";
import ChefDoing from "../Chef/ChefDoing";

import CulinaryStyles from "../Explore Culinary Styles/CulinaryStyles";
import ChefStories from "../Stories Behind the Dishes/ChefStories";
import PopularRecipes from "../Meet the Community/PopularRecipes";
import CommunityCTA from "../Community CTA/CommunityCTA";
const Home = () => {
  const [chifslider, setChifSlider] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/chifslider")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch chef data");
        }

        return res.json();
      })
      .then((data) => {
        setChifSlider(data);
      })
      .catch((error) => {
        console.error("Chef data loading error:", error);
      });
  }, []);

  // Carousel-এর জন্য শুধু প্রথম ৫ জন chef
  const carouselChefs = chifslider.slice(0, 5);

  return (
    <main className="bg-[#F5F7F2] text-[#17201A]">
      {/* Hero Carousel - Only 5 Chefs */}
      <ChefSlider chifslider={carouselChefs} />

      <CulinaryStyles chifslider={chifslider} />

      <ChefStories chifslider={chifslider} />

      {/* All Chefs */}
      <ChefCard chifslider={chifslider} />

      {/* All Chefs */}
      <ChefDoing chifslider={chifslider} />

      {/* Popular Recipes */}
    
      <PopularRecipes />
      <CommunityCTA chifslider={chifslider} />
    </main>
  );
};

export default Home;