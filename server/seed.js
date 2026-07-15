import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Product from './models/Product.js'

dotenv.config()



const products = [
  {
    name: "ProBass Headphones",
    category: "Headphones",
    price: 1299,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    description: "Premium wireless headphones with deep bass and noise cancellation.",
    stock: 15
  },
  {
    name: "SmartFit Watch X2",
    category: "Smartwatch",
    price: 2999,
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    description: "Track your fitness, sleep and notifications with style.",
    stock: 8
  },
  {
    name: "MechType Keyboard",
    category: "Keyboard",
    price: 1899,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400",
    description: "Mechanical keyboard with RGB backlight and clicky switches.",
    stock: 20
  },
  {
    name: "SwiftClick Mouse",
    category: "Mouse",
    price: 899,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400",
    description: "Ergonomic wireless mouse with precision tracking.",
    stock: 25
  },
  {
    name: "TurboCharge 65W",
    category: "Charger",
    price: 599,
    rating: 4.1,
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400",
    description: "Fast 65W charger compatible with all USB-C devices.",
    stock: 30
  },
  {
    name: "LapCool Stand Pro",
    category: "Laptop Accessories",
    price: 1099,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400",
    description: "Adjustable aluminum laptop stand for better posture.",
    stock: 12
  }
]

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('Mongoose Connected for seeding...')

    await Product.deleteMany()
    console.log('Existing products deleted...')

    await Product.insertMany(products)
    console.log('Products inserted successfully...')

    process.exit()
  } catch (error) {
    console.error(`Seed error: ${error.message}`)
    process.exit(1)
  }
}

seedProducts()