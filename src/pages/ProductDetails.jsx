import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './productdetails.css'

const allProducts = [
  {
    id: 1,
    name: "Printer Head - Canon",
    category: "Head",
    price: 45,
    image: "https://via.placeholder.com/200x150?text=Head",
    description: "High quality Canon printer head."
  },
  {
    id: 2,
    name: "Ink Cartridge - HP",
    category: "Cartridge",
    price: 25,
    image: "https://via.placeholder.com/200x150?text=Cartridge",
    description: "Original HP cartridge for best print."
  },
  {
    id: 3,
    name: "Roller Set - Epson",
    category: "Roller",
    price: 18,
    image: "https://via.placeholder.com/200x150?text=Roller",
    description: "Durable rollers for smooth printing."
  },
  {
    id: 4,
    name: "Drive Belt - Brother",
    category: "Belt",
    price: 22,
    image: "https://via.placeholder.com/200x150?text=Belt",
    description: "Genuine drive belt for Brother printers."
  },
  {
    id: 5,
    name: "Canon Ink Bottle",
    category: "Cartridge",
    price: 30,
    image: "https://via.placeholder.com/200x150?text=Ink",
    description: "Canon refill ink bottle, high capacity."
  }
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = allProducts.find(p => p.id === parseInt(id || '0'));

  if (!product) {
    return <div style={{ padding: '2rem' }}><h2>Product not found!</h2></div>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} style={{ maxWidth: '300px', margin: '1rem 0' }} />
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <button>Add to Cart</button>
      <br /><br />
      <Link to="/products">Back to Products</Link>
    </div>
  );
};

export default ProductDetails;