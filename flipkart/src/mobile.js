import React, { useState, useCallback } from 'react';

// --- MOCK DATA (Mobile Phones) ---
const MOCK_PRODUCTS = [
  {
    "id": 1,
    "name": "OPPO K13x 5G",
    "colorAndStorage": "(Midnight Violet, 128 GB)",
    "charger": "6000 mAh Battery",
    "rating": 4.4,
    "numRatings": 3246,
    "numReviews": 370,
    "price": "₹11,499",
    "originalPrice": "₹15,999",
    "discount": "28%",
    "assured": true,
    "lowestPriceLive": true,
    "exchangeOffer": "8,600",
    "imageUrl": "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/q/k/-original-imahfw4vamrf5xhf.jpeg?q=70",
    "specs": [
      "4 GB RAM | 128 GB ROM | Expandable Upto 2 TB",
      "16.94 cm (6.67 inch) HD+ Display",
      "50MP + 2MP | 8MP Front Camera",
      "Dimensity 6300 Processor",
      "1 Year Manufacturer Warranty for Device and 6 Months Manufacturer Warranty for Inbox Accessories"
    ]
  },
  {
    "id": 2,
    "name": "Xiaomi 13 Ultra",
    "colorAndStorage": "(Ceramic Black, 512 GB)",
    "charger": "5000 mAh Battery",
    "rating": 4.7,
    "numRatings": 8901,
    "numReviews": 1025,
    "price": "₹69,999",
    "originalPrice": "₹80,999",
    "discount": "13%",
    "assured": true,
    "lowestPriceLive": false,
    "exchangeOffer": "20,000",
    "imageUrl": "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/w/s/14-ultra-mzb0gfhin-xiaomi-original-imagzt8cdy56wmzx.jpeg?q=70",
    "specs": [
      "12 GB RAM | 512 GB ROM",
      "17.02 cm (6.7 inch) 2K AMOLED Display",
      "50MP Quad Camera Setup | 32MP Front Camera",
      "Snapdragon 8 Gen 2 Processor",
      "No exchange offer available"
    ]
  },
   {
    "id": 3,
    "name": "Samsung Galaxy A35 5G",
    "colorAndStorage": "(Awesome Lilac, 128 GB)",
    "charger": "5000 mAh Battery",
    "rating": 4.3,
    "numRatings": 27594,
    "numReviews": 1747,
    "price": "₹17,999",
    "originalPrice": "₹33,999",
    "discount": "47%",
    "assured": true,
    "lowestPriceLive": false,
    "exchangeOffer": "13,650",
    "imageUrl": "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/o/j/d/-original-imahgy25zuwqzzye.jpeg?q=70",
    "specs": [
      "8 GB RAM | 128 GB ROM",
      "16.76 cm (6.7 inch) Full HD+ Display",
      "50MP + 8MP + 5MP | 13MP Front Camera",
      "Samsung Exynos 1380 Processor",
      "1 Year Manufacturer Warranty for Device and 6 Months Manufacturer Warranty for In-Box Accessories"
    ]
  },
   {
    "id": 4,
    "name": "Apple iPhone 16",
    "colorAndStorage": "(Black, 128 GB)",
    "charger": "5000 mAh Battery",
    "rating": 4.6,
    "numRatings": 19106,
    "numReviews": 793,
    "price": "₹69,999",
    "originalPrice": "₹79,999", 
    "discount": "12%",
    "assured": true,
    "lowestPriceLive": false,
    "exchangeOffer": "20,000",
    "imageUrl": "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/8/w/5/-original-imah4jyfwr3bfjbg.jpeg?q=70",
    "specs": [
      "128 GB ROM",
      "15.41 cm (6.7 inch) Super Retina XDR Display",
      "48MP + 12MP | 12MP Front Camera",
      "A18 Chip, 6 Core Processor Processor",
      "1 Year Manufacturer Warranty for Device and 6 Months Manufacturer Warranty for Inbox Accessories"
    ]
  },
   {
    "id": 5,
    "name": "realme P4 Pro 5G",
    "colorAndStorage": "(Birch Wood, 128 GB)",
    "charger": "7000 mAh Battery ",
    "rating": 4.7,
    "numRatings": 89031,
    "numReviews": 1025,
    "price": "₹22,999",
    "originalPrice": "₹28,999",
    "discount": "20%",
    "assured": true,
    "lowestPriceLive": false,
    "exchangeOffer": "17,600",
    "imageUrl": "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/q/b/o/-original-imahfghxxmadhjm4.jpeg?q=70", 
    "specs": [
      "8 GB RAM | 128 GB ROM",
      "17.27 cm (6.8 inch) Display",
      "50MP + 8MP | 50MP Front Camera",
      "Snapdragon 7 Gen 4 Mobile Processor",
      "1 Year Manufacturer Warranty for Device and 6 Months Manufacturer Warranty for In-Box Accessories"
    ]
  },
   {
    "id": 6,
    "name": "vivo T4 5G",
    "colorAndStorage": "(Phantom Grey, 256 GB)",
    "charger": "7300 mAh Battery",
    "rating": 4.5,
    "numRatings": 51770,
    "numReviews": 2478,
    "price": "₹22,999",
    "originalPrice": "₹27,999",
    "discount": "17%",
    "assured": true,
    "lowestPriceLive": false,
    "exchangeOffer": "17,600",
    "imageUrl": "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/t/x/-original-imahbgpzbumfzkbh.jpeg?q=70",
    "specs": [
      "8 GB RAM | 256 GB ROM",
      "17.2 cm (6.77 inch) Display",
      "50MP (OIS) + 2MP | 32MP Front Camera",
      "Snapdragon 7s Gen 3 5G Processor",
      "1 Year Manufacturer Warranty for Device and 6 Months Manufacturer Warranty for In-Box Accessories"
    ]
  },
   {
    "id": 7,
    "name": "Google Pixel 8a",
    "colorAndStorage": "(Bay, 128 GB)",
    "charger": "4404 mAh Battery",
    "rating": 4.3,
    "numRatings": 7924,
    "numReviews": 633,
    "price": "₹29,999",
    "originalPrice": "₹52,999",
    "discount": "43%",
    "assured": true,
    "lowestPriceLive": false,
    "exchangeOffer": "24,950",
    "imageUrl": "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/f/h/n/pixel-8a-ga05570-in-google-original-imahyn3ncc6gcfnc.jpeg?q=70",
    "specs": [
      "8 GB RAM | 128 GB ROM",
      "15.49 cm (6.1 inch) Full HD+ Display",
      "64MP + 13MP | 13MP Front Camera",
      "Tensor G3 Processor",
      "1 Year Domestic Warranty"
    ]
  },
   {
    "id": 8,
    "name": "Apple iPhone 16 Pro",
    "colorAndStorage": "(Desert Titanium, 256 GB)",
    "charger": "5500 mAh Battery",
    "rating": 4.6,
    "numRatings": 3008,
    "numReviews": 145,
    "price": "₹1,19,999",
    "originalPrice": "₹1,37,999", 
    "discount": "13%",
    "assured": true,
    "lowestPriceLive": false,
    "exchangeOffer": "30,000", 
    "imageUrl": "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/7/d/z/-original-imah4jywfm9uuvzw.jpeg?q=70",
    "specs": [
      "256 GB ROM",
      "16.0 cm (6.3 inch) Super Retina XDR Display",
      "48MP + 48MP + 12MP | 12MP Front Camera",
      "A18 Pro Chip, 6 Core Processor",
      "1 Year Manufacturer Warranty for Device and 6 Months Manufacturer Warranty for in Box Accessories"
    ]
  },
   {
    "id": 9,
    "name": "vivo T4x 5G",
    "colorAndStorage": "(Pronto Purple, 128 GB)",
    "charger": "6500 mAh Battery",
    "rating": 4.4,
    "numRatings": 89406,
    "numReviews": 4620,
    "price": "₹14,499",
    "originalPrice": "₹19,499",
    "discount": "25%",
    "assured": true,
    "lowestPriceLive": false,
    "exchangeOffer": "10,800",
    "imageUrl": "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/j/t/v/-original-imahavdv28z4nrkn.jpeg?q=70",
    "specs": [
      "8 GB RAM | 128 GB ROM",
      "17.07 cm (6.72 inch) Display",
      "50MP + 2MP | 8MP Front Camera",
      "Dimensity 7300 5G Processor",
      "1 Year Manufacturer Warranty for Device and 6 Months Manufacturer Warranty for Accessories"
    ]
  },
   {
    "id": 10,
    "name": "MOTOROLA Edge 60 Fusion 5G",
    "colorAndStorage": "(PANTOME Zephyr, 256 GB)",
    "charger": "5500 mAh Battery",
    "rating": 4.5,
    "numRatings": 56015,
    "numReviews": 3095,
    "price": "₹20,999",
    "originalPrice": "₹25,999",
    "discount": "19%",
    "assured": true,
    "lowestPriceLive": false,
    "exchangeOffer": "15,850",
    "imageUrl": "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/m/c/-original-imahfvpcgfvzgaz5.jpeg?q=70",
    "specs": [
      "8 GB RAM | 256 GB ROM",
      "16.94 cm (6.67 inch) Display",
      "50MP + 13MP | 32MP Front Camera",
      "Dimensity 7400 Processor",
      "1 Year Manufacturer Warranty on Handset and 6 Months Manufacturer Warranty on Accessories"
    ]
  }
];

// --- COMPONENTS ---

/**
 * Renders the main product listing page (Home View).
 */
const HomePage = ({ onSelectProduct }) => (
  <div className="page-container">
    <h2 className="section-title">Mobile Phones: Top Deals Today</h2>

    <div className="product-list-grid">
      {MOCK_PRODUCTS.map(product => (
        <ProductCard key={product.id} product={product} onClick={() => onSelectProduct(product.id)} />
      ))}
    </div>
  </div>
);

/**
 * Renders a reusable product card with mobile-specific details.
 */
const ProductCard = ({ product, onClick }) => {
    // Helper to format large numbers
    const formatNumber = (num) => {
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'k';
        }
        return num;
    };

    return (
      <div
        className="product-card"
        onClick={onClick}
      >
        <img
          src={product.imageUrl}
          alt={product.name}
          className="product-image"
          onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x300/cccccc/333333?text=Image+Missing"; }}
        />
        
        <div className="card-content">
          <h3 className="product-name">{product.name}</h3>
          
          <div className="product-rating-assured">
            <div className="rating-pill">
                <span className="rating-score">{product.rating}</span>
                <span className="rating-star-icon">⭐</span>
            </div>
            <span className="rating-text">({formatNumber(product.numRatings)} Ratings)</span>
            {product.assured && <span className="assured-badge">FAssured</span>}
          </div>

          <div className="product-specs">
            <ul className="spec-list">
              {product.specs.slice(0, 4).map((spec, index) => (
                <li key={index}>{spec.split('|')[0].trim()}</li>
              ))}
            </ul>
            <p className="charger-info">{product.charger}</p>
          </div>

          <div className="price-details">
            <span className="product-price">{product.price}</span>
            {product.originalPrice && <span className="original-price">{product.originalPrice}</span>}
            {product.discount && <span className="discount-percent">{product.discount} Off</span>}
          </div>
        </div>
      </div>
    );
};

/**
 * Renders the detailed view of a single product.
 */
const ProductDetail = ({ productId, onGoBack }) => {
  const product = MOCK_PRODUCTS.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="page-container detail-page-error">
        <h2 className="error-title">Product Not Found</h2>
        <button
          onClick={onGoBack}
          className="back-button back-center"
        >
          <span className="back-arrow">←</span>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="page-container">
      <button
        onClick={onGoBack}
        className="back-button detail-back"
      >
        <span className="back-arrow">←</span>
        Back to Mobiles Listing
      </button>

      <div className="product-detail-wrapper">
        {/* Product Image Section */}
        <div className="detail-image-container">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="detail-image"
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x450/cccccc/333333?text=Product+Image"; }}
          />
        </div>

        {/* Product Info Section */}
        <div className="detail-info-section">
          <h1 className="detail-name">{product.name} <span className="detail-color-storage">{product.colorAndStorage}</span></h1>

          {/* Rating */}
          <div className="detail-rating-block">
            <div className="detail-rating-pill">
              {product.rating} <span className="rating-star-filled">⭐</span>
            </div>
            <span className="detail-rating-count">{product.numRatings.toLocaleString('en-IN')} Ratings & {product.numReviews.toLocaleString('en-IN')} Reviews</span>
            {product.assured && <span className="assured-badge-large">FAssured</span>}
          </div>

          {/* Price */}
          <div className="detail-price-box">
            <p className="detail-price">{product.price}</p>
            {product.originalPrice && <p className="detail-original-price">M.R.P: <span className="strikethrough-price">{product.originalPrice}</span></p>}
            {product.discount && <p className="detail-discount">{product.discount} off</p>}
          </div>

          <p className="detail-stock">Hurry! In Stock!</p>

          {/* Key Specifications */}
          <div className="detail-features">
            <h3 className="detail-subtitle">Key Specifications</h3>
            <ul className="detail-feature-list">
              {product.specs.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </div>
          
          {/* Exchange Offer & Lowest Price Live */}
          <div className="detail-offers-block">
            {product.exchangeOffer && (
                <div className="offer-item">
                    <span className="offer-icon">🔄</span>
                    <p>Exchange Offer: Get up to **₹{product.exchangeOffer}** off</p>
                </div>
            )}
            {product.lowestPriceLive && (
                <div className="offer-item lowest-price">
                    <span className="offer-icon">💰</span>
                    <p>Lowest Price of the Season!</p>
                </div>
            )}
            <div className="offer-item">
                <span className="offer-icon">🔋</span>
                <p>Battery: **{product.charger}**</p>
            </div>
          </div>

          {/* Actions */}
          <div className="detail-actions">
            <button className="btn-cart">
              <span className="btn-icon">🛒</span>
              Add to Cart
            </button>
            <button className="btn-buy">
              <span className="btn-icon">⚡</span>
              Buy Now
            </button>
          </div>

          {/* Delivery Info */}
          <div className="detail-delivery">
            <span className="delivery-icon">🚚</span>
            <p className="delivery-text">Delivered in 2-3 working days | Free Shipping</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- MAIN APP COMPONENT ---

const App = () => {
  // State for navigation: 'HOME' (List) or 'DETAIL'
  const [currentView, setCurrentView] = useState('HOME');
  // State to hold the ID of the product when in 'DETAIL' view
  const [selectedProductId, setSelectedProductId] = useState(null);

  // Function to navigate to the Product Detail Page
  const handleSelectProduct = useCallback((productId) => {
    setSelectedProductId(productId);
    setCurrentView('DETAIL');
  }, []);

  // Function to navigate back to the product list (Home View)
  const handleGoBack = useCallback(() => {
    // Always returns to the HOME (Mobile Listing) view
    setCurrentView('HOME');
    setSelectedProductId(null);
  }, []);

  const renderContent = () => {
    switch (currentView) {
      case 'HOME':
        return <HomePage onSelectProduct={handleSelectProduct} />;

      case 'DETAIL':
        return (
          <ProductDetail
            productId={selectedProductId}
            onGoBack={handleGoBack}
          />
        );

      default:
        return <HomePage onSelectProduct={handleSelectProduct} />;
    }
  };

  return (
    <div className="app-container">
      {/* GLOBAL STYLES (Simple CSS) */}
      <style>
        {`
          /* Base Styles */
          .app-container {
            font-family: Arial, sans-serif;
            min-height: 100vh;
            background-color: #f3f4f6; /* gray-100 */
          }
          .page-container {
            padding: 1rem;
            background-color: #f9fafb; /* gray-50 */
            min-height: calc(100vh - 120px); /* Adjust for header/footer */
          }
          .main-content {
            max-width: 1280px; /* max-w-7xl */
            margin: 0 auto;
          }

          /* Header */
          .header {
            background-color: #4338ca; /* indigo-700 */
            color: white;
            padding: 1rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
            position: sticky;
            top: 0;
            z-index: 10;
          }
          .header-inner {
            max-width: 1280px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .header-title {
            font-size: 1.5rem;
            font-weight: bold;
            cursor: pointer;
            display: flex;
            align-items: center;
          }
          .header-title > span {
            font-size: 1.875rem;
            margin-right: 0.5rem;
          }
          .header-nav {
            display: none;
            gap: 1.5rem;
          }
          .header-nav button {
            color: white;
            background: none;
            border: none;
            cursor: pointer;
            transition: color 0.15s;
          }
          .header-nav button:hover {
            color: #c7d2fe; /* indigo-200 */
          }
          .header-nav .cart-link {
            display: flex;
            align-items: center;
          }

          /* Titles */
          .section-title {
            font-size: 1.875rem;
            font-weight: 800;
            color: #1f2937; /* gray-900 */
            border-bottom: 2px solid #e5e7eb; /* gray-200 */
            padding-bottom: 0.5rem;
            margin-bottom: 1.5rem;
          }
          .category-highlight {
            color: #4f46e5; /* indigo-600 */
          }

          /* Product List Grid */
          .product-list-grid {
            display: grid;
            grid-template-columns: repeat(1, minmax(0, 1fr));
            gap: 1.5rem;
          }

          /* Product Card */
          .product-card {
            background-color: white;
            border-radius: 0.75rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            cursor: pointer;
            transition: all 0.3s;
            border: 1px solid #e5e7eb; /* gray-200 */
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 1rem;
          }
          .product-card:hover {
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            transform: scale(1.02);
          }
          .product-image {
            width: 100%;
            max-width: 200px;
            height: auto;
            object-fit: contain;
            object-position: center;
            margin-bottom: 0.5rem;
          }
          .card-content {
            padding: 0.5rem;
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            text-align: left;
          }
          .product-name {
            font-size: 1.125rem;
            font-weight: 600;
            color: #1f2937; /* gray-800 */
            margin-bottom: 0.25rem;
            line-height: 1.4;
          }
          
          /* Rating & Assured */
          .product-rating-assured {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 0.5rem;
          }
          .rating-pill {
            display: inline-flex;
            align-items: center;
            background-color: #16a34a; /* green-600 */
            color: white;
            font-size: 0.875rem;
            font-weight: 600;
            padding: 0.1rem 0.5rem;
            border-radius: 4px;
          }
          .rating-star-icon {
            margin-left: 0.25rem;
            font-size: 0.75rem;
          }
          .rating-text {
            font-size: 0.875rem;
            color: #4b5563;
          }
          .assured-badge {
            font-size: 0.7rem;
            font-weight: 600;
            color: #1e40af; /* blue-700 */
            background-color: #e0f2fe; /* blue-100 */
            padding: 0.1rem 0.4rem;
            border-radius: 4px;
            letter-spacing: 0.5px;
            border: 1px solid #93c5fd; /* blue-300 */
          }

          /* Specs List */
          .product-specs {
            margin-top: 0.5rem;
          }
          .spec-list {
            list-style: none;
            padding: 0;
            margin: 0;
          }
          .spec-list li {
            font-size: 0.875rem;
            color: #4b5563;
            line-height: 1.3;
            margin-bottom: 0.2rem;
          }
          .charger-info {
            font-size: 0.875rem;
            color: #1f2937;
            font-weight: 600;
            margin-top: 0.5rem;
          }

          /* Price Details */
          .price-details {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            margin-top: 0.75rem;
          }
          .product-price {
            font-size: 1.25rem;
            font-weight: bold;
            color: #1f2937; /* gray-900 */
          }
          .original-price {
            font-size: 0.875rem;
            color: #6b7280; /* gray-500 */
            text-decoration: line-through;
          }
          .discount-percent {
            font-size: 0.875rem;
            font-weight: 600;
            color: #16a34a; /* green-600 */
          }

          /* Product List Back Button */
          .back-button {
            display: flex;
            align-items: center;
            color: #4f46e5;
            transition: color 0.15s;
            font-weight: 500;
            margin-bottom: 1rem;
            background: none;
            border: none;
            cursor: pointer;
          }
          .back-button:hover {
            color: #3730a3; /* indigo-800 */
          }
          .back-arrow {
            font-size: 1.25rem;
            margin-right: 0.25rem;
          }
          .no-products {
            font-size: 1.125rem;
            color: #4b5563;
            margin-top: 2rem;
          }

          /* Product Detail */
          .product-detail-wrapper {
            background-color: white;
            border-radius: 1rem;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
            padding: 1.5rem;
            display: grid;
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .detail-image-container {
            display: flex;
            justify-content: center;
            align-items: flex-start;
          }
          .detail-image {
            width: 100%;
            max-width: 450px;
            border-radius: 0.75rem;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            border: 1px solid #f3f4f6;
            object-fit: contain;
          }
          .detail-info-section {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }
          .detail-name {
            font-size: 1.875rem;
            font-weight: 700;
            color: #1f2937;
          }
          .detail-color-storage {
            font-size: 1.25rem;
            font-weight: 400;
            color: #6b7280;
            margin-left: 0.5rem;
          }

          /* Detail Rating & Assured */
          .detail-rating-block {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            border-bottom: 1px solid #e5e7eb;
            padding-bottom: 1rem;
            margin-bottom: 1rem;
          }
          .detail-rating-pill {
            display: flex;
            align-items: center;
            background-color: #16a34a; /* green-600 */
            color: white;
            font-size: 1rem;
            font-weight: 600;
            padding: 0.25rem 0.75rem;
            border-radius: 4px;
          }
          .detail-rating-count {
            color: #6b7280;
            font-size: 0.95rem;
          }
          .assured-badge-large {
            font-size: 0.8rem;
            font-weight: 700;
            color: #1e40af; 
            background-color: #e0f2fe; 
            padding: 0.2rem 0.6rem;
            border-radius: 4px;
            letter-spacing: 0.5px;
            border: 1px solid #93c5fd; 
          }

          /* Detail Price Box */
          .detail-price-box {
            display: flex;
            align-items: baseline;
            gap: 1rem;
            margin-bottom: 0.5rem;
          }
          .detail-price {
            font-size: 2.25rem;
            font-weight: bold;
            color: #1f2937;
          }
          .detail-original-price {
            font-size: 1.125rem;
            color: #6b7280;
          }
          .strikethrough-price {
            text-decoration: line-through;
          }
          .detail-discount {
            font-size: 1.125rem;
            font-weight: 600;
            color: #16a34a;
          }
          .detail-stock {
            font-size: 1rem;
            color: #047857; /* green-700 */
            font-weight: 500;
          }

          /* Key Specifications */
          .detail-features {
            border-top: 1px solid #e5e7eb;
            padding-top: 1.5rem;
          }
          .detail-subtitle {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 0.75rem;
            color: #1f2937;
          }
          .detail-feature-list {
            list-style: none;
            padding: 0;
            margin: 0;
            color: #374151;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }
          .detail-feature-list li {
            line-height: 1.5;
            font-size: 1rem;
            position: relative;
            padding-left: 1rem;
          }
          .detail-feature-list li::before {
            content: '•';
            color: #4f46e5; /* indigo-600 */
            font-weight: bold;
            display: inline-block;
            width: 1em;
            margin-left: -1em;
          }

          /* Offers Block */
          .detail-offers-block {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            border-top: 1px solid #e5e7eb;
            padding-top: 1.5rem;
          }
          .offer-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.95rem;
            color: #374151;
          }
          .offer-item p {
            font-weight: 500;
          }
          .offer-icon {
            font-size: 1.125rem;
            color: #4f46e5;
          }
          .lowest-price {
            color: #16a34a;
          }
          .lowest-price .offer-icon {
            color: #16a34a;
          }
          
          /* Detail Actions */
          .detail-actions {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding-top: 1rem;
          }
          .detail-actions button {
            flex: 1;
            font-weight: bold;
            font-size: 1.125rem;
            padding: 0.75rem;
            border-radius: 0.5rem; /* slightly less round for buttons */
            transition: all 0.15s;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            border: none;
            cursor: pointer;
          }
          .btn-icon {
            font-size: 1.25rem;
            margin-right: 0.5rem;
          }
          .btn-cart {
            background-color: #ff9800; /* Orange */
            color: #1f2937;
          }
          .btn-cart:hover {
            background-color: #f57c00;
          }
          .btn-buy {
            background-color: #fb8c00; /* Darker Orange */
            color: white;
          }
          .btn-buy:hover {
            background-color: #f4511e;
          }


          /* Delivery Info */
          .detail-delivery {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            color: #6b7280;
            border-top: 1px solid #e5e7eb;
            padding-top: 1rem;
            margin-top: 1rem;
          }
          .delivery-icon {
            font-size: 1.25rem;
          }
          .delivery-text {
            font-size: 0.875rem;
          }

          /* Footer */
          .footer {
            background-color: #1f2937; /* gray-800 */
            color: white;
            margin-top: 2.5rem;
            padding: 2rem;
            font-size: 0.875rem;
            text-align: center;
          }
          
          /* === Media Queries for Responsiveness === */

          /* Medium screens (md/tablet - 768px and up) */
          @media (min-width: 768px) {
            .page-container {
              padding: 2rem;
            }
            .header-nav {
              display: flex;
            }
            /* Two columns for product list */
            .product-list-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
            /* Product card takes up less vertical space */
            .product-card {
                flex-direction: row;
                align-items: flex-start;
                padding: 1.5rem;
                gap: 1.5rem;
            }
            .product-image {
                max-width: 150px;
                height: 150px;
            }
            .detail-actions {
              flex-direction: row;
              gap: 1rem;
            }
          }

          /* Large screens (lg/desktop - 1024px and up) */
          @media (min-width: 1024px) {
            /* Three columns for product list */
            .product-list-grid {
              grid-template-columns: repeat(3, minmax(0, 1fr));
            }
            /* Restore vertical card layout for wider grid (optional, but looks better for mobiles) */
            .product-card {
                flex-direction: column;
                align-items: center;
                padding: 1rem;
            }
            .product-image {
                max-width: 200px;
                height: 200px;
            }
            /* Detail page split layout */
            .product-detail-wrapper {
              grid-template-columns: 1fr 1.5fr; /* Image 1 part, Info 1.5 parts */
              padding: 2.5rem;
            }
          }

          /* Extra-large screens (xl/large desktop - 1280px and up) */
          @media (min-width: 1280px) {
            /* Four columns for product list */
            .product-list-grid {
              grid-template-columns: repeat(4, minmax(0, 1fr));
            }
          }
        `}
      </style>

      {/* Header */}
      <header className="header">
        <div
          className="header-inner"
        >
          <div
            className="header-title"
            onClick={() => setCurrentView('HOME')}
          >
            <span className="text-3xl mr-2">📱</span>
            Flipkart Mobiles
          </div>
          <nav className="header-nav">
            <button onClick={() => setCurrentView('HOME')}>Home</button>
            <button>Login</button>
            <button className="cart-link">
              <span className="text-xl mr-1">🛒</span> Cart
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="main-content">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          &copy; {new Date().getFullYear()} Flipkart Clone Demo | Simple CSS & React
        </div>
      </footer>
    </div>
  );
};

export default App;
