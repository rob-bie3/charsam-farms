import { AnimatePresence, motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import teamImage from '../assets/images/img3.jpg'; 
import mush1 from '../assets/images/mush1.jpg';
import mush2 from '../assets/images/mush2.jpg';
import snail1 from '../assets/images/snail1.jpg';
import { useEffect, useState } from 'react';
import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import farmer from '../assets/images/farmer.jpg';
import mushvid from '../assets/videos/mushvid.mp4';
import { Link } from 'react-router-dom';

const featuredProducts = [
  {
    image: img1,
    title: 'Fresh Oyster Mushrooms',
    description: 'Locally grown, organic mushrooms delivered fresh to your doorstep.',
  },
  {
    image: img2,
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
    <div className="space-y-16">
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
             <Link to='/about'>
              <button className="border border-green-700 text-green-700 px-6 py-3 rounded-xl hover:bg-green-100">
                Learn More
              </button>
             </Link>
            </div>
          </motion.div>

          {/* Image Section with Framer Motion Carousel */}
          <div className="flex-1 mt-10 md:mt-0 relative h-[300px] md:h-[400px] w-full rounded-xl overflow-hidden shadow-lg">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={heroImages[currentImageIndex]}
                alt="Farm Showcase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="w-full h-full object-cover absolute top-0 left-0"
              />
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="container mx-auto px-6 text-center">
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
      </section>

      {/* Featured Products */}
      <section className="bg-green-50 py-16 px-6">
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

      {/* About the Owner */}
      <section className="container mx-auto px-6 text-center py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-green-800 mb-6">Meet the Founder</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <img
              src={farmer}
              alt="Founder"
              className="w-96 h-96 rounded-full object-cover shadow-md"
            />
            <p className="max-w-xl text-gray-700 text-lg">
              Our founder is a passionate agro-entrepreneur with years of experience in mushroom and snail farming.
              Motivated by a vision for sustainable food systems and community empowerment, they bring innovation and
              care to every aspect of the business—from farm to table.
            </p>
          </div>
        </motion.div>
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
        src= {mushvid} // <-- Replace with your actual video path
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
          <button className="bg-white text-green-700 px-8 py-4 rounded-xl font-semibold mt-4 hover:bg-green-100 transition">
            Visit Our Shop
          </button>
        </motion.div>
      </div>
    </section>

<section id="testimonials" className="bg-gray-100 py-20 px-6 text-center">
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

    </div>
  );
}

export default Home;
