import { useState } from 'react'
import products from '../data/products'
import ProductCard from '../components/ProductCard'

// All unique categories from products array
const categories = ['All', 'Headphones', 'Smartwatch', 'Keyboard', 'Mouse', 'Charger', 'Laptop Accessories', 'Mobile Accessories']

const Products = () => {

  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('default')

  // Step 1 — Filter products by selected category
  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter((p) => p.category === selectedCategory)

  // Step 2 — Sort the filtered products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'lowToHigh') return a.price - b.price
    if (sortBy === 'highToLow') return b.price - a.price
    return 0
  })

  return (
    <div className='max-w-7xl mx-auto px-4 py-8'>

      {/* Page Title */}
      <div className='mb-8'>
        <h1 className='text-3xl sm:text-4xl font-bold text-gray-800'>
          All Products
        </h1>
        <p className='text-gray-500 mt-1'>
          Showing {sortedProducts.length} products
        </p>
      </div>

      <nav className=' sticky top-16 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm -mx-4 px-4 py-2 mb-8'>

        {/* Filter and Sort Bar */}
        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-2'>

          {/* Category Filter Buttons */}
          <div className='flex flex-wrap gap-2'>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200
              ${selectedCategory === category
                    ? 'bg-[#7c6aff] text-white shadow-md'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-[#7c6aff] hover:text-[#7c6aff]'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className='bg-white border border-gray-200 text-gray-600 text-sm rounded-lg px-3 py-2 outline-none cursor-pointer hover:border-[#7c6aff] transition-colors duration-200'
          >
            <option value='default'>Sort by: Default</option>
            <option value='lowToHigh'>Price: Low to High</option>
            <option value='highToLow'>Price: High to Low</option>
          </select>

        </div>

      </nav>
      {/* Products Grid */}
      {sortedProducts.length === 0 ? (
        <div className='text-center py-20'>
          <p className='text-5xl mb-4'>🔍</p>
          <h3 className='text-xl font-semibold text-gray-700 mb-2'>
            No products found
          </h3>
          <p className='text-gray-400'>
            Try selecting a different category
          </p>
          <button
            onClick={() => setSelectedCategory('All')}
            className='mt-4 text-white bg-[#7c6aff] p-3 px-4 rounded-3xl font-medium '
          >
            Show all products
          </button>
        </div>
      ) : (
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6'>
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

    </div>
  )
}

export default Products