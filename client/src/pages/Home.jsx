import React from 'react'
import ProductCard from '../components/ProductCard'
import products from '../data/products'

const Home = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 py-8'>

      {/* Hero Section */}
      <div className='text-center mb-10'>
        <h1 className='text-3xl sm:text-4xl font-bold text-gray-800 mb-3'>
          Welcome to <span className='text-[#7c6aff]'>TechKart</span>
        </h1>
        <p className='text-gray-500 text-base sm:text-lg'>
          Your one stop shop for electronics accessories
        </p>
      </div>

      {/* Products Heading */}
      <h2 className='text-xl sm:text-2xl font-bold text-gray-700 mb-6'>
        Featured Products
      </h2>

      {/* Products Grid */}
      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </div>
  )
}

export default Home