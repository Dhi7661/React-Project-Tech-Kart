import { Routes, Route } from 'react-router-dom'
import React from 'react'
import Navbar from './components/Navbar'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'

const App = () => {
  return (
    <>
      <div className='bg-gray-100 min-h-screen'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>


      </div>


    </>
  )
}

export default App