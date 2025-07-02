import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaTruck, FaChalkboardTeacher } from 'react-icons/fa';
import training from '../assets/images/training.jpg';
import BookTraining from '../components/BookTraining';
import delivery from '../assets/images/delivery.jpg';
import snail2 from '../assets/images/snail6.jpg'
import { Link } from 'react-router-dom';


const Services = () => {

const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-green-50 text-gray-800 px-6 py-12 md:py-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Intro */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-green-800 mb-6"
        >
          Our Services
        </motion.h1>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          At CharsamFarms, we’re dedicated to delivering sustainable food and agricultural innovation through a variety of eco-conscious services.
        </p>

        {/* Service Overview Cards */}
        <div className="grid md:grid-cols-3 gap-10 text-left">
          {/* Fresh Produce */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-green-200 p-6 rounded-xl shadow-md hover:shadow-xl"
          >
            <FaLeaf className="text-green-700 text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fresh Organic Produce</h3>
            <p className="text-gray-700">
              We supply fresh oyster mushrooms and African snails grown using sustainable practices to households, restaurants, and food vendors.
            </p>
          </motion.div>

          {/* Delivery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-green-200 p-6 rounded-xl shadow-md hover:shadow-xl"
          >
            <FaTruck className="text-green-700 text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Nationwide Delivery</h3>
            <p className="text-gray-700">
              Order from anywhere in Ghana and receive our healthy, eco-friendly farm products at your doorstep.
            </p>
          </motion.div>

          {/* Training */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-green-200 p-6 rounded-xl shadow-md hover:shadow-xl"
          >
            <FaChalkboardTeacher className="text-green-700 text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Training & Consultancy</h3>
            <p className="text-gray-700">
              Learn to start and manage your own mushroom or snail farm. We provide hands-on training, workshops, and ongoing mentorship.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Expanded Section: Fresh Produce */}
      <section className="max-w-6xl mx-auto mt-20 md:flex items-center gap-10 px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <img
            src={snail2}
            alt="Fresh produce"
            className="rounded-xl shadow-lg w-full"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mt-6 md:mt-0"
        >
          <h3 className="text-3xl font-bold text-green-800 mb-4">Fresh Organic Produce</h3>
          <p className="mb-4 text-gray-700">
            We offer organically grown oyster mushrooms and African snails nurtured in clean, chemical-free environments. Our products are harvested fresh and packed with care to retain their nutrition and flavor.
          </p>
          <p className="mb-4 text-gray-700">
            Whether you're a local household, restaurant, or bulk buyer, we ensure healthy, eco-friendly food right to your table.
          </p>
          <Link to="/contact">
           <button 
            className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition duration-300 ease-in-out 
             transform hover:scale-105 hover:shadow-lg">
              Contact Us
            </button>
           </Link>
        </motion.div>
      </section>

      {/* Expanded Section: Nationwide Delivery */}
      <section className="max-w-6xl mx-auto mt-20 md:flex items-center gap-10 px-6 flex-row-reverse">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <img
            src={delivery}
            alt="Nationwide delivery"
            className="rounded-xl shadow-lg w-full"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mt-6 md:mt-0"
        >
          <h3 className="text-3xl font-bold text-green-800 mb-4">Nationwide Delivery</h3>
          <p className="mb-4 text-gray-700">
            We deliver our products across all regions in Ghana — fresh, fast, and safe. Whether you're in Accra, Kumasi, Takoradi, or Tamale, you’ll get your order within 1-2 days.
          </p>
          <p className="mb-4 text-gray-700">
            We partner with trusted courier services and ensure every delivery is well-packaged to maintain product freshness and quality.
          </p>
           <Link to="/contact">
           <button 
            className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition duration-300 ease-in-out 
             transform hover:scale-105 hover:shadow-lg">
              Contact Us
            </button>
           </Link>
        </motion.div>
      </section>

      {/* Expanded Section: Training */}
      <section className="max-w-6xl mx-auto mt-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-green-800 mb-4 text-center">Training & Consultancy</h3>
          <p className="text-center mb-8 text-gray-700 max-w-3xl mx-auto">
            At CharsamFarms, we believe in empowering others. Our training programs teach people how to start, manage, and scale mushroom and snail farming businesses through practical, hands-on guidance.
          </p>
        </motion.div>

        <div className="md:flex gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}

          >
            <img
              src={training} // Replace with your actual path
              alt="Training Session"
              className="rounded-xl shadow-lg w-full"
            />
          </motion.div>
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
           
            <p className="mb-6">
              Want to learn how to build a successful mushroom or snail farm? At CharsamFarms, we offer in-depth training
              tailored to beginners, students, and even experienced farmers seeking sustainable practices.
            </p>
            <p className="mb-6">
              From hands-on workshops to one-on-one mentorship, we guide you through setup, growth, harvesting, and post-harvest handling.
            </p>
            <p className="mb-24">
              We also provide consultancy for agripreneurs and NGOs looking to incorporate sustainable agriculture into their programs.
            </p>
            <button 
            onClick={() => setShowModal(true)}
            className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition duration-300 ease-in-out 
             transform hover:scale-105 hover:shadow-lg">
              Book Training Session
            </button>
            <BookTraining isOpen={showModal} onClose={() => setShowModal(false)} />
          </motion.div>
        </div>

        {/* Video Section */}
        <div className="mt-16 px-6 max-w-4xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-semibold text-green-700 mb-4 text-center"
          >
            
          </motion.h3>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-64 rounded-xl shadow-lg"
              src="https://www.youtube.com/embed/97QrdLI7nm4"
              title="Training Session Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
