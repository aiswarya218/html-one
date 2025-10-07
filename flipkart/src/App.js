import React, { useState, useCallback, useMemo } from 'react';
import './App.css'; 
import { DiFirebase, DiSafari } from 'react-icons/di';
import { faF } from '@fortawesome/free-solid-svg-icons';
import { TbEyeEdit } from 'react-icons/tb';
import { WiWindBeaufort0 } from 'react-icons/wi';
import { GiGClef } from 'react-icons/gi';
import { MdDoDisturbOff } from 'react-icons/md';
import { FaDAndD, FaDraft2Digital } from 'react-icons/fa';
import { BsFillDeviceHddFill } from 'react-icons/bs';

// Helper to format large numbers
const formatNumber = (num) => {
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'k';
    }
    return num;
};

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

/* Search Input */
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
        // Using custom class search-bar-container
        <div className="search-bar-container">
            {/* Using custom class search-button */}
            <button onClick={handleSearchClick} className="search-button" aria-label="Search" >
                {/* SVG for search icon - styles are now handled by search-button */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Search Icon</title><path d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z" stroke="#717478" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16 16L21 21" stroke="#717478" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </button>
            {/* Using custom class search-input */}
            <input type="text" placeholder="Search for Products, Brands and More" value={input} onChange={handleInputChange} onKeyDown={handleKeyDown} className="search-input" />
        </div>
    );
};

/* Product Card */
const ProductCard = ({ product, onClick }) => {
    return (
      // Using custom class product-card
      <div className="product-card" onClick={onClick} >
        {/* Using custom class product-image */}
        <div className="product-image-container">
          <img src={product.imageUrl} alt={product.name} className="product-image" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/150x150/cccccc/333333?text=Image+Missing"; }} /> 
        </div>
       
        <div className="card-content">
          {/* Using custom class product-name */}
          <h3 className="product-name">{product.name}</h3>

          <div className="product-rating-assured">
            <div className="rating-pill">
                <span className="rating-text-bold">{product.rating}</span>
                <span className="rating-star-icon">★</span>
            </div>
            <span className="rating-text">({formatNumber(product.numRatings)})</span>
            {product.assured && <span className="assured-badge"><img height = "21" src = "./images/fa_9e47c1.png" /></span>}
          </div>

          <div className="product-specs">
            {/* Using custom class spec-list */}
            <ul className="spec-list">
              {product.specs.slice(0, 3).map((spec, index) => (
                <li key={index} className="spec-list-item">{spec.split('|')[0].trim()}</li>
              ))}
            </ul>
            {/* Using custom class charger-info */}
            <p className="charger-info">{product.charger}</p>
          </div>

          {/* Using custom class price-details */}
          <div className="price-details">
            <span className="product-price">{product.price}</span>
            {product.originalPrice && <span className="original-price">{product.originalPrice}</span>}
            {product.discount && <span className="discount-percent">{product.discount} Off</span>}
          </div>
        </div>
      </div>
    );                                                  
};

/* Navbar */
const Navbar = () => {
  const categories = [
     { name: "Minutes", img: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/3dbe4c89fbf0003d.png?q=100" },
     { name: "Mobiles & Tablets", img: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/cd6aca4f61e8ea95.png?q=100" },
     { name: "TVs & Appliances", img: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/9c64dfa667885ca9.png?q=100" },
     { name: "Electronics", img: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/4d6b13d5a0e0724a.png?q=100" },
     { name: "Fashion", img: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/ec2982e5564fe07c.png?q=100" },
     { name: "Home & Kitchen", img: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/febcb9896245caf4.png?q=100" },
     { name: "Beauty & toys", img: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/3d7144345bbcf2e4.png?q=100" },
     { name: "Furniture", img: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/cddd92e134ba3ea9.png?q=100" },
     { name: "Flight Bookings", img: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/d9eea6cd0e7b68bb.png?q=100" },
     { name: "Grocery", img: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/2ebb95ec20eae8f1.png?q=100" }
  ];
  return (
    // Using custom class navbar
    <nav className="navbar">
      {categories.map((cat, index) => (
        // Using custom class nav-item
        <div key={index}  className="nav-item" onClick={() => console.log(`Navigating to ${cat.name} category...`)} >
          <img src={cat.img} alt={cat.name} className="nav-item-image" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/40x40?text=?'; }} />
          <p className="nav-item-text">{cat.name}</p>
        </div>
      ))}
    </nav>
  );
}

const ExtendedNavbar = () => {
  const categories = [
    { name: "Electronics", hasChevron: true },
    { name: "TVs & Appliances", hasChevron: true },
    { name: "Men", hasChevron: true },
    { name: "Women", hasChevron: true },
    { name: "Baby & Kids", hasChevron: true },
    { name: "Home & Furniture", hasChevron: true },
    { name: "Sports, Books & More", hasChevron: true },
    { name: "Flights" },
    { name: "Offer Zone" }, 
  ];
  return (
    // Using custom class extended-navbar-container
    <div className="extended-navbar-container">
      {/* Using custom class extended-navbar-nav */}
      <nav className="extended-navbar-nav">
        {categories.map((cat, index) => (
          // Using custom class extended-nav-item
          <a key={index} href="#" className="extended-nav-item" onClick={(e) => e.preventDefault()}>
            {cat.name}
            {cat.hasChevron && <span className="chevron-icon"><svg width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="CGMB7B"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" class="CPYntE"></path></svg></span>}
          </a>
        ))}
      </nav>
    </div>
  );
};

const ImageCarousel = () => {
    const banners = [
        {
            id: 1,
            imageUrl: "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/e7dcd564dcff5707.jpg?q=90",
            alt: "Mobile Deals Banner 1",
        },
        {
            id: 2,
            imageUrl: "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/3505234af9fee5b0.jpg?q=90",
            alt: "Electronics Sale Banner"
        },
        {
            id: 3,
            imageUrl: "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/80ed6c43325f596b.jpg?q=90",
            alt: "Fashion Offers Banner"
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const totalBanners = banners.length;

    const prevSlide = useCallback(() => {
        setActiveIndex((prevIndex) => 
            prevIndex === 0 ? totalBanners - 1 : prevIndex - 1
        );
    }, [totalBanners]);

    const nextSlide = useCallback(() => {
        setActiveIndex((prevIndex) => 
            prevIndex === totalBanners - 1 ? 0 : prevIndex + 1
        );
    }, [totalBanners]);

    React.useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); 

        return () => clearInterval(interval);
    }, [nextSlide]);

    return (
        <div className="carousel-container"> 

            <div className="carousel-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
                {banners.map(banner => (
                    // Using custom class carousel-slide and carousel-image
                    <div key={banner.id} className="carousel-slide">
                        <img src={banner.imageUrl} alt={banner.alt} className="carousel-image" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/1200x400/e0e0e0/333333?text=Promo+Banner"; }}/>
                    </div>
                ))}
            </div>

            {/* Navigation Button */}
            <button className="carousel-prev carousel-nav-btn" onClick={prevSlide} aria-label="Previous Slide">
                &lt;
            </button>
            <button className="carousel-next carousel-nav-btn" onClick={nextSlide} aria-label="Next Slide">
                &gt;
            </button>

            {/* Pagination Dot */}
            <div className="carousel-pagination">
                {banners.map((_, index) => (
                    <span key={index} className={`pagination-dot ${index === activeIndex ? 'active' : ''}`}onClick={() => setActiveIndex(index)} aria-label={`Go to slide ${index + 1}`}>
                    </span>
                ))}
            </div>
        </div>
    );
}

const BrandDirectory = () => {
    // Content data... (omitted for brevity)
    const sections = [
        // ... (section data remains the same)
        {
            title: "MOST SEARCHED FOR ON FLIPKART",
            links: [
                "Big Festive Diwali Sale", "iPhone 17", "iPhone Air", "iPhone 17 Pro", "iPhone 17 Pro Max", "Sale Offers Live", "Google Pixel 10", "Google Pixel 10 Pro", "Google Pixel 10 Pro XL", "Gifting Offers", "Earphones", "Durga Puja Sale", "Dussehra Sale", "Infinix GT 30 5G", "Samsung Galaxy Z Flip7 5G", "REDMI Note 14 5G", "NOTHING Phone 3", "vivo X200 FE", "Soundbars", "Sony Soundbars", "Airpods", "JBL Soundbars", "Utron Power Banks", "Boult Wireless Earphones", "Noise Earphones", "Oneplus Wireless Earphones", "vivo X Fold 5", "MOTOROLA Edge 60 5G", "SAMSUNG Galaxy S25 Edge", "MOTOROLA Razr 60", "CMF Phone 2 Pro", "Google Pixel 9A", "SAMSUNG F18", "Mobile", "POCO M7", "NOTHING Phone 3A", "iPhone 16e", "SAMSUNG Galaxy S25 Ultra", "SAMSUNG Galaxy S25 Plus", "SAMSUNG Galaxy S25", "iPhone 16 Plus", "iPhone 16 Pro", "iPhone 16 Pro Max", "vivo V50", "OPPO Reno13 Pro", "POCO X7", "realme 14 Pro Plus", "REDMI Note 14 Pro 5G", "OPPO Find X8", "Flipkart Exchange", "Sell Old Phone", "NOTHING Phone 2a Plus", "CMF by NOTHING Phone 1", "Infinix Note 40 Pro 5G", "iPhone 15", "Infinix Note 40 5G", "iPhone 15 Plus", "Motorola g04s", "Vivo x 100", "Oneplus Nord 3 Lite 5G", "SAMSUNG Flip5", "SAMSUNG Fold5", "Flipkart Axis Bank Super Elite Credit Card", "5G Mobile Phones", "Moto Edge 40", "Grievance Redressal", "Help Centre", "Track Orders", "Manage Orders", "Return Orders", "Gift Cards Store", "Flipkart Axis Bank Credit Card"
            ]
        },
        {
            title: "MOBILES",
            links: [
                "Infinix SMART 10", "OPPO Reno 14 Pro", "Motorola g84 5G", "OPPO Reno 12", "Motorola C45 5G", "Motorola Edge 50 Fusion", "REDMI 12 5G", "REDMI Note 13 5G", "Realme 12+ 5G", "POCO C65", "Motorola G84", "Realme C53", "Infinix SMART 8", "SAMSUNG Galaxy S23 5G", "Samsung Galaxy S21 FE 5G Qualicomm", "vivo V30", "SAMSUNG Galaxy S24 5G", "SAMSUNG Galaxy S21 FE 5G", "Infinix HOT 30i", "Realme 10 Pro 5G", "REDMI Note 12 Pro 5G", "Motorola 5G Phone", "Realme 5G Smartphone", "Apple 5g Phone", "Oppo 5g Phones", "Oneplus 5g Phones", "Vivo 5g Phones", "Oppo 5G Smart Phones", "4G Mobile", "Nokia Mobile", "Samsung Mobile", "Oppo Mobile", "Vivo Mobile", "Apple Mobile"
            ]
        },
        {
            title: "CAMERA",
            links: [
                "GoPro Action Camera", "Nikon Camera", "Canon Camera", "Sony Camera", "Canon DSLR", "Nikon DSLR"
            ]
        },
        {
            title: "LAPTOPS",
            links: [
                "Asus ROG Ally", "MacBook Pro M2", "Premium Laptop", "ASUS ROG Strix Scar 16 (2023) Core i9 13th Gen", "ASUS ROG Zephyrus M16 (2023) Core i9 13th Gen", "ASUS Zenbook 14 OLED (2022)", "Realme Book Prime Core i5 11th Gen", "Microsoft Surface Go Pentium 7260U", "Apple Laptops", "Acer Laptops", "Lenovo Laptops", "Dell Laptops", "Asus Laptops", "HP Laptops", "Gaming Laptops", "2 in 1 Laptops", "Laptops", "Dell latest laptops 2022", "HP latest laptops 2022", "Infinix INBook Y1 Plus", "SAMSUNG Galaxy Book 3", "12th Gen Intel Core Laptops"
            ]
        },
        {
            title: "TVs",
            links: [
                "TV", "LG TV", "Sony TV", "Samsung TV", "TCL TV", "MI TV", "Panasonic TV", "OnePlus TVs", "iFalcon TV", "32 Inch TV", "40 Inch TV", "43 Inch TV", "50 Inch TV", "55 Inch TV", "65 Inch TV", "75 Inch TV", "LED TV", "OLED TV", "QLED TV"
            ]
        },
        {
            title: "LARGE APPLIANCES",
            links: [
                "Television", "Washing Machines", "Refrigerators", "Air Conditioners", "Coffee Machine", "Electric Cookers", "Electric Jug/Heater", "Travel Kettles", "Induction Cooktops", "Inverters / stabilizer", "Irons / Iron Box", "Mixer Grinder", "Juicer", "Wet Grinders", "French Press", "Milk/Coffee Frother", "Chimneys", "Microwave Ovens", "Vacuum Cleaners", "Water Purifier", "Fan"
            ]
        },
        {
            title: "CLOTHING",
            links: [
                "Sarees", "Men's Jeans", "Lehenga", "Tops", "Apron for Doctors", "Mens Footwear", "Shacket", "Sunglasses", "Bridal blouse", "Men's Jackets", "Half saree blouse designs", "Designer blouses", "Women's Haldi Dress", "Women's Mehndi Dress", "Lavender Saree", "Blouse designs", "Shirts", "Cotton saree blouse designs", "Tshirts", "Dresses", "One pieces", "Readymade saree", "Groom wedding sherwani", "Designer Salwar Suits", "Bra", "Cotton simple blouse designs", "Banarasi saree blouse designs", "Stylish blouse aartin design", "Track Pant", "Blouse neck designs", "Mens Kurta", "Party Dresses", "Palazzo Suits", "Anarkali", "Gowns", "Cut out dress", "Salwar Suits", "Kurtis", "Designer Sarees", "Leggings", "Shorts", "Georgette Sarees", "Ethnic Wear", "Uppada pattu sarees", "Blouse back design", "Jodhpur pants"
            ]
        }
    ];

    const LinkItem = ({ link }) => (
        // Using custom class directory-link
        <a href="#" className="directory-link" onClick={(e) => e.preventDefault()}>{link}</a>
    );

    return (
        // Using custom class brand-directory-container
        <div className="brand-directory-container">
            <h2 className="directory-main-title">Top Stories: Brand Directory</h2>
            {sections.map((section, index) => (
                <div key={index} className="directory-section">
                      <div className="directory-links-wrapper">
                    <h3 className="directory-section-title">{section.title}:</h3>
                        {section.links.map((link, linkIndex) => (
                            <LinkItem key={linkIndex} link={link} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

/* Footer */
const Footer = () => {
    // Custom classes are integrated directly into the Footer JSX.
    const FooterLink = ({ children }) => <a href="#" className="common-footer-text" onClick={(e) => e.preventDefault()}>{children}</a>;
    const FooterHeader = ({ children }) => <div className="section-heading">{children}</div>;
    const AddressBlock = ({ children }) => <p className="address-block">{children}</p>;

    return (
        // Using custom class main-footer
        <footer className="main-footer">
            <div className="footer-content-top">
                
                <div className="footer-sections-container">
                    <FooterHeader>ABOUT</FooterHeader>
                    <FooterLink>Contact Us</FooterLink>
                    <FooterLink>About Us</FooterLink>
                    <FooterLink>Careers</FooterLink>
                    <FooterLink>Flipkart Stories</FooterLink>
                    <FooterLink>Press</FooterLink>
                </div>

                <div className="footer-sections-container">
                    <FooterHeader>HELP</FooterHeader>
                    <FooterLink>Payments</FooterLink>
                    <FooterLink>Shipping</FooterLink>
                    <FooterLink>Cancellation & Returns</FooterLink>
                    <FooterLink>FAQ</FooterLink>
                </div>

                <div className="footer-sections-container">
                    <FooterHeader>CONSUMER POLICY</FooterHeader>
                    <FooterLink>Terms Of Use</FooterLink>
                    <FooterLink>Security</FooterLink>
                    <FooterLink>Privacy</FooterLink>
                    <FooterLink>Sitemap</FooterLink>
                    <FooterLink>EPR Compliance</FooterLink>
                </div>

                <div className="footer-sections-container">
                    <FooterHeader>SOCIAL</FooterHeader>
                    <FooterLink>Facebook</FooterLink>
                    <FooterLink>Twitter</FooterLink>
                    <FooterLink>YouTube</FooterLink>
                </div>

                <div className="address-section">
                    <div className="mb-4">
                        <FooterHeader>Mail Us:</FooterHeader>
                        <AddressBlock>
                            Flipkart Internet Private Limited,<br />
                            Buildings Alyssa, Begonia & Clove Embassy Tech Village,<br />
                            Outer Ring Road, Devarabeesanahalli Village,<br />
                            Bengaluru, 560103, Karnataka, India
                        </AddressBlock>
                    </div>
                </div>
                
                <div className="registered-office">
                    <FooterHeader>Registered Office Address:</FooterHeader>
                    <AddressBlock>
                        Flipkart Internet Private Limited...<br />
                        Telephone: 044-45614700
                    </AddressBlock>
                </div>
            </div>

            <div className="bottom-footer-bar">
                <a href="#" onClick={(e) => e.preventDefault()}>
                    <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/sell-image-9de8ef.svg" alt="Seller" className="w-3 h-3 mr-1" />
                    Become a Seller
                </a>
                <a href="#" onClick={(e) => e.preventDefault()}>
                    <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/advertise-image-866c0b.svg" alt="Advertise" className="w-3.5 h-3.5 mr-1" />
                    Advertise
                </a>
                <a href="#" onClick={(e) => e.preventDefault()}>
                    <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/gift-cards-image-d7ff24.svg" alt="Gift Cards" className="w-3.5 h-3.5 mr-1" />
                    Gift Cards
                </a>
                <span className="copyright">&copy; 2007-{new Date().getFullYear()} Flipkart.com</span>
                <div className="payment-icons">
                    <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg" alt="Payment Methods" />
                </div>
            </div>
        </footer>
    );
}

/* 1. LANDING PAGE (Main Home Page) - Now includes ImageCarousel */
const LandingPage = ({ onNavigate }) => {
    return (
      <div className="page-container">
        <h2 className="section-title">Featured Mobile Deals</h2>
        <div className="featured-deals-grid">
            {/* Display first 5 products as featured deals */}
            {MOCK_PRODUCTS.slice(0, 5).map(product => (
            <ProductCard key={product.id} product={product} onClick={() => onNavigate('PRODUCT', product.id)} />
            ))}
        </div>
            
        <h2 className="section-title">More Popular Listings</h2>
        <div className="featured-deals-grid">
            {/* Display the next 5 products as a sample of the full list */}
            {MOCK_PRODUCTS.slice(5, 10).map(product => (
            <ProductCard key={product.id} product={product} onClick={() => onNavigate('PRODUCT', product.id)} />
            ))}
        </div>
        <BrandDirectory />
      </div>
    );
};

/* 2. MOBILE LIST PAGE (Search Results Section) */
const MobileListPage = ({ searchTerm, onClearSearch, onNavigate }) => {
    const filteredProducts = useMemo(() => {
        if (!searchTerm) {
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
            <ExtendedNavbar />
            
            <div className="search-result-title">
                <h2 className="section-title">
                    {listTitle}
                </h2>
                {searchTerm && (
                    <button onClick={onClearSearch} className="clear-search-btn">
                        Clear Search
                    </button>
                )}
            </div>

            {filteredProducts.length === 0 ? (
                <p className="no-products">
                    Sorry, no mobile phones matched your search: **"{searchTerm}"**.
                </p>
            ) : (
                <div className="product-list-grid">
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} onClick={() => onNavigate('PRODUCT', product.id)} />
                    ))}
                </div>
            )}
            
            {/* Display the Brand Directory only when there are products */}
            {filteredProducts.length > 0 && <BrandDirectory />}
        </div>
    );
};

/* 3. PRODUCT DETAIL PAGE */
const ProductDetail = ({ productId, onGoBack }) => {
  const product = MOCK_PRODUCTS.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="page-container detail-page-error">
        <h2 className="detail-name">Product Not Found</h2>
        <button onClick={onGoBack} className="back-button">
          <span className="back-arrow">←</span>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="page-container">
      <ExtendedNavbar />
      
      {/* Back button with custom class */}
      <button onClick={onGoBack} className="back-button">
        <span className="back-arrow">←</span>
        Back to Mobile List
      </button>

      {/* Main detail wrapper with custom class */}
      <div className="product-detail-wrapper">
        
        {/* Image Column with custom class */}
        <div className="detail-image-container">
          <img src={product.imageUrl} alt={product.name} className="detail-image" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x400/cccccc/333333?text=Product+Image"; }}/>
          
          <div className="detail-actions">
            <button className="btn-cart">
              <span className="btn-icon"><svg class="NwyjNT" width="16" height="16" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path class="" d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#fff"></path></svg></span>
              ADD TO CART
            </button>
            <button className="btn-buy">
              <span className="btn-icon"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M0 0v7.7h2.1V14L7 5.6H4.2L7 0" fill="#FFF"/></svg></span>
              BUY NOW
            </button>
          </div>
        </div>

        {/* Info Column with custom class */}
        <div className="detail-info-section">
          <h1 className="detail-name">{product.name} <span className="detail-color-storage">{product.colorAndStorage}</span></h1>

          <div className="detail-rating-block">
            <div className="detail-rating-pill">
              {product.rating} <span className="rating-star-filled">★</span>
            </div>
            <span className="detail-rating-count">{product.numRatings.toLocaleString('en-IN')} Ratings & {product.numReviews.toLocaleString('en-IN')} Reviews</span>
            {product.assured && <span className="assured-badge-large">FAssured</span>}
          </div>

          <div className="detail-price-box">
            <p className="detail-price">{product.price}</p>
            {product.originalPrice && <p className="detail-original-price"><span className="strikethrough-price">M.R.P: {product.originalPrice}</span></p>}
            {product.discount && <p className="detail-discount">{product.discount} off</p>}
          </div>
          
          <div className="detail-features">
            <h3 className="detail-subtitle">Product Highlights</h3>
            <ul className="detail-feature-list">
                {product.specs.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
            </ul>
          </div>
          
          <div className="detail-offers-block">
            <h3 className="detail-subtitle">Available Offers</h3>
            <div className="detail-offer-list">
                {product.exchangeOffer && (
                    <div className="offer-item">
                        <span className="offer-icon">✔️</span>
                        <p>Exchange Offer: Get up to **₹{product.exchangeOffer}** off on exchange of an old device.</p>
                    </div>
                )}
                <div className="offer-item">
                    <span className="offer-icon">✔️</span>
                    <p>Bank Offer: 10% instant discount on XYZ Bank Credit Card T&C</p>
                </div>
                {product.lowestPriceLive && (
                    <div className="offer-item lowest-price">
                        <span className="offer-icon">🔥</span>
                        <p>Lowest Price of the Season!</p>
                    </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- MAIN APP COMPONENT ---

const App = () => {
  const [currentView, setCurrentView] = useState('HOME');
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearch = useCallback((term) => {
      setSearchTerm(term);
      setCurrentView('LISTING');
      setSelectedProductId(null);
  }, []);
  
  const handleClearSearch = useCallback(() => {
    setSearchTerm('');
  }, []);

  const handleNavigateToProduct = useCallback((targetType, targetValue) => {
    if (targetType === 'PRODUCT') {
      setSelectedProductId(targetValue);
      setCurrentView('DETAIL');
    }
  }, []);

  const handleGoBack = useCallback(() => {
    setCurrentView('LISTING');
    setSelectedProductId(null);
  }, []);

  const handleGoHome = useCallback(() => {
    setCurrentView('HOME');
    setSearchTerm('');
    setSelectedProductId(null);
    window.scrollTo(0, 0); 
  }, []);

  const renderContent = () => {
    switch (currentView) {
      case 'HOME':
        return (
            <LandingPage onNavigate={handleNavigateToProduct} />
        );

      case 'LISTING':
        return (
            <MobileListPage  searchTerm={searchTerm} onClearSearch={handleClearSearch} onNavigate={handleNavigateToProduct}  />
        );

      case 'DETAIL':
        return (
          <ProductDetail productId={selectedProductId} onGoBack={handleGoBack} />
        );

      default:
        return <LandingPage onNavigate={handleNavigateToProduct} />;
    }
  };

  return (
    // Using custom class app-container
    <div className="app-container">

      {/* Using custom class header */}
      <header className="header">
        <div className="header-inner">
          
          {/* Logo - Using custom class header-title */}
          <div className="header-title" onClick={handleGoHome}>
            <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" width="160" height="40" alt="Flipkart Logo" className="header-logo"/>
          </div>
          
          {/* Search Bar (Centered) */}
          <SearchBar onSearch={handleSearch} currentSearchTerm={searchTerm} />
           
          {/* Right Icons - Using custom class header-right */}
          <div className="header-right">
            {/* These items rely on base flex/a styles but are contained in header-right */}
            <a className="header-link" href="#" onClick={(e) => e.preventDefault()}>
              <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg" alt="Login" className="header-icon"/>
              <div className="names">Login</div>
              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxNCAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZF80OTc0Xzc1OTY5KSI+CjxwYXRoIGQ9Ik0zIDJMNyA2TDExIDIiIHN0cm9rZT0iIzExMTExMiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2RfNDk3NF83NTk2OSIgeD0iMC4yNSIgeT0iMC4yNSIgd2lkdGg9IjEzLjUiIGhlaWdodD0iOS44MTI1IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQgZHk9IjEiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMSIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4xNiAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93XzQ5NzRfNzU5NjkiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3dfNDk3NF83NTk2OSIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPC9kZWZzPgo8L3N2Zz4K" alt="Chevron" className="imgs" width="12" height="12"></img>
            </a>
            <a className="header-link" href="#" onClick={(e) => e.preventDefault()}>
              <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg" alt="Cart" className="header-icon"/>
              <div className="names">Cart</div>
            </a>
            <a className="header-link seller" href="#" onClick={(e) => e.preventDefault()}>
              <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg" alt="Become a Seller" className="header-icon"/> 
              <div className="names">Become a Seller</div>
            </a>
            <a className="header-link dots" href="#" onClick={(e) => e.preventDefault()}>
              <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_3verticalDots-ea7819.svg" alt="More" className="header-icon"/>
            </a>
          </div>
        </div>
      </header>
      
      {/* Category Navbar: Only show on HOME view */}
      {currentView === 'HOME' && <Navbar />}
      
      {/* Image Carousel: Only show on HOME view */}
      {currentView === 'HOME' && <ImageCarousel />}

      {/* Using custom class main-content */}
      <main className="main-content">
        {renderContent()}
      </main>
      
      {/* Footer is using its own component class: main-footer */}
      <Footer />
    </div>
  );
};

export default App;