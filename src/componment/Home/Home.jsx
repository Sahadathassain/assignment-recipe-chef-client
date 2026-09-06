import React, { useEffect, useState } from "react";
import ChefSlider from "../Chef/ChefSlider";
import ChefCard from "../Chef/ChefCard";
import ChefDoing from "../Chef/ChefDoing";
import ChefLearn from "../Chef/ChefLearn";

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

      {/* All Chefs */}
      <ChefCard chifslider={chifslider} />

      {/* All Chefs */}
      <ChefDoing chifslider={chifslider} />

      {/* Popular Recipes */}
      <ChefLearn />
    </main>
  );
};

export default Home;