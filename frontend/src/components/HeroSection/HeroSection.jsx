import React from "react";
import "./heroSection.scss";

const HeroSection = () => {
  return (
    <section>
      <div className="hero-section ">
        <div className="hero container">
          <div className="hero_left">
            <img
            id="hero_img"
              src="https://i.pinimg.com/550x/5f/55/ac/5f55acb354888bab138e6153a4b934f2.jpg"
              alt="shopping_card"
              style={{ height: "500px" }}
            />
          </div>
          <div className="hero_info">
            <p id="shop">Shop is fun</p>
            <h1 id="shop_title">BROWSE OUR <br /> PREMIUM PRODUCT</h1>
            <p id="shop_text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed esse
              alias beatae ut repellat, voluptate suscipit velit hic id eveniet.
              Inventore saepe illum officiis ut totam magni iste alias quis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
