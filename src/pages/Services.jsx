import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaTruck, FaChalkboardTeacher } from 'react-icons/fa';

const Services = () => {
  return (
    <div className="bg-white text-gray-800 px-6 py-12 md:py-20">
      <div className="max-w-6xl mx-auto text-center">
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

        <div className="grid md:grid-cols-3 gap-10 text-left">
          {/* Fresh Produce */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-green-50 p-6 rounded-xl shadow-md hover:shadow-xl"
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
            className="bg-green-50 p-6 rounded-xl shadow-md hover:shadow-xl"
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
            className="bg-green-50 p-6 rounded-xl shadow-md hover:shadow-xl"
          >
            <FaChalkboardTeacher className="text-green-700 text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Training & Consultancy</h3>
            <p className="text-gray-700">
              Learn to start and manage your own mushroom or snail farm. We provide hands-on training, workshops, and ongoing mentorship.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
