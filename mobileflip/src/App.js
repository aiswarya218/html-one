import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Filters1 from "./components/Filters1";
import ProductListing from "./components/ProductListing";
import Footer from "./components/Footer";
import "./style1.css";
// import { SiElsevier } from "react-icons/si";
// import { TbEyeEdit } from "react-icons/tb";

function App() { 
  return (
    <div>
      <Header />
      <Navbar />

      <div className="main-content">
        <Filters1 />
        <ProductListing />
      </div>

      <Footer />
    </div>
  );
}

export default App;