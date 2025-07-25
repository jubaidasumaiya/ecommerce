import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero" style={{ padding: '2rem', background: '#f0f0f0' }}>
        <h1>Printer Spare Parts & Servicing</h1>
        <p>Get original parts & expert repair service for all printer brands.</p>
        <button>Shop Now</button>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <h2>Popular Categories</h2>
        <div className="category-grid">
          <div className="category-card">Printer Heads</div>
          <div className="category-card">Ink Cartridges</div>
          <div className="category-card">Rollers</div>
          <div className="category-card">Belts</div>
        </div>
      </section>


     {/* Our Services Section */}
<section className="services">
  <h2>Our Services</h2>
  <div className="services-grid">
    <div className="service-card">
      <h3>Printer Installation</h3>
      <p>Quick setup and configuration of any printer at your location.</p>
    </div>
    <div className="service-card">
      <h3>Error Fixing</h3>
      <p>We fix common and complex printer errors with expert hands.</p>
    </div>
    <div className="service-card">
      <h3>Regular Maintenance</h3>
      <p>Keep your printers running smoothly with regular servicing.</p>
    </div>
    <div className="service-card">
      <h3>Software Setup</h3>
      <p>Installation & support for printer drivers and management tools.</p>
    </div>
  </div>
</section>

      {/* Top Products Section */}
<section className="products">
  <h2>Top Selling Products</h2>
  <div className="product-grid">
    <div className="product-card-one">
      <img src="https://res.cloudinary.com/dxxwnkrus/image/upload/v1747292809/Print_Head_ya6eam.jpg" alt="Product 1" />
      <h3>Print Head For Rongta RP328</h3>
      <p>$45.00</p>
      <button>Add to Cart</button>
    </div>
    <div className="product-card-two">
      <img src="https://res.cloudinary.com/dxxwnkrus/image/upload/v1747293197/leser_jet_tqy0lp.jpg" alt="Product 2" />
      <h3>HP LaserJet M806 Fuser Assembly Fuser Unit 220V</h3>
      <p>$25.00</p>
      <button>Add to Cart</button>
    </div>
    <div className="product-card-three">
      <img src="https://res.cloudinary.com/dxxwnkrus/image/upload/v1747293268/paper_output_tray_tabme3.jpg" alt="Product 3" />
      <h3>Paper Output Tray for Use in Hp M1005 Laserjet Printer & Scanner</h3>
      <p>$18.00</p>
      <button>Add to Cart</button>
    </div>
    <div className="product-card-four">
      <img src="https://res.cloudinary.com/dxxwnkrus/image/upload/v1747293338/motherboard_he9ib3.jpg" alt="Product 4" />
      <h3>Power Supply for Brother DCP T520 / T720 / T725 / T820 / T920 / T320 / T420</h3>
      <p>$22.00</p>
      <button>Add to Cart</button>
    </div>
  </div>
  <div className="next-button-container">
    <Link to="/products">
    <button className="next-button">View All Products</button>
    </Link>
  </div>
</section>

{/* CTA Section */}
<section className="cta">
  <div className="cta-content">
    <h2>Need Printer Help or Parts?</h2>
    <p>We provide the best support and original parts for all printer brands.</p>
    <button>Contact Us</button>
  </div>
</section>
    </div>
  );
}

export default Home;