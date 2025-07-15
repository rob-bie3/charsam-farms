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
import { useState } from 'react';
import MyCart from './pages/MyCart';
import { ToastContainer } from 'react-toastify';

function App() {

const [cart, setCart] = useState([]);

  return (
    <div className="font-sans text-gray-800">
      <Navbar cart={cart}/>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/products" element={<Products cart={cart} setCart={setCart} />} />

        <Route path="/services" element={<Services />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/booktraining" element={<BookTraining />} />

        <Route path="/gallery" element={<Gallery />} />

        <Route path="/mycart" element={<MyCart cart={cart} setCart={setCart} />} />

        
      </Routes>
      <Footer />

      <ToastContainer position='top-right' autoClose={5000} />
    </div>
  );
}

export default App;