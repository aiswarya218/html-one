import React, { useState, useCallback, useMemo } from 'react';
// import { DiCssdeck, DiDart, DiSafari } from 'react-icons/di';
// import { FaF, FaFaceFlushed } from 'react-icons/fa6';
// import { IoIosIceCream, IoIosInfinite } from 'react-icons/io';
// import { IoIceCream } from 'react-icons/io5';
// import { LiaVolleyballBallSolid } from 'react-icons/lia';
// import { LuLamp, LuLayoutList, LuVolleyball } from 'react-icons/lu';
// import { PiFileJsxThin, PiPackage, PiPawPrint } from 'react-icons/pi';
// import { RiArrowRightBoxFill, RiRadarFill, RiRemixRunFill } from 'react-icons/ri';
// import { SiDsautomobiles, SiSsrn } from 'react-icons/si';
// import { TbEyeEdit, TbTable, TbTicTac } from 'react-icons/tb';
// import { jsx } from 'react/jsx-runtime';

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

// Helper to format large numbers
const formatNumber = (num) => {
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'k';
    }
    return num;
};

// --- CORE COMPONENTS ---

/**
 * Search Input Component
 */
const SearchBar = ({ onSearch, currentSearchTerm }) => {
    const [input, setInput] = useState(currentSearchTerm || '');

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSearchClick = () => {
        onSearch(input.trim());
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearchClick();
        }
    };

    return (
        <div className="search-bar-container">
            <input type="text" placeholder="Search for Mobile Phones (e.g., iPhone, Samsung, vivo)" value={input} onChange={handleInputChange} onKeyDown={handleKeyDown} className="search-input" />
            <button onClick={handleSearchClick} className="search-button" aria-label="Search" >
                🔍
            </button>
        </div>
    );
};

/**
 * Product Card Component (Reusable for Landing and List pages)
 */
const ProductCard = ({ product, onClick }) => {
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
              {/* Show top 4 specs */}
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


// --- VIEW COMPONENTS (New Separate Pages) ---

/**
 * 1. LANDING PAGE (Main Home Page)
 */
const LandingPage = ({ onNavigate }) => {
    return (
      <div className="page-container">
        
        <h2 className="section-title">Shop by Category</h2>
        <div className="category-grid">
            {['Electronics', 'Clothing', 'Furniture', 'Books'].map((category) => (
            <div
                key={category}
                className="category-card"
                onClick={() => alert(`Navigating to ${category} category page...`)} 
            >
                <div className="category-icon">
                {category === 'Electronics' && '📱'}
                {category === 'Clothing' && '👚'}
                {category === 'Furniture' && '🛋️'}
                {category === 'Books' && '📚'}
                </div>
                <p className="category-name">{category}</p>
                <span className="shop-link">Shop Now &rarr;</span>
            </div>
            ))}
        </div>
    
        <h2 className="section-title featured-section">Featured Mobile Deals</h2>
        <div className="featured-deals-grid">
            {/* Display first 3 products as featured deals */}
            {MOCK_PRODUCTS.slice(0, 3).map(product => (
            <ProductCard 
                key={product.id} 
                product={product} 
                // Clicking a featured product navigates to detail view
                onClick={() => onNavigate('PRODUCT', product.id)} 
            />
            ))}
        </div>
            
        <h2 className="section-title">All Mobile Listings</h2>
        <div className="product-list-grid">
            {/* Display the next 4 products as a sample of the full list */}
            {MOCK_PRODUCTS.slice(3, 7).map(product => (
            <ProductCard 
                key={product.id} 
                product={product} 
                // Clicking a list item navigates to detail view
                onClick={() => onNavigate('PRODUCT', product.id)} 
            />
            ))}
        </div>
      </div>
    );
};

/**
 * 2. MOBILE LIST PAGE (Search Results Section)
 */
const MobileListPage = ({ searchTerm, onClearSearch, onNavigate }) => {
    // Memoize the filtering logic for performance
    const filteredProducts = useMemo(() => {
        if (!searchTerm) {
            // If no search term, show all mobiles
            return MOCK_PRODUCTS;
        }

        const lowerCaseSearch = searchTerm.toLowerCase();
        
        // Filtering logic: checks name, color/storage, and all specifications
        return MOCK_PRODUCTS.filter(product =>
            product.name.toLowerCase().includes(lowerCaseSearch) ||
            product.colorAndStorage.toLowerCase().includes(lowerCaseSearch) ||
            product.specs.some(spec => spec.toLowerCase().includes(lowerCaseSearch))
        );
    }, [searchTerm]);

    const listTitle = searchTerm
        ? `Search Results for "${searchTerm}" (${filteredProducts.length})`
        : 'All Mobile Listings';
    
    return (
        <div className="page-container">
            <h2 className="section-title search-result-title">
                {listTitle}
                {searchTerm && (
                    <button onClick={onClearSearch} className="clear-search-btn">
                        Clear Search
                    </button>
                )}
            </h2>

            {filteredProducts.length === 0 ? (
                <p className="no-products">
                    Sorry, no mobile phones matched your search: **"{searchTerm}"**.
                </p>
            ) : (
                <div className="product-list-grid search-results-grid">
                    {filteredProducts.map(product => (
                        <ProductCard 
                            key={product.id} 
                            product={product} 
                            // Clicking product takes you to the detail page
                            onClick={() => onNavigate('PRODUCT', product.id)} 
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

/**
 * 3. PRODUCT DETAIL PAGE
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
        Back to Mobile List
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
  // State for navigation: 'HOME', 'LISTING', or 'DETAIL'
  const [currentView, setCurrentView] = useState('HOME');
  // State to hold the ID of the product when in 'DETAIL' view
  const [selectedProductId, setSelectedProductId] = useState(null);
  // State for search term
  const [searchTerm, setSearchTerm] = useState('');

  /**
   * Handler when search is initiated (from the header bar).
   * It sets the search term and switches to the LISTING view.
   */
  const handleSearch = useCallback((term) => {
      setSearchTerm(term);
      setCurrentView('LISTING');
      setSelectedProductId(null);
  }, []);
  
  /**
   * Handler to clear the search term and stay on the LISTING view (showing all products).
   */
  const handleClearSearch = useCallback(() => {
    setSearchTerm('');
  }, []);

  /**
   * Handles navigation from LandingPage or MobileListPage to a Product Detail Page.
   */
  const handleNavigateToProduct = useCallback((targetType, targetValue) => {
    if (targetType === 'PRODUCT') {
      setSelectedProductId(targetValue);
      setCurrentView('DETAIL');
    }
  }, []);

  /**
   * Function to navigate back to the Mobile List View.
   */
  const handleGoBack = useCallback(() => {
    // When going back from detail, always return to the LISTING view
    setCurrentView('LISTING');
    setSelectedProductId(null);
  }, []);

  /**
   * Renders the current view component based on state.
   */
  const renderContent = () => {
    switch (currentView) {
      case 'HOME':
        return (
            <LandingPage onNavigate={handleNavigateToProduct} />
        );

      case 'LISTING':
        return (
            <MobileListPage 
                searchTerm={searchTerm} 
                onClearSearch={handleClearSearch} 
                onNavigate={handleNavigateToProduct} 
            />
        );

      case 'DETAIL':
        return (
          <ProductDetail
            productId={selectedProductId}
            onGoBack={handleGoBack}
          />
        );

      default:
        // Default to home
        return <LandingPage onNavigate={handleNavigateToProduct} />;
    }
  };

  return (
    <div className="app-container">

      <header className="header">
        <div className="header-inner">
          <div className="header-title" onClick={() => { setCurrentView('HOME'); handleClearSearch(); }} >
          <span className="text-3xl mr-2">📱</span>
            Flipkart 
          </div>
          
          <SearchBar onSearch={handleSearch} currentSearchTerm={searchTerm} />
          
          <nav className="header-nav">
            <button onClick={() => { setCurrentView('HOME'); handleClearSearch(); }}>Home</button>
            <button>Login</button>
            <button className="cart-link">
              <span className="text-xl mr-1">🛒</span> Cart
            </button>
          </nav>
        </div>
      </header>

      <main className="main-content">
        {renderContent()}
      </main>

     
      <footer className="footer">
        <div className="footer-content">
          &copy; {new Date().getFullYear()} Flipkart Clone Demo | Separated Views
        </div>
      </footer>
    </div>
  );
};

export default App;