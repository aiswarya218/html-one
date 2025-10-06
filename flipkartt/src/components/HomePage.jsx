import React from 'react';
import Banner from './Banner';
import './HomePage.css';

const HomePage = () => {
  const topBannerData = {
    imageSrc: './images/-original-imahd77j8jh7hmge(3).jpeg',
    title: 'Huge Sale on Electronics!',
    description: 'Get up to 70% off on laptops, smartphones, and more.',
    ctaLink: '/electronics',
  };

  const bottomBannerData = {
    imageSrc: '',
    title: 'Discover Our New Fashion Collection',
    description: 'Find the latest trends in clothing for men and women.',
    ctaLink: '/fashion',
  };

  return (
    <div className="home-page-container">               
      <section className="top-banner-section"> 
        <Banner {...topBannerData} />  
      </section>

      <div className="main-content">
        <h1>Welcome to Our Store!</h1>
        <p>Explore our wide range of products...</p>
      </div>

      <section className="bottom-banner-section">
        <Banner {...bottomBannerData} />
      </section>
    </div>
  );
};

export default HomePage;