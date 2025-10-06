import React, { useState } from "react";
import "./ProductGallery.css";

const ProductGallery = ({ product }) => {
  const [mainImage, setMainImage] = useState(
    product.imageUrls[0] || product.imageUrl
  );
  const imageList = product.imageUrls || [product.imageUrl];

  return (
    <div className="product-gallery">
      <div className="thumbnails">
        {imageList.map((img, index) => (
          <div key={index} className={`thumbnail-item ${img === mainImage ? "active" : ""}`} onMouseEnter={() => setMainImage(img)}>
            <img src={img} alt={`Thumbnail ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className="main-image-container">
        <img src={mainImage} alt={`Main view of ${product.name}`} className="main-image" />
        {product.highlights && (
          <div className="image-highlight-box">
            {product.highlights.map((line, index) => (
              <p key={index} className="highlight-text">
                {line}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductGallery;
