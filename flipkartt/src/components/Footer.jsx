import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-links-section">
        <div className="footer-column">
          <h4 className="footer-heading">ABOUT</h4>
          <ul className="footer-list">
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Flipkart Stories</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Corporate Information</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">GROUP COMPANIES</h4>
          <ul className="footer-list">
            <li><a href="#">Myntra</a></li>
            <li><a href="#">Cleartrip</a></li>
            <li><a href="#">Shopsy</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">HELP</h4>
          <ul className="footer-list">
            <li><a href="#">Payments</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Cancellation & Returns</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">CONSUMER POLICY</h4>
          <ul className="footer-list">
            <li><a href="#">Cancellation & Returns</a></li>
            <li><a href="#">Terms Of Use</a></li>
            <li><a href="#">Security</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Sitemap</a></li>
            <li><a href="#">Grievance Redressal</a></li>
            <li><a href="#">EPR Compliance</a></li>
          </ul>
        </div>

        <div className="footer-column contact-info">
          <h4 className="footer-heading">Mail Us</h4>
          <address className="address-block">
            Flipkart Internet Private Limited, <br />
            Buildings Alyssa, Begonia & <br />
            Clove Embassy Tech Village, <br />
            Outer Ring Road, Devarabeesanahalli Village, <br />
            Bengaluru, 560103, <br />
            Karnataka, India
          </address>
          <div className="social-links">
            <h4 className="footer-heading">Social</h4>
            <div className="social-icons">
              <a href="#"><img src="./images/image (1).svg" alt="Facebook" /></a>
              <a href="#"><img src="./images/image (2).svg" alt="Twitter" /></a>
              <a href="#"><img src="./images/YoutubeLogo_958b78.svg" alt="YouTube" /></a>
              <a href="#"><img src="./images/InstagramLogo_854a2c.svg" alt="Instagram" /></a>
            </div>
          </div>
        </div>

        <div className="footer-column contact-info">
          <h4 className="footer-heading">Registered Office Address</h4>
          <address className="address-block">
            Flipkart Internet Private Limited, <br />
            Buildings Alyssa, Begonia & <br />
            Clove Embassy Tech Village, <br />
            Outer Ring Road, Devarabeesanahalli Village, <br />
            Bengaluru, 560103, <br />
            Karnataka, India <br />
            <br />
            CIN: U51109KA2012PTC066107 <br />
            Telephone: <a href="tel:1800-202-9898">1800-202-9898</a>
          </address>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-item">
          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/sell-image-9de8ef.svg" alt="Become a Seller" width="13" height="12"></img>
          <span>Become a Seller</span>
        </div>
        <div className="footer-bottom-item">
          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/advertise-image-866c0b.svg" alt="Advertise" width="14" height="14" />
          <span>Advertise</span>
        </div>
        <div className="footer-bottom-item">
          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/gift-cards-image-d7ff24.svg" alt="Gift Cards" width="13" height="13"></img>
          <span>Gift Cards</span>
        </div>
        <div className="footer-bottom-item">
          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/help-centre-image-c4ace8.svg" alt="Help Center" width="13" height="13" />
          <span>Help Center</span>
        </div>
        <div className="footer-copyright">
          <span>&copy; 2007-2025 Flipkart.com</span>
        </div>
        <div className="payment-icons">
          <img src="./images/payment-method_69e7ec.svg" alt="Payment Methods" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;