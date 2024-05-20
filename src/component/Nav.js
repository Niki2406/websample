
import React from 'react'
import logo from '../assets/logo.png';
const Nav =() => {
  return (
   
    <nav className="bg-[#262626] p-4 flex items-center justify-between">
    <div className="flex items-center">
      <img src={logo} alt="Logo" className="h-10 w-10 mr-3" />
      <span className="text-white text-xl font-bold">enatomarket</span>
    </div>
    <button className="bg-[#61CE70] text-white px-4 py-2 rounded hover:bg-green-600">
      Buy Now
    </button>
  </nav>
) 
  
  
   
}
export default Nav