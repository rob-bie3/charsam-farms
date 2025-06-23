import { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import PaystackPop from '@paystack/inline-js'; // paystack inline sdk
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
  {
    id: 4,
    category: 'Fresh Giant African Snails',
    title: 'Fresh Giant African Snails - 1/2kg',
    description: 'Nutritious and sustainably farmed snails.',
    image: snail1,
    price: 20,
  },
  {
    id: 5,
    category: 'Fresh Giant African Snails',
    title: 'Fresh Giant African Snails - 2kg',
    description: 'Nutritious and sustainably farmed snails.',
    image: snail1,
    price: 80,
  },
  {
    id: 6,
    category: 'Fresh Giant African Snails',
    title: 'Fresh Giant African Snails - 3kg',
    description: 'Nutritious and sustainably farmed snails.',
    image: snail1,
    price: 120,
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

  // Add to Cart with quantity
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Update quantity
  const updateQuantity = (productId, newQty) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId
          ? { ...item, quantity: newQty >= 1 ? newQty : 1 }
          : item
      )
    );
  };

  // Remove from cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Total amount
  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Checkout
  const handleCheckout = () => {
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: 'YOUR_PAYSTACK_PUBLIC_KEY', // replace with your Paystack public key
      amount: totalAmount * 100,
      email: 'customer@example.com', // optional: add form to collect email
      currency: 'GHS',
      onSuccess: (transaction) => {
        alert(`Payment Complete! Reference: ${transaction.reference}`);
        setCart([]);
      },
      onCancel: () => {
        alert('Payment Cancelled');
      },
    });
  };

  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center text-green-800 mb-10">
        Our Products
      </h1>

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
            className="flex flex-col justify-between rounded-xl border shadow-sm p-4 bg-white h-full"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold text-green-800 mb-2">
              {product.title}
            </h3>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="text-lg font-bold text-green-700 mb-4">
              ₵{product.price}
            </p>
            <button
              onClick={() => addToCart(product)}
              className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition-all w-full mt-auto"
            >
              Add to Cart
            </button>
          </motion.div>
        ))}
      </motion.div>

      {/* Cart Section */}
      {cart.length > 0 && (
        <div className="mt-16 bg-green-50 p-6 rounded-xl shadow-md overflow-x-auto">
          <h2 className="text-2xl font-bold text-green-800 mb-4">Your Cart</h2>
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="bg-green-700 text-white">
                <th className="px-4 py-2">Product</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Quantity</th>
                <th className="px-4 py-2">Total</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} className="border-b text-green-900">
                  <td className="px-4 py-2 flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-gray-500 text-xs">{item.category}</p>
                    </div>
                  </td>
                  <td className="px-4 py-2">₵{item.price}</td>
                  <td className="px-4 py-2">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value))
                      }
                      className="border rounded px-2 w-16 text-center"
                    />
                  </td>
                  <td className="px-4 py-2 font-semibold">
                    ₵{item.price * item.quantity}
                  </td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-end mt-6">
            <div className="text-lg font-semibold text-green-800">
              Total Amount: ₵{totalAmount}
            </div>
          </div>

          <button
            onClick={handleCheckout}
            className="mt-4 bg-green-700 text-white px-8 py-3 rounded-lg hover:bg-green-800 w-full md:w-auto"
          >
            Checkout with Paystack
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
