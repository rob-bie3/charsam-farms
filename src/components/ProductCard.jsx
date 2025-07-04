import React from 'react'

const ProductCard = ({ image, title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden">
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

export default ProductCard;