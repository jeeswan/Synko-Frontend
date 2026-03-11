import React, { useState, useEffect } from 'react'
import assets from '../../assets/assets.js'

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 50) {  
            setScrolled(true)
        } else {
            setScrolled(false)
        }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-15 py-10 h-16 border-b-2 border-gray-300 shadow z-50 transition-colors duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-lg' : 'bg-white'
      }`}
    >
      {/* Logo */}
      <div className="flex flex-row items-center gap-3 text-xl font-bold text-gray-800">
        <img src={assets.logo_synko} alt="Synko Logo" className="w-18 h-14" />
        <h1 className='text-3xl text-gray-800'>Synko</h1>
      </div>

      {/* Auth buttons */}
      <div className="flex items-center gap-4">
        <a href='/login' className="text-gray-600 rounded-3xl hover:bg-gray-100 py-2 px-6 hover:text-gray-800 transition">
          Login
        </a>
        <a href='/signup' className="text-gray-100 rounded-3xl bg-blue-600 hover:bg-blue-700 py-2 px-6 hover:text-gray-300 transition">
          Signup
        </a>
      </div>
    </nav>
  )
}

export default NavBar
