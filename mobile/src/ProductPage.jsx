import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ProductGallery from "./components/ProductGallery";
import ProductDetails from "./components/ProductDetails";
import "./App.css";

const productData = {
  id: 11,
  categoryPath: "Home > Mobiles & Accessories > Mobiles > MOTOROLA > MOTOROLA...",
  name: "MOTOROLA g35 5G (Midnight Black, 128 GB) (4 GB RAM)",
  rating: 4.2,
  numRatings: 76865,
  numReviews: 5305,
  assured: true,
  price: "₹8,999",
  originalPrice: "₹12,499",
  discount: "28%",
  extraDiscount: "1000",
  promise: "29 Protect Promise Fee", 
  deliveryDate: "28 Sep",
  imageUrl:
    "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/o/y/e/-original-imahy5yvj3fh4v6n.jpeg?q=70",
  imageUrls: [
    "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/z/q/m/g35-5g-pb3h0000in-motorola-original-imah7c6ykgz5rtgv.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/2/i/f/g35-5g-pb3h0000in-motorola-original-imah7c6yxeg3uufu.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/p/e/b/g35-5g-pb3h0000in-motorola-original-imah7c6ysg3uderp.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/o/t/u/g35-5g-pb3h0000in-motorola-original-imah7c6y46upakqp.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/x/q/4/g35-5g-pb3h0000in-motorola-original-imah7c6y4ckyaraq.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/w/s/a/g35-5g-pb3h0000in-motorola-original-imah7c6y6pzwpg36.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/x/x/3/g35-5g-pb3h0000in-motorola-original-imah7c6yqpykk6qc.jpeg?q=70"
  ],
  highlights: [
    "Fastest 5G | 12 5G Bands",
    '120Hz FHD+ 6.72" Display',
    "50MP Quad Pixel | 8MP Ultrawide Camera"
  ],
  offers: [
    "Bank Offer 10% Off on Supermoney UPI. Max discount of ₹50. Minimum order value of ₹250. T&C",
    "Bank Offer 5% cashback on Flipkart SBI Credit Card upto ₹4,000 per calendar quarter T&C",
    "Bank Offer 5% cashback on Axis Bank Flipkart Debit Card T&C",
    "Special Price Get extra ₹1000 off T&C"
  ]
};

const ProductPage = () => {
  return (
    <div className="app-container">
      <Header />
      <Navbar />

      <div className="product-page-container">
        <ProductGallery product={productData} />
        <ProductDetails product={productData} />
         <div className="action-buttons">
            <button className="add-to-cart">ADD TO CART</button>
            <button className="buy-now">BUY NOW</button>
          </div>
      </div>
    </div>
  );
};

export default ProductPage;
