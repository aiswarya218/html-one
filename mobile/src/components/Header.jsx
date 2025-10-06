import React from "react";
import "./Header.css";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href="/">Flipkart</a>
        <span className="explore">Explore <span className="plus">Plus</span></span>
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Search for products, brands and more" />
        <button className="search-btn">
          <FaSearch />
        </button>
      </div>

      <div className="header-actions">
        <button className="login-btn">Login</button>
        <a href="#" className="link">Become a Seller</a>
        <a href="#" className="link">More</a>
        <a href="#" className="cart">
          <FaShoppingCart /> Cart
        </a>
      </div>
    </header>
  );
};

export default Header;
