import React from "react";
import "./ProductDetails.css";

const ProductDetails = ({ product }) => {
  return (
    <div className="product-details-content">
      <div className="compare-share-actions">
        <span className="action-item">Compare</span>
        <span className="action-item">Share</span>
      </div>

      <div className="path">{product.categoryPath}</div>
      <h1 className="product-title">{product.name}</h1>
      <div className="rating-container">
        <span className="rating-badge">{product.rating} ★</span>
        <span className="reviews">
          {product.numRatings.toLocaleString()} Ratings &{" "}
          {product.numReviews.toLocaleString()} Reviews
        </span>
        {product.assured && <span className="assured-badge">Assured</span>}
      </div>

      <hr className="divider" />

      <div className="price-info">
        <span className="extra-discount">
          Extra ₹{product.extraDiscount} Off
        </span>
        <div className="price-container">
          <span className="current-price">{product.price}</span>
          <span className="original-price">{product.originalPrice}</span>
          <span className="discount">{product.discount} off</span>
        </div>
        {product.promise && (
          <div className="promise-fee">
            + ₹{product.promise}{" "}
            <a href="#" className="link">
              Learn more
            </a>
          </div>
        )}
        <div className="delivery-date">
          Secure delivery by <b>{product.deliveryDate}</b>
        </div>
      </div>

      <div className="offers-section">
        <h3 className="offers-title">Available offers</h3>
        {product.offers &&
          product.offers.map((offer, index) => (
            <div key={index} className="offer-item">
              <span className="bank-icon">₹</span>
              <span className="offer-text">{offer}</span>
            </div>
          ))}
        <a href="#" className="link view-more-offers">
          View 9 more offers
        </a>
      </div>

      <div className="buy-option-exchange">
        <input
          type="radio"
          id="buy-no-exchange"
          name="buy-option"
          defaultChecked
        />
        <label htmlFor="buy-no-exchange" className="buy-label">
          Buy without Exchange
        </label>
        <span className="buy-price">
          ₹{product.price.replace("₹", "")}
        </span>
      </div>
    </div>
  );
};

export default ProductDetails;
