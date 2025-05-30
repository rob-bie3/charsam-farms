import React from 'react'

const Footer = () => {
  return (
     <footer className="bg-secondary text-black p-4 text-center">
      <p>&copy; {new Date().getFullYear()} AgroFarm. All rights reserved.</p>
    </footer>
  )
}

export default Footer;