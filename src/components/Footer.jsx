import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>PrintFix Hub</h3>
          <p>Your trusted source for printer parts & repair services.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Phone: +880 1234 567890</p>
          <p>Email: support@printfixhub.com</p>
          <p>Location: Dhaka, Bangladesh</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} PrintFix Hub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;