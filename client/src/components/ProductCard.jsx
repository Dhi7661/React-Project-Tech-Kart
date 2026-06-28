import { Link, NavLink } from 'react-router-dom'

import React from 'react'


const ProductCard = ({ product }) => {
  return (
    <div className='bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col'>

      {/* Product Image */}
      <Link to={`/product/${product.id}`}>
        <div className='overflow-hidden h-44 sm:h-48'>
          <img
            src={product.image}
            alt={product.name}
            className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
          />
        </div>
      </Link>

      {/* Product Info */}
      <div className='flex flex-col flex-1 p-3 sm:p-4'>

        {/* Category Badge */}
        <span className='text-xs font-medium text-[#7c6aff] bg-purple-50 px-2 py-1 rounded-full w-fit'>
          {product.category}
        </span>

        {/* Product Name */}
        <h3 className='text-gray-800 font-semibold text-sm sm:text-base mt-2 mb-1 line-clamp-1'>
          {product.name}
        </h3>

        {/* Rating */}
        <p className='text-yellow-500 text-xs sm:text-sm mb-2'>
          {'★'.repeat(Math.floor(product.rating))}
          {'☆'.repeat(5 - Math.floor(product.rating))}
          <span className='text-gray-400 ml-1 text-xs'>
            ({product.rating})
          </span>
        </p>

        {/* Price */}
        <p className='text-lg sm:text-xl font-bold text-gray-900 mb-3'>
          ₹{product.price.toLocaleString()}
        </p>

        {/* Buttons — pushed to bottom */}
        <div className='flex gap-2 mt-auto'>
          <button className='flex-1 bg-[#1a1a2e] text-white text-xs sm:text-sm py-2 px-2 sm:px-3 rounded-xl hover:bg-[#7c6aff] transition-colors duration-200 font-medium'>
            Add to Cart
          </button>
          <button className='flex-1 border-2 border-[#1a1a2e] text-[#1a1a2e] text-xs sm:text-sm py-2 px-2 sm:px-3 rounded-xl hover:bg-[#1a1a2e] hover:text-white transition-colors duration-200 font-medium'>
            Buy Now
          </button>
        </div>

      </div>
    </div>
  )
}

export default ProductCard