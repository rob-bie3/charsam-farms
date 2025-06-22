import { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import PaystackPop from '@paystack/inline-js'; // <-- paystack inline sdk
import mush1 from '../assets/images/mush1.jpg';
import mush2 from '../assets/images/mush2.jpg';
import snail1 from '../assets/images/snail1.jpg';

const productsData = [
  {
    id: 1,
    category: 'Fresh Mushrooms (Oyster)',
    title: 'Fresh Oyster Mushrooms - 500g',
    description: 'Organically grown oyster mushrooms, fresh and ready to cook.',
    image: mush1,
    price: 25,
  },
  {
    id: 2,
    category: 'Dried and Packaged Mushrooms',
    title: 'Dried Oyster Mushrooms - 100g',
    description: 'Flavor-packed dried mushrooms, perfect for soups and stews.',
    image: mush2,
    price: 30,
  },
  {
    id: 3,
    category: 'Fresh Giant African Snails',
    title: 'Fresh Giant African Snails - 1kg',
    description: 'Nutritious and sustainably farmed snails.',
    image: snail1,
    price: 40,
  },
];

const categories = [
  'All',
  'Fresh Mushrooms (Oyster)',
  'Dried and Packaged Mushrooms',
  'Fresh Giant African Snails',
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState([]);

  const filteredProducts =
    selectedCategory === 'All'
      ? productsData
      : productsData.filter((p) => p.category === selectedCategory);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleCheckout = () => {
    const paystack = new PaystackPop();
    const totalAmount = cart.reduce((sum, item) => sum + item.price, 0) * 100; // paystack uses kobo

    paystack.newTransaction({
      key: 'YOUR_PAYSTACK_PUBLIC_KEY',
      amount: totalAmount,
      email: 'customer@example.com', // You can make a form to capture email
      currency: 'GHS',
      onSuccess: (transaction) => {
        alert(`Payment Complete! Reference: ${transaction.reference}`);
        setCart([]); // Clear cart after payment
      },
      onCancel: () => {
        alert('Payment Cancelled');
      },
    });
  };

  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center text-green-800 mb-10">Our Products</h1>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full border ${
              selectedCategory === cat
                ? 'bg-green-700 text-white border-green-700'
                : 'bg-white text-green-700 border-green-400 hover:bg-green-50'
            } transition`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-xl border shadow-sm p-4 bg-white"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold text-green-800 mb-2">{product.title}</h3>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="text-lg font-bold text-green-700 mb-4">₵{product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition-all w-full"
            >
              Add to Cart
            </button>
          </motion.div>
        ))}
      </motion.div>

      {/* Cart & Checkout */}
      {cart.length > 0 && (
        <div className="mt-16 bg-green-50 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-green-800 mb-4">Your Cart</h2>
          <ul className="mb-6 space-y-2">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between text-green-700">
                <span>{item.title}</span>
                <span>₵{item.price}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg font-semibold mb-4">
            Total: ₵{cart.reduce((sum, item) => sum + item.price, 0)}
          </p>
          <button
            onClick={handleCheckout}
            className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 w-full"
          >
            Checkout with Paystack
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
