import React, { useState } from 'react';
import './components/Header';
import './components/Navbar';
import './App.css';

const productData = {
    "id": 11,
    "categoryPath": 'Home > Mobiles & Accessories > Mobiles > MOTOROLA > MOTOROLA...',
    "name": 'MOTOROLA g35 5G (Midnight Black, 128 GB) (4 GB RAM)',
    "rating": 4.2,
    "numRatings": 76865,
    "numReviews": 5305,
    "assured": true,
    "price": '₹8,999',
    "originalPrice": '₹12,499',
    "discount": '28%',
    "extraDiscount": '1000',
    "promise": '29 Protect Promise Fee', 
    "deliveryDate": '28 Sep',
    "imageUrl": 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/o/y/e/-original-imahy5yvj3fh4v6n.jpeg?q=70', 
    "imageUrls": [
        'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/z/q/m/g35-5g-pb3h0000in-motorola-original-imah7c6ykgz5rtgv.jpeg?q=70&amp;crop=false',
        'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/2/i/f/g35-5g-pb3h0000in-motorola-original-imah7c6yxeg3uufu.jpeg?q=70&amp;crop=false',
        'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/p/e/b/g35-5g-pb3h0000in-motorola-original-imah7c6ysg3uderp.jpeg?q=70&amp;crop=false',
        'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/o/t/u/g35-5g-pb3h0000in-motorola-original-imah7c6y46upakqp.jpeg?q=70&amp;crop=false',
        'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/x/q/4/g35-5g-pb3h0000in-motorola-original-imah7c6y4ckyaraq.jpeg?q=70&amp;crop=false',
        'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/w/s/a/g35-5g-pb3h0000in-motorola-original-imah7c6y6pzwpg36.jpeg?q=70&amp;crop=false',
        'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/x/x/3/g35-5g-pb3h0000in-motorola-original-imah7c6yqpykk6qc.jpeg?q=70&amp;crop=false'

    ],
    "highlights": [
        'Fastest 5G | 12 5G Bands',
        '120Hz FHD+ 6.72" Display',
        '50MP Quad Pixel | 8MP Ultrawide Camera'
    ],
    "offers": [
        'Bank Offer 10% Off on Supermoney UPI. Max discount of ₹50. Minimum order value of ₹250. T&C',
        'Bank Offer 5% cashback on Flipkart SBI Credit Card upto ₹4,000 per calendar quarter T&C',
        'Bank Offer 5% cashback on Axis Bank Flipkart Debit Card T&C',
        'Special Price Get extra ₹1000 off T&C'
    ],
};

const ProductGallery = ({ product }) => {
    const [mainImage, setMainImage] = useState(product.imageUrls[0] || product.imageUrl);
    const imageList = product.imageUrls || [product.imageUrl];

    return (
        <div className="product-gallery">
            <div className="thumbnails">
                {imageList.map((img, index) => (
                    <div key={index} className={`thumbnail-item ${img === mainImage ? 'active' : ''}`} onMouseEnter={() => setMainImage(img)}>
                        <img src={img} alt={`Thumbnail ${index + 1}`} />
                    </div>
                ))}
            </div>

            <div className="main-image-container">
                <img src={mainImage} alt={`Main view of ${product.name}`} className="main-image" />
                {product.highlights && (
                    <div className="image-highlight-box">
                        {product.highlights.map((line, index) => (
                            <p key={index} className="highlight-text">{line}</p>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );                          
};

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
                <span className="reviews">{product.numRatings.toLocaleString()} Ratings & {product.numReviews.toLocaleString()} Reviews</span>
                {product.assured && <span className="assured-badge">Assured</span>}
            </div>
            
            <hr className="divider" />

            <div className="price-info">
                <span className="extra-discount">Extra ₹{product.extraDiscount} Off</span>
                <div className="price-container">
                    <span className="current-price">{product.price}</span>
                    <span className="original-price">{product.originalPrice}</span>
                    <span className="discount">{product.discount} off</span>
                </div>
                {product.promise && (
                    <div className="promise-fee">
                        + ₹{product.promise} <a href="#" className="link">Learn more</a>
                    </div>
                )}
                <div className="delivery-date">
                    Secure delivery by **{product.deliveryDate}**
                </div>
            </div>

            <div className="offers-section">
                <h3 className="offers-title">Available offers</h3>
                {product.offers && product.offers.map((offer, index) => (
                    <div key={index} className="offer-item">
                        <span className="bank-icon">₹</span>
                        <span className="offer-text">{offer}</span>
                    </div>
                ))}
                <a href="#" className="link view-more-offers">View 9 more offers</a>
            </div>
            
            <div className="buy-option-exchange">
                <input type="radio" id="buy-no-exchange" name="buy-option" defaultChecked />
                <label htmlFor="buy-no-exchange" className="buy-label">
                    Buy without Exchange
                </label>
                <span className="buy-price">
                    ₹{product.price.replace('₹', '')}
                </span>
            </div>
        </div>
    );
};

const ProductPage = () => { 
    return (

       <div className="app"> 
         <Header />                       
         <Navbar /> 

        <div className="app-container">
            <div className="product-page-container">
                <ProductGallery product={productData} />
                <ProductDetails product={productData} />
            </div>
        </div>
       </div>
    ); 
};

export default ProductPage;