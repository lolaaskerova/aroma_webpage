import React from "react";
import BestSellers from "../components/BestSellers/BestSellers";
import Crud from "../components/Crud/Crud";
import HeroSection from "../components/HeroSection/HeroSection";
import News from "../components/News/News";
import ShopSection from "../components/ShopSection/ShopSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Crud />
      <ShopSection />
      <BestSellers />
      <News/>
    </>
  );
};

export default Home;
