import React from "react";
import "./TopDeals.css";

function TopDeals({ title, products }) {
  return (
    <section className="top-deals">
      <h2>{title}</h2>
      <div className="deal-grid">
        {products.map((item) => (
          <div className="deal-card" key={item.id}>
            <img src={item.img} alt={item.name} />
            <h4>{item.name}</h4>
            <p>{item.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TopDeals;