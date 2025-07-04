import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaSeedling, FaAward, FaRegSmileBeam } from 'react-icons/fa';
import workers from '../assets/images/workers.jpg';
import founder1 from '../assets/images/founder1.jpg';
import { FaUserTie } from 'react-icons/fa6';
import ac from '../assets/images/ac.jpg'
import ag from '../assets/images/ag.jpg'

const About = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] w-full overflow-hidden mb-12">
        <img
          src={workers}
          alt="About CharsamFarms"
          className="absolute inset-0 w-full h-screen object-cover brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white text-center px-4"
          >
            About CharsamFarms
          </motion.h1>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Who We Are</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Kwame Charsam Farms is a registered agribusiness founded in 2018 by Samuel Kwame Yeboah. We specialize in the sustainable farming of mushrooms (oyster mushrooms) and African giant snails. Our passion is to promote eco-friendly agriculture and empower communities.
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
            <div className="flex items-center mb-4 text-green-700">
              <FaLeaf className="text-3xl mr-3" />
              <h3 className="text-2xl font-semibold">Our Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To provide high-quality, nutritious, and organically grown mushrooms and snails to local markets while promoting food security and creating employment, especially for youth and women in Kumasi and Sunyani.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-4 text-green-700">
              <FaSeedling className="text-3xl mr-3" />
              <h3 className="text-2xl font-semibold">Our Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To expand production, improve infrastructure, and enhance value addition to meet increasing market demand. To become a leading force in sustainable agro-processing, inspiring a new generation of farmers through innovation, education, and environmental stewardship.
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
          <div className="flex items-center mb-4 text-green-700">
            <FaRegSmileBeam className="text-3xl mr-3" />
            <h3 className="text-2xl font-semibold">Our Story</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Charsam Farms was born out of a passion for nature and a desire to solve the food waste and nutrition challenges in Ghana. Starting with just a few mushroom logs and determination, we’ve grown into a brand trusted for quality, innovation, and sustainability. From training young farmers to supplying local markets, we are committed to creating long-term impact.
          </p>
        </motion.div>

        {/* Certifications & Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center mb-4 text-green-700">
            <FaAward className="text-3xl mr-3" />
            <h3 className="text-2xl font-semibold">Certifications & Achievements</h3>
          </div>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Ghana FDA Certified (2020)</li>
            <li>50+ farmers trained in sustainable mushroom & snail farming</li>
            <li>ISO-compliant organic farming practices under development</li>
          </ul>
        </motion.div>
         {/* Meet the Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="my-16 text-center"
        >
          <div className="flex items-center justify-center mb-4 text-green-700">
            <FaUserTie className="text-3xl mr-3" />
            <h3 className="text-3xl font-semibold">Meet the Team</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            {/* Founder */}
            <div className="bg-green-50 rounded-lg p-6 shadow text-center">
              <img
                src={founder1}
                alt="Samuel Kwame Yeboah"
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
              />
              <h4 className="text-xl font-bold text-green-800 mb-1">Samuel Kwame Yeboah</h4>
              <p className="text-green-600 mb-2">Founder & CEO</p>
              <p className="text-gray-700 text-sm">
                An agro-entrepreneur passionate about sustainable agriculture and community development.
              </p>
            </div>

            {/* Team Member 1 */}
            <div className="bg-green-50 rounded-lg p-6 shadow text-center">
              <img
                src={ag}
                alt="Team Member 1"
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
              />
              <h4 className="text-xl font-bold text-green-800 mb-1">Madam Twenewaa Charity</h4>
              <p className="text-green-600 mb-2">Assistant general</p>
              <p className="text-gray-700 text-sm">
                Expert in quality control, mushroom production, and farmer training.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-green-50 rounded-lg p-6 shadow text-center">
              <img
                src={ac}
                alt="Team Member 2"
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
              />
              <h4 className="text-xl font-bold text-green-800 mb-1">Mr Agyenim Beaten</h4>
              <p className="text-green-600 mb-2">Marketing & Sales Officer</p>
              <p className="text-gray-700 text-sm">
                Driving local market connections and educating customers about our products.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
