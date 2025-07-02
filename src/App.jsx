import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookTraining from './components/BookTraining';
import Gallery from './pages/Gallery';
import Checkout from './pages/Checkout';
import { useState } from 'react';

function App() {

const [cart, setCart] = useState([]);

  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/products" element={<Products cart={cart} setCart={setCart} />} />

        <Route path="/services" element={<Services />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/booktraining" element={<BookTraining />} />

        <Route path="/gallery" element={<Gallery />} />

        <Route path="/checkout" element={<Checkout cart={cart} setCart={setCart} />} />

        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;