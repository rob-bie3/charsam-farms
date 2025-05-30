import React from 'react'

const TeamCard = ({ image, name, role }) => {
  return (
    <div className="text-center">
      <img src={image} alt={name} className="w-32 h-32 rounded-full mx-auto object-cover" />
      <h4 className="mt-2 text-lg font-medium">{name}</h4>
      <p className="text-gray-500">{role}</p>
    </div>
  )
}

export default TeamCard;