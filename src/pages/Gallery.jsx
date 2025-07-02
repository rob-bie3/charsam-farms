// pages/Gallery.jsx
import React from 'react';
// import galleryImages from '../data/galleryImages'; // Optional: separate image list

const Gallery = () => {
  return (
    <div className="bg-white px-6 py-12 md:py-20 text-gray-800">
      <h1 className="text-4xl font-bold text-green-800 mb-10 text-center">Full Gallery</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {/* {galleryImages.map((img, index) => (
          <div key={index} className="rounded-xl overflow-hidden shadow hover:shadow-lg transition">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Gallery;
