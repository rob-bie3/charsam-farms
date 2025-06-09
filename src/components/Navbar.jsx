import  { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/img3.jpg';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinkStyle = (path) =>
    location.pathname === path
      ? 'text-yellow-300 font-semibold'
      : 'hover:text-yellow-300 transition';

  return (
    <nav className="bg-green-800 text-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Charsam Farms Logo"
            className="w-10 h-10 rounded-full object-cover"
          />
          <h1 className="text-xl font-bold tracking-wide">CharsamFarms</h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <Link to="/" className={navLinkStyle('/')}>Home</Link>
          <Link to="/about" className={navLinkStyle('/about')}>About</Link>
          <Link to="/products" className={navLinkStyle('/products')}>Products</Link>
          <Link to="/services" className={navLinkStyle('/services')}>Services</Link>
          <Link to="/contact" className={navLinkStyle('/contact')}>Contact</Link>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 px-4 flex flex-col space-y-3 bg-green-900 py-4 rounded-md">
          <Link to="/" onClick={toggleMenu} className={navLinkStyle('/')}>Home</Link>
          <Link to="/about" onClick={toggleMenu} className={navLinkStyle('/about')}>About</Link>
          <Link to="/products" onClick={toggleMenu} className={navLinkStyle('/products')}>Products</Link>
          <Link to="/services" onClick={toggleMenu} className={navLinkStyle('/services')}>Services</Link>
          <Link to="/contact" onClick={toggleMenu} className={navLinkStyle('/contact')}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
