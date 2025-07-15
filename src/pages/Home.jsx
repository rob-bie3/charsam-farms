import { AnimatePresence, motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import mush1 from '../assets/images/mush1.jpg';
import mush2 from '../assets/images/mush2.jpg';
import snail1 from '../assets/images/snail1.jpg';
import { useEffect, useState } from 'react';
import img2 from '../assets/images/img2.jpg';
import mush6 from '../assets/images/mush6.jpg';
import founder4 from '../assets/images/founder4.jpg';
import mushvid from '../assets/videos/mushvid.mp4';
import { Link } from 'react-router-dom';
import { FaLeaf, FaTruck, FaChalkboardTeacher } from 'react-icons/fa';
// import HomeGallery from '../components/HomeGallery';

const featuredProducts = [
  {
    image: img2,
    title: 'Fresh Oyster Mushrooms',
    description: 'Locally grown, organic mushrooms delivered fresh to your doorstep.',
  },
  {
    image: mush6,
    title: 'Dried & Packaged Mushrooms',
    description: 'Long-lasting, flavor-packed mushrooms perfect for any dish.',
  },
  {
    image: snail1,
    title: 'Giant African Snails',
    description: 'Nutritious and protein-rich delicacy, ethically farmed.',
  },
];

const testimonials = [
  {
    name: "Ama Boateng",
    comment: "CharsamFarms changed the way I view food. Their mushrooms are the freshest I've ever had!",
  },
  {
    name: "Kwesi Appiah",
    comment: "Excellent training and great customer service. I’m starting my own snail farm thanks to them!",
  },
  {
    name: "Nana Efua",
    comment: "Their eco-conscious approach is admirable. I love supporting such a purpose-driven business.",
  },
];

const heroImages = [mush1, mush2, snail1];


const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); // every 5 seconds

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="space-y-16 bg-green-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-100 to-white py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
              Sustainable Farming for a Healthier Future
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Providing fresh mushrooms, snails, and agricultural consultancy to nourish people and the planet.
            </p>
            <div className="space-x-4">
              <Link to='/products'>
                <button className="bg-green-700 text-white px-6 py-3 rounded-xl hover:bg-green-800 transition-all">
                  Shop Now
                </button>
              </Link>
              <Link to='/contact'>
                <button className="border border-green-700 text-green-700 px-6 py-3 rounded-xl hover:bg-green-200">
                  Contact us
                </button>
              </Link>
            </div>
          </motion.div>

          <div className="flex-1 mt-6 md:mt-0 rounded-xl overflow-hidden shadow-lg min-h-[300px] md:min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={heroImages[currentImageIndex]}
                alt="Farm Showcase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* About us*/}
      <section className="bg-green-100 pb-12 md:py-20">
        <h2 className="text-4xl font-bold text-green-800 mb-12 text-center">About Us</h2>
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-shrink-0 w-full md:w-1/2 max-w-md"
          >
            <img
              src={founder4}
              alt="Founder"
              className="rounded-xl object-cover w-full h-auto  cursor-pointer shadow-lg"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-left w-full md:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-6 leading-tight">
              Providing Transparency <br className="hidden md:block" /> That You Deserve
            </h2>

            <p className="text-yellow-900 font-bold mb-4 text-lg leading-relaxed">
              At Charsam Farms, we believe in giving you full confidence in the food you consume.
              We farm sustainably so that you know exactly where your products come from — fresh, healthy, and locally grown.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              From our mushrooms to our African snails, every product is cultivated with care, using eco-friendly methods.
              We are committed to transparency, community impact, and promoting healthier diets through quality agro-products.
            </p>

            <Link to='/about' >
              <button className="bg-yellow-400 text-green-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition">
                Learn More About Us
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="container mx-auto py-12 px-6 text-center bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-green-800 mb-4">What We Do</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We specialize in sustainable mushroom and snail farming. Our mission is to promote eco-friendly food sources,
            enhance local nutrition, and provide training and consultancy for aspiring farmers.
          </p>
        </motion.div>

        <div className="grid my-12 md:grid-cols-3 gap-10 text-left">
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

{/* Learn More Button */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <Link
      to="/services"
      className="inline-block bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition"
    >
      Learn More
    </Link>
  </motion.div>

      </section>

      {/* Featured Products */}
      <section className="bg-green-100 py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-10">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="relative h-[450px] md:h-[500px] overflow-hidden mb-20">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src={mushvid} // <-- Replace with your actual video path
        ></video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-green-900 bg-opacity-60 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-white px-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to experience fresh, sustainable farming?
            </h2>
            <Link to='/products'>
              <button className="bg-white text-green-700 px-8 py-4 rounded-xl font-semibold mt-4 hover:bg-green-100 transition">
                Visit Our Shop
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section id="testimonials" className=" py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-green-900">What Our Customers Say</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-700 italic mb-4">“{t.comment}”</p>
              <h4 className="font-semibold text-green-800">{t.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

{/* <HomeGallery/> */}
    </div>
  );
}

export default Home;
