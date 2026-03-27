import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div>
      <div className='bg-[#1f1f1f] p-5 shadow-2xl'>
        
        <h1 className='text-white text-2xl md:text-3xl text-center mb-4'>Contact us through</h1>
        <div className='text-white text-3xl flex gap-6 justify-center'>
          <Link to="https://wa" target="_blank"className="cursor-pointer transition hover:text-green-500 hover:scale-110 duration-200 hover:drop-shadow-[0_0_6px_#22c55e] "><FaWhatsapp /></Link>
          <Link to="https://www.instagram.com" target="_blank" className='cursor-pointer transition hover:text-[#ff0090] hover:scale-110 duration-200 hover:drop-shadow-[0_0_6px_#ff0090]'><IoLogoInstagram /></Link>
          <Link to="https://facebook.com" target="_blank" className='cursor-pointer transition hover:text-blue-600 hover:scale-110 duration-200 hover:drop-shadow-[0_0_6px_#2563eb]'><FaFacebookF /></Link>
          <Link to="https://x.com" target="_blank" className='cursor-pointer transition hover:text-white hover:scale-110 duration-200  hover:drop-shadow-[0_0_6px_white]'><FaXTwitter /></Link>
        </div>

      </div>
    </div>
  )
}

export default Footer

