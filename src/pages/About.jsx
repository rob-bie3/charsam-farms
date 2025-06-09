import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-white text-gray-800 px-6 py-12 md:py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">About CharsamFarms</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Empowering communities through sustainable mushroom and snail farming practices in Ghana.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              To promote food security and environmental sustainability by producing high-quality, eco-friendly mushrooms and snails while providing education and resources to empower smallholder farmers and local communities.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              To become a leading force in sustainable agro-processing, inspiring a new generation of farmers through innovation, education, and environmental stewardship.
            </p>
          </motion.div>
        </div>

        {/* Our Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Our Story</h2>
          <p className="text-gray-700 leading-relaxed">
            CharsamFarms was born out of a passion for nature and a desire to solve the food waste and nutrition challenges in Ghana. Starting with just a few mushroom logs and determination, we’ve grown into a brand trusted for quality, innovation, and sustainability. From training young farmers to exporting premium produce, we are committed to creating long-term impact.
          </p>
        </motion.div>

        {/* Certifications & Achievements (optional) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Certifications & Achievements</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Ghana FDA Certified (2024)</li>
            <li>AgriBiz Innovation Grant Winner – Central Region (2023)</li>
            <li>500+ farmers trained in sustainable mushroom & snail farming</li>
            <li>ISO-compliant organic farming practices under development</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
