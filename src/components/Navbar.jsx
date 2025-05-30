import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-primary text-black p-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">CharsamFarms</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-secondary">Home</Link>
        <Link to="/about" className="hover:text-secondary">About</Link>
        <Link to="/products" className="hover:text-secondary">Products</Link>
        <Link to="/services" className="hover:text-secondary">Services</Link>
        <Link to="/contact" className="hover:text-secondary">Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar;