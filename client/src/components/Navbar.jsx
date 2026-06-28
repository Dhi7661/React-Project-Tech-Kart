import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const navLinkClass = ({ isActive }) =>
    `cursor-pointer transition duration-200 ${isActive ? 'text-white font-semibold' : 'text-gray-300 hover:text-white'
    }`

  return (
    <nav className='bg-[#1a1a2e] text-white sticky top-0 z-50 shadow-lg'>
      <div className='max-w-6xl mx-auto px-4 py-4 flex justify-between items-center '>

        {/* Logo */}
        <h2 className='text-2xl font-bold text-[#7c6aff] tracking-wide cursor-pointer ml-5'>
          <NavLink to='/' > 
            Tech<span className='text-white'>Kart</span>
          </NavLink>
        </h2>

        {/* Desktop Menu */}
        <ul className='hidden md:flex gap-8 items-center list-none'>
          <li className='cursor-pointer text-gray-300 hover:text-white transition duration-200'>
            <NavLink className='flex flex-col items-center' to='/'>
              Home
              <hr className='w-2/4 h-[1.5px] text-[#7c6aff] ' />
            </NavLink>
          </li>
          <li className='cursor-pointer text-gray-300 hover:text-white transition duration-200'>
            <NavLink className='flex flex-col items-center' to='/products'>
              Products
              <hr className='w-2/4 h-[1.5px] text-[#7c6aff] ' />
            </NavLink>
          </li>
          <li className='cursor-pointer text-gray-300 hover:text-white transition duration-200 relative'>
            <NavLink className='flex flex-col items-center' to='/cart'>
              Cart
              <hr className='w-2/4 h-[1.5px] text-[#7c6aff] ' />

            </NavLink>
            <span className='absolute top-0.5 left-8 bg-[#7c6aff] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center mr-5'>
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
        <div className='flex flex-col gap-4 list-none'>
          <NavLink to='/'
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `transition duration-200 border-b border-gray-700 pb-2 ${isActive ? 'text-white font-semibold' : 'text-gray-300 hover:text-white'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink to='/products'
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `transition duration-200 border-b border-gray-700 pb-2 ${isActive ? 'text-white font-semibold' : 'text-gray-300 hover:text-white'
              }`
            }
          >
            Products
          </NavLink>
          <NavLink to='/cart'
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `transition duration-200 border-b border-gray-700 pb-2 ${isActive ? 'text-white font-semibold' : 'text-gray-300 hover:text-white'
              }`
            }          >
            Cart (0)
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar