import { useState } from 'react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className='bg-[#1a1a2e] text-white sticky top-0 z-50 shadow-lg'>
      <div className='max-w-6xl mx-auto px-4 py-4 flex justify-between items-center'>

        {/* Logo */}
        <h2 className='text-2xl font-bold text-[#7c6aff] tracking-wide cursor-pointer'>
          Tech<span className='text-white'>Kart</span>
        </h2>

        {/* Desktop Menu */}
        <ul className='hidden md:flex gap-8 items-center list-none'>
          <li className='cursor-pointer text-gray-300 hover:text-white transition duration-200'>
            Home
          </li>
          <li className='cursor-pointer text-gray-300 hover:text-white transition duration-200'>
            Products
          </li>
          <li className='cursor-pointer text-gray-300 hover:text-white transition duration-200 relative'>
            Cart
            <span className='absolute -top-2 -right-4 bg-[#7c6aff] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>
              0
            </span>
          </li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className='md:hidden flex flex-col gap-1.5 cursor-pointer'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-[#16213e] px-4 overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-60 py-4' : 'max-h-0'}`}>
        <ul className='flex flex-col gap-4 list-none'>
          <li
            onClick={() => setMenuOpen(false)}
            className='cursor-pointer text-gray-300 hover:text-white transition duration-200 border-b border-gray-700 pb-2'
          >
            Home
          </li>
          <li
            onClick={() => setMenuOpen(false)}
            className='cursor-pointer text-gray-300 hover:text-white transition duration-200 border-b border-gray-700 pb-2'
          >
            Products
          </li>
          <li
            onClick={() => setMenuOpen(false)}
            className='cursor-pointer text-gray-300 hover:text-white transition duration-200'
          >
            Cart (0)
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar