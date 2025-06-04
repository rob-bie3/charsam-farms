import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import teamImage from '../assets/images/img3.jpg'; 
import logo from '../assets/images/img3.jpg';

const featuredProducts = [
  {
    image: '/assets/fresh-mushroom.jpg',
    title: 'Fresh Oyster Mushrooms',
    description: 'Locally grown, organic mushrooms delivered fresh to your doorstep.',
  },
  {
    image: '/assets/dried-mushroom.jpg',
    title: 'Dried & Packaged Mushrooms',
    description: 'Long-lasting, flavor-packed mushrooms perfect for any dish.',
  },
  {
    image: '/assets/giant-snails.jpg',
    title: 'Giant African Snails',
    description: 'Nutritious and protein-rich delicacy, ethically farmed.',
  },
];

const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-100 to-white py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <img src={logo} alt="Logo" className="w-20 h-20 mx-auto md:mx-0 mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
              Sustainable Farming for a Healthier Future
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Providing fresh mushrooms, snails, and agricultural consultancy to nourish people and the planet.
            </p>
            <div className="space-x-4">
              <button className="bg-green-700 text-white px-6 py-3 rounded-xl hover:bg-green-800 transition-all">
                Shop Now
              </button>
              <button className="border border-green-700 text-green-700 px-6 py-3 rounded-xl hover:bg-green-100">
                Learn More
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 mt-10 md:mt-0"
          >
            <img src="/assets/farm-showcase.jpg" alt="Farm Showcase" className="rounded-xl shadow-lg" />
          </motion.div>
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
              src={teamImage}
              alt="Founder"
              className="w-40 h-40 rounded-full object-cover shadow-md"
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
      <section className="bg-green-700 text-white py-16 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to experience fresh, sustainable farming?</h2>
          <button className="bg-white text-green-700 px-8 py-4 rounded-xl font-semibold mt-4 hover:bg-green-100">
            Visit Our Shop
          </button>
        </motion.div>
      </section>
    </div>
  );
}

export default Home;
