import { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import mush1 from '../assets/images/mush1.jpg';
import mush2 from '../assets/images/mush2.jpg';
import mush6 from '../assets/images/mush6.jpg';
import snail1 from '../assets/images/snail1.jpg';
import snail2 from '../assets/images/snail2.jpg';
import snail3 from '../assets/images/snail3.jpg';
import snail5 from '../assets/images/snail5.jpg';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const productsData = [
  {
    id: 1,
    category: 'Fresh Mushrooms (Oyster)',
    title: 'Fresh Oyster Mushrooms - 500g',
    description: 'Organically grown oyster mushrooms, fresh and ready to cook.',
    image: mush1,
    price: 150,
  },
  {
    id: 2,
    category: 'Fresh Mushrooms (Oyster)',
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
    image: snail2,
    price: 40,
  },
  {
    id: 4,
    category: 'Fresh Giant African Snails',
    title: 'Fresh Giant African Snails - 1/2kg',
    description: 'Nutritious and sustainably farmed snails.',
    image: snail3,
    price: 20,
  },
  {
    id: 5,
    category: 'Fresh Giant African Snails',
    title: 'Fresh Giant African Snails - 2kg',
    description: 'Nutritious and sustainably farmed snails.',
    image: snail5,
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
   {
    id: 7,
    category: 'Fresh Mushrooms (Oyster)',
    title: 'Dried Oyster Mushrooms - 300g',
    description: 'Flavor-packed dried mushrooms, perfect for soups and stews.',
    image: mush6,
    price: 90,
  },
];

const categories = [
  'All',
  'Fresh Mushrooms (Oyster)',
  'Fresh Giant African Snails',
];

const Products = ({cart, setCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
 

  const filteredProducts =
    selectedCategory === 'All'
      ? productsData
      : productsData.filter((p) => p.category === selectedCategory);

  // Add to Cart with quantity
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        toast.info(`${product.title} quantity updated`, { icon: "🛒" });
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        toast.success(`${product.title} successfully added to cart!`, { icon: "✅" });
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  

  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center text-green-800 mb-10">
        Our Products
      </h1>

      {/* Category Filters */}
    <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
  {/* Category Filters centered */}
  <div className="flex flex-wrap justify-center gap-4 flex-1">
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

  {/* Go to Cart button aligned to right */}
  <div className="w-full md:w-auto flex justify-center md:justify-end">
    <Link to="/mycart">
      <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
        Go to Cart
      </button>
    </Link>
  </div>
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
     
    </div>
  );
};

export default Products;
