// import React from "react";
// import "./BannerSection.css";
// import { FaBalanceScaleLeft, FaKaggle, FaSdCard } from "react-icons/fa";

// const { VscDebugBreakpointLogUnverified } = require("react-icons/vsc")

// const BannerSection = () => {
//   const banners = [
//     {
//       id: 1,
//       image:
//         "./images/1da49deb54964774.jpg",
//     },
//     {
//       id: 2,
//       image:
//         "./images/7d0e4afcfe4a5076.png",
//     },
//     {
//       id: 3,
//       image:
//         "./images/5c998c996d8474b3.jpg",
//     },
//     {
//       id: 4,
//       image:
//         "./images/3b05bdde4a5b678c.jpg",
//     },
//     {
//       id: 5,
//       image:
//         "./images/2a6e3938f7c561f8.png",  
//     },
//     {
//       id: 6,
//       image:
//         "./images/6c389c7c373280bf.jpg",
//     },
//     {
//       id: 7,
//       image:
//         "./images/34618ebb09245381.jpg",
//     },
//   ];   
//    
//   return (
//     <div className="banner-section">
//       {banners.map((item) => (
//         <div className="banner-card" key={item.id}>
//           <img src={item.image} alt={item.subtitle} />
//         </div>
//       ))}
//     </div>
//   );
// };
// export default BannerSection;

// import React from 'react';
// import './Banner.css';
// const Banner = ({ imageSrc, title, description, ctaLink }) => {
//   return (
//     <div className="banner-container">
//       <img src={imageSrc} alt={title} className="banner-image" />
//       <div className="banner-content">
//         <h2>{title}</h2>
//         <p>{description}</p>
//         <a href={ctaLink} className="banner-cta">Shop Now</a>
//       </div>
//     </div>
//   );
// };

// export default Banner;