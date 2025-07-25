import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
//import Cart from './pages/Cart';

function App() {
  return (
    <>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<ProductDetails />} />
     {/* <Route path="/cart" element={<Cart />} />*/}
    </Routes>
    <Footer/>
    </>
  );
}

export default App;