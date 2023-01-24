import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";

const navStyle = {
  color: "blue",
};
const Navbar = () => {
  return (
    <nav>
      <div className="navbar container">
        <div className="nav_icon">
          <h1 style={{fontSize:"35px"}}>Aroma</h1>
        </div>
        <div className="nav_links">
          <NavLink
            id="link"
            to="/"
            style={({ isActive }) => (isActive ? navStyle : null)}
          >
            Home
          </NavLink>
          <NavLink
            id="link"
            to="/shop"
            style={({ isActive }) => (isActive ? navStyle : null)}
          >
            Shop
          </NavLink>
          <NavLink
            id="link"
            to="/blog"
            style={({ isActive }) => (isActive ? navStyle : null)}
          >
            Blog
          </NavLink>
          <NavLink
            id="link"
            to="/pages"
            style={({ isActive }) => (isActive ? navStyle : null)}
          >
            Pages
          </NavLink>
          <NavLink
            id="link"
            to="/contact"
            style={({ isActive }) => (isActive ? navStyle : null)}
          >
            Contact
          </NavLink>
          <NavLink
            id="link"
            to="/add"
            style={({ isActive }) => (isActive ? navStyle : null)}
          >
            Add
          </NavLink>
        </div>
        <div className="nav_buttons">
          <div className="fonts">
            <i class="fa-solid fa-magnifying-glass"></i>
            <i class="fa-solid fa-cart-shopping">
              {" "}
              <sup>3</sup>{" "}
            </i>
          </div>
          <div className="nav_btn">
            <button>Buy Now</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
