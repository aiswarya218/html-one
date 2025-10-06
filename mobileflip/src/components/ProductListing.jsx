import React from "react";
import products from "./product.json";

const styles = {
  card: {
    display: "flex",
    padding: "20px",
    border: "1px solid #eee",
    borderRadius: "4px",
    backgroundColor: "#fff",
    maxWidth: "900px",
    margin: "20px auto",
    boxShadow: "0 1px 1px rgba(0,0,0,0.05)",
  },
  imageSection: {
     flex: "0 0 200px",
      marginRight: "20px",
       textAlign: "center"
  }, 
  imagePlaceholder: {
     width: "100%", 
     maxWidth: "180px", 
     height: "auto" 
  },
  checkbox: { 
    marginTop: "10px", 
    fontSize: "14px" 
  },
  infoSection: { 
    flex: "1",
    paddingRight: "20px" 
  },
  priceSection: { 
    flex: "0 0 160px", 
    textAlign: "right" 
 },
  title: {
    fontSize: "18px",
    fontWeight: "500",
    color: "#2a55e5",
    lineHeight: "22px",
    marginBottom: "5px",
  },
  ratingContainer: { 
    display: "flex", 
    alignItems: "center", 
    marginBottom: "10px" 
  },
  ratingBadge: {
    backgroundColor: "#388e3c",
    color: "white",
    padding: "2px 6px",
    borderRadius: "3px",
    fontSize: "13px",
    marginRight: "8px",
    fontWeight: "600",
  },
  reviews: { 
    fontSize: "14px", 
    color: "#555" 
  },
  specsList: { listStyle: "disc", paddingLeft: "20px", margin: "0" },
  specItem: { fontSize: "14px", lineHeight: "22px", color: "#333", marginLeft: "-10px" },
  currentPrice: { fontSize: "28px", fontWeight: "600", color: "#212121" },
  priceDetails: { display: "flex", alignItems: "center", justifyContent: "flex-end" },
  originalPrice: {
    textDecoration: "line-through",
    color: "#878787",
    fontSize: "16px",
    marginRight: "10px",
  },
  discount: { 
    color: "#388e3c", 
    fontSize: "16px", 
    fontWeight: "600" 
  },
  exchange: { 
    fontSize: "14px", 
    marginTop: "10px", 
    color: "#555" 
  },
};

const ProductListing = () => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id} style={styles.card}>
          <div style={styles.imageSection}>
            <img src={product.imageUrl} alt={product.name} style={styles.imagePlaceholder} />
            <div style={styles.checkbox}>
              <input type="checkbox" id={`compare-${product.id}`} />
              <label htmlFor={`compare-${product.id}`}>Add to Compare</label>
            </div>
          </div>

          <div style={styles.infoSection}>
            <div style={styles.title}>
              {product.name} {product.colorAndStorage}
            </div>
            <div style={styles.ratingContainer}>
              <span style={styles.ratingBadge}>{product.rating} ★</span>
              <span style={styles.reviews}>
                {product.numRatings?.toLocaleString()} Ratings & {product.numReviews?.toLocaleString()} Reviews
              </span>
            </div>
            <ul style={styles.specsList}>
              {product.specs.map((spec, index) => (
                <li key={index} style={styles.specItem}>
                  {spec}
                </li>
              ))}
            </ul>
          </div>

          <div style={styles.priceSection}>
            <div style={styles.currentPrice}>{product.price}</div>
            {product.originalPrice && (
              <div style={styles.priceDetails}>
                <span style={styles.originalPrice}>{product.originalPrice}</span>
                <span style={styles.discount}>{product.discount} off</span>
              </div>
            )}
            {product.assured && <div style={{ fontSize: "12px", fontWeight: "bold" }}><img src="./images/fa_9e47c1.png" /></div>}
            {product.exchangeOffer && (
              <div style={styles.exchange}>Upto {product.exchangeOffer} Off on Exchange</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;