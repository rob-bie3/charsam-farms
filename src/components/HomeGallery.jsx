// components/HomeGallery.js
import React from 'react';
import { Link } from 'react-router-dom'; // or `next/link` if using Next.js
import workers from '../assets/images/workers.jpg';
import workers1 from '../assets/images/workers1.jpg';
import workers2 from '../assets/images/workers2.jpg';
// import gallery4 from '../assets/gallery4.jpg';
// import gallery5 from '../assets/gallery5.jpg';
// import gallery6 from '../assets/gallery6.jpg';

const images = [workers, workers1, workers2];

const HomeGallery = () => {
  return (
    <section className="bg-white py-12 px-6 text-center">
      <h2 className="text-3xl font-bold text-green-800 mb-6">Gallery</h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-10">
        A glimpse of our fresh produce, training sessions, and behind-the-scenes moments.
      </p>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {images.map((img, i) => (
          <div key={i} className="overflow-hidden rounded-xl shadow hover:shadow-lg transition duration-300">
            <img
              src={img}
              alt={`Gallery item ${i + 1}`}
              className="w-full h-screen object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      <Link
        to="/gallery"
        className="inline-block mt-10 bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition"
      >
        View More
      </Link>
    </section>
  );
};

export default HomeGallery;
