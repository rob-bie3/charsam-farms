import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="bg-primary text-black min-h-[80vh] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Fresh Snails & Mushrooms from Nature to Your Table
        </h1>
        <p className="text-lg mb-6">Organic. Local. Sustainable.</p>
        <button className="bg-white text-primary px-6 py-3 rounded-xl font-semibold hover:bg-secondary hover:text-white">
          Explore Products
        </button>
      </motion.div>
    </section>
  );
}
