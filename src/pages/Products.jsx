// import React from 'react'

// const Products = () => {
//   return (
//     <div className="p-8">Products Page</div>
//   )
// }

// export default Products;




// src/pages/Products.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';

const productsData = [
  {
    id: 1,
    category: 'Fresh Mushrooms (Oyster)',
    title: 'Fresh Oyster Mushrooms - 500g',
    description: 'Organically grown oyster mushrooms, fresh and ready to cook.',
    image: '/assets/fresh-mushroom.jpg',
    price: '₵25',
  },
  {
    id: 2,
    category: 'Dried and Packaged Mushrooms',
    title: 'Dried Oyster Mushrooms - 100g',
    description: 'Flavor-packed dried mushrooms, perfect for soups and stews.',
    image: '/assets/dried-mushroom.jpg',
    price: '₵30',
  },
  {
    id: 3,
    category: 'Fresh Giant African Snails',
    title: 'Fresh Giant African Snails - 1kg',
    description: 'Nutritious and sustainably farmed snails.',
    image: '/assets/giant-snails.jpg',
    price: '₵40',
  },
  {
    id: 4,
    category: 'Snail Slime (Coming soon)',
    title: 'Snail Slime Extract (Coming Soon)',
    description: 'High-quality snail slime for cosmetic and pharmaceutical use.',
    image: '/assets/snail-slime.jpg',
    price: '₵TBD',
  },
];

const categories = [
  'All',
  'Fresh Mushrooms (Oyster)',
  'Dried and Packaged Mushrooms',
  'Fresh Giant African Snails',
  'Snail Slime (Coming soon)',
];

const Products =() => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts =
    selectedCategory === 'All'
      ? productsData
      : productsData.filter((p) => p.category === selectedCategory);

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
            <p className="text-lg font-bold text-green-700 mb-4">{product.price}</p>
            <button className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition-all">
              Order Now
            </button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Products;
