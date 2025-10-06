import React from "react";
import "./Navbar.css";

function Navbar() {
  const categories = [
    { name: "Minutes", img: "./images/e00302d428f5c7be.png" },
    { name: "Mobiles & Tablets", img: "./images/5f2ee7f883cdb774.png" },
    { name: "Fashion", img: "./images/ff559cb9d803d424.png" },
    { name: "Electronics", img: "./images/e90944802d996756.jpg" },
    { name: "Home & Furniture", img: "./images/1788f177649e6991.png" },
    { name: "TVs & Appliances", img: "./images/af646c36d74c4be9.png" },
    { name: "Flight Bookings", img: "./images/3c647c2e0d937dc5.png" },
    { name: "Beauty, Food, More", img: "./images/b3020c99672953b9.png" },
    { name: "Grocery", img: "./images/e730a834ad950bae.png" }
  ];

  return (
    <nav className="navbar">
      {categories.map((cat, index) => (
        <div key={index} className="nav-item">
          <img src={cat.img} alt={cat.name} />
          <p>{cat.name}</p>
        </div>
      ))}
    </nav>
  );
}

export default Navbar;