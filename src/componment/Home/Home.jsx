import React, { useEffect, useState } from "react";
import ChefSlider from "../Chef/ChefSlider";
import ChefCard from "../Chef/ChefCard";

import ChefDoing from "../Chef/ChefDoing";
import ChefLearn from "../Chef/ChefLearn";
;

const Home = () => {
  const [chifslider, setChifSlider] = useState([]);
  useEffect(() => {
    fetch("https://assignment-recipe-chef-server-sahadathassain.vercel.app/chifslider")
      .then((res) => res.json())
      .then((data) => setChifSlider(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <ChefSlider chifslider={chifslider}></ChefSlider>
      <ChefCard chifslider={chifslider}></ChefCard>
      <ChefDoing chifslider={chifslider}></ChefDoing>
      <ChefLearn></ChefLearn>
    </div>
  );
};

export default Home;