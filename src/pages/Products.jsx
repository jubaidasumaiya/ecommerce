import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './products.css';

const allProducts = [
  { id: 1, name: "Paper Input Tray For Epson T60 / R290 / R260 / L800 / L805 Printer", price: 45, image: "https://res.cloudinary.com/dxxwnkrus/image/upload/v1747322561/paper_input_tray_rwsvyz.jpg" },
  { id: 2, name: "Pickup Roller Tire for Brother MFC-T4500DW / MFC-J6930DW / J6530DW / MFC-J6530DW", price: 25, image: "https://res.cloudinary.com/dxxwnkrus/image/upload/v1747322696/pick_up_roler_jnyw2l.jpg" },
  { id: 3, name: "Pickup Roller Tire for Kodak Alaris S2040 / S2050 / S2060W / S2080W (S2040) ", price: 18, image: "https://res.cloudinary.com/dxxwnkrus/image/upload/v1747322812/pick_up_roller_tire_oh9wfh.jpg" },
  { id: 4, name: "Motherboard for Epson LQ-2090II", price: 22, image: "https://res.cloudinary.com/dxxwnkrus/image/upload/v1747322969/motherboard_mxhfyp.jpg" },
  { id: 5, name: "Waste Ink Pad For Canon G1010 / G2010 / G3010 / G4010",price: 30, image: "https://res.cloudinary.com/dxxwnkrus/image/upload/v1747322886/waste_ink_zbiivp.jpg" },
  { id: 6, name: "Pickup Roller Tire for Epson DS-410 / DS-510 / DS-520 / DS-560 / DS-760 / DS-860 / Scanjet 5000S2 / 7000S2 (B12B813581)",price: 30, image: "https://res.cloudinary.com/dxxwnkrus/image/upload/v1747323128/pick_up_roler_jhyitx.jpg" },
  { id: 7, name: "Pickup / ADF Roller Kit for Hp Scanjet 5000S2 / 7000S2 (L2755-60001) Full Set",price: 30, image: "https://res.cloudinary.com/dxxwnkrus/image/upload/v1747323274/pick_up_roler_niki7o.jpg" },
  { id: 8, name: "Transfer Belt for HP 5225/ 750 / 775 / 9100 / 5525 Only Belt (Korea)",price: 30, image: "https://res.cloudinary.com/dxxwnkrus/image/upload/v1747323371/transfer_belt_avk4vn.jpg" },
  { id: 9, name: "Separation Roller for Pantum BP5100 / BM5100 / M6700 / M6800 / M7100 / P3010 / P3300 (301022320001)",price: 30, image: "https://res.cloudinary.com/dxxwnkrus/image/upload/v1747323459/separation_roler_y4xbah.jpg" },
  { id: 10, name: "Toner Cartridge Drum Drive Gear for HP M402 / M403 / M426 / M427 / M427fdw (RU9-0036)",price: 30, image: "https://res.cloudinary.com/dxxwnkrus/image/upload/c_crop,w_400,h_300/v1747323526/toner_opowf8.jpg" },
  { id:11, name: "Transfer Belt for HP M553 / M554 / M555 / M577 / M578 (RM2-6560-Only Belt) (Korea)",price: 30, image: "https://res.cloudinary.com/dxxwnkrus/image/upload/v1747323371/transfer_belt_avk4vn.jpg" },
  { id: 12, name: "ADF Pickup Roller Assembly for HP Pro M201 / M202 / MFP M225 / M226 / CM1415 / M1536 (CF144-60142)",price: 30, image: "https://res.cloudinary.com/dxxwnkrus/image/upload/v1747323996/adf_vwlaly.jpg" },
  { id: 13, name: "Laser Scanner Assembly for Samsung ML 3750 / 3310 / 3312 / 3700 / 3710 / 3712 / 4833 / 4835 / 5637 / for Dell 2375 (SJ-0635MP)",price: 30, image: "https://res.cloudinary.com/dxxwnkrus/image/upload/v1747324260/laser_l5v47a.jpg" },
  { id: 14, name: "Fuser Assembly for HP LaserJet M501 / M506 / M527 / (RM2-5692)",price: 30, image: "https://res.cloudinary.com/dxxwnkrus/image/upload/v1747324317/fuser_vhshru.jpg" },
  { id: 15, name: "Motor Sensor Board for Brother Hl1112w / HL 1110 / 1111 / 1112 / 1118 / 1200 / 1201 / 1202 / 1208 / 1210 / 1211 / 1212 / 1218 / DCP 1510 / 1519 / 1600 / 1601 / 1602 / 1608 (LV0975)",price: 30, image: "https://res.cloudinary.com/dxxwnkrus/image/upload/v1747324413/motor_izeyxq.jpg" },
];

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="products-page">
      <h2>All Products</h2>

      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search product..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
              </Link>
              <p>${product.price.toFixed(2)}</p>
              <button>Add to Cart</button>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Products;