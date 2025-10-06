import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const categories = [
    "Electronics",
    "TVs & Appliances",
    "Men",
    "Women",
    "Baby & Kids",
    "Home & Furniture",
    "Sports, Books & More",
    "Flights",
    "Offer Zone"
  ];

  return (
    <nav className="navbar">
      {categories.map((cat, index) => (
        <a key={index} href="#" className="nav-item">
          {cat}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
