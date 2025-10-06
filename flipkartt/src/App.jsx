import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import BannerSection from "./components/BannerSection";
import TopDeals from "./components/TopDeals";
// import BannerSection from "./components/BannerSection";
import AboveFooterSection from "./components/AboveFooterSection";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import dealsData from "./data/dealsData.json";
import { faAnglesLeft, faF } from "@fortawesome/free-solid-svg-icons";
// import { jsx } from "react/jsx-runtime";

function App() {
  return (
    <div className="app">
      <Header />                       
      <Navbar /> 
      <Banner />                                       
      <Categories />
      {dealsData.map((section, index) => (  
        <TopDeals key={index} title={section.title} products={section.products} />
      ))}
      <BannerSection />
      <AboveFooterSection />
      <Footer /> 
    </div>
  );
}

export default App;