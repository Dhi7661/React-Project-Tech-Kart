import { useParams } from 'react-router-dom'
import products from '../data/products'
import { Link, NavLink } from 'react-router-dom'

const ProductDetails = () => {

  // Step 1 — get the id from the URL
  const { id } = useParams()

  // Step 2 — find the product that matches the id
  const product = products.find((p) => p.id === Number(id))

  // Step 3 — if product not found show message
  if (!product) {
    return (
      <div className='max-w-6xl mx-auto px-4 py-16 text-center'>
        <h2 className='text-2xl font-bold text-gray-700'>
          Product not found!
        </h2>
        <Link
          to='/'
          className='text-[#7c6aff] underline mt-4 inline-block'
        >
          Go back to Home
        </Link>
      </div>
    )
  }

  return (
     <div className='max-w-5xl mx-auto px-4 py-10'>

      {/* Back Button */}
      <Link
        to='/'
        className='text-[#7c6aff] font-medium hover:underline mb-6 inline-block'
      >
        ← Back to Products
      </Link>

      {/* Product Details Card */}
      <div className='bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row'>

        {/* Left — Image */}
        <div className='md:w-1/2 h-64 md:h-auto'>
          <img
            src={product.image}
            alt={product.name}
            className='w-full h-full object-cover'
          />
        </div>

        {/* Right — Info */}
        <div className='md:w-1/2 p-6 sm:p-8 flex flex-col justify-center'>

          {/* Category */}
          <span className='text-xs font-medium text-[#7c6aff] bg-purple-50 px-3 py-1 rounded-full w-fit mb-3'>
            {product.category}
          </span>

          {/* Name */}
          <h1 className='text-2xl sm:text-3xl font-bold text-gray-800 mb-2'>
            {product.name}
          </h1>

          {/* Rating */}
          <p className='text-yellow-500 text-base mb-3'>
            {'★'.repeat(Math.floor(product.rating))}
            {'☆'.repeat(5 - Math.floor(product.rating))}
            <span className='text-gray-400 ml-2 text-sm'>
              ({product.rating} rating)
            </span>
          </p>

          {/* Description */}
          <p className='text-gray-500 text-sm sm:text-base leading-relaxed mb-4'>
            {product.description}
          </p>

          {/* Price */}
          <p className='text-3xl font-bold text-gray-900 mb-6'>
            ₹{product.price.toLocaleString()}
          </p>

          {/* Buttons */}
          <div className='flex flex-col sm:flex-row gap-3'>
            <button className='flex-1 bg-[#1a1a2e] text-white py-3 rounded-xl hover:bg-[#7c6aff] transition-colors duration-200 font-medium'>
              Add to Cart
            </button>
            <button className='flex-1 border-2 border-[#1a1a2e] text-[#1a1a2e] py-3 rounded-xl hover:bg-[#1a1a2e] hover:text-white transition-colors duration-200 font-medium'>
              Buy Now
            </button>
          </div>

        </div>
      </div>
    </div>

  )
}

export default ProductDetails