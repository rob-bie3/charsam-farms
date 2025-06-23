import React from 'react';
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import img3 from '../assets/images/img3.jpg';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-12 px-6 shadow-inner">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* About */}
        <div>
          <div className="flex justify-center md:justify-start items-center mb-4">
            <img src={img3} alt="CharsamFarms Logo" className="w-12 h-12 mr-3 rounded-full shadow-lg" />
            <h3 className="text-2xl font-bold">CharsamFarms</h3>
          </div>
          <p className="text-base text-gray-200 leading-relaxed">
            Promoting sustainable food systems through eco-friendly mushroom and snail farming.
            Fresh produce, expert training, and community impact.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3 text-base">
            <li><a href="#shop" className="hover:underline hover:text-yellow-300 transition">Shop</a></li>
            <li><a href="#about" className="hover:underline hover:text-yellow-300 transition">About Us</a></li>
            <li><a href="#contact" className="hover:underline hover:text-yellow-300 transition">Contact</a></li>
            <li><a href="#training" className="hover:underline hover:text-yellow-300 transition">Services</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-base">
            <li className="flex items-center justify-center md:justify-start gap-3">
              <FaLocationDot className="text-yellow-400" /> Sunyani - Odumase, Don Bosco Street.
            </li>
            <li className="flex items-center justify-center md:justify-start gap-3">
              <FaPhoneAlt className="text-yellow-400" /> +233 54 049 6324
            </li>
            <li className="flex items-center justify-center md:justify-start gap-3">
              <FaEnvelope className="text-yellow-400" /> Charitytwenewaa89@gmai.com
            </li>
          </ul>
        </div>
      </div>

      {/* Socials & Copyright */}
      <div className="mt-12 border-t border-green-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
        <p>&copy; {new Date().getFullYear()} <span className="text-white font-semibold">CharsamFarms</span>. All rights reserved.</p>
        <div className="flex space-x-5 mt-4 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition">
            <FaFacebookF size={18} />
          </a>
          <a href="https://www.instagram.com/charsam_farms/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition">
            <FaInstagram size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
