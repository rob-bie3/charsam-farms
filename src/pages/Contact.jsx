import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaLocationArrow } from 'react-icons/fa';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic or API call here
    alert('Message sent! Thank you for reaching out.');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-white px-6 py-12 md:py-20 text-gray-800">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div>
          <h2 className="text-4xl font-bold text-green-800 mb-6">Contact Us</h2>
          <p className="text-gray-600 mb-6">
            Have questions or want to learn more about our services? We’re just a message away!
          </p>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center gap-3">
              <FaLocationArrow className="text-green-700" />
              Cape Coast - Elmina Highway
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-green-700" />
              +233 20 123 4567
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-green-700" />
              contact@charsamfarms.com
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="bg-green-50 p-6 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-green-700">Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-green-700"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-green-700"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-green-700"
              required
            />
            <button
              type="submit"
              className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
