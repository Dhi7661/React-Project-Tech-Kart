import React from 'react'
import Navbar from './component/Navbar'

const App = () => {
  return (
    <>
    <div className='bg-gray-100 min-h-screen'>
      <Navbar />
      <div className='p-8'>
        <h2 className='text-2xl font-bold text-gray-700'>
          Products will show here soon...
        </h2>
      </div>
    </div>

    </>
  )
}

export default App