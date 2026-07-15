import express from "express";
import products from "../data/products.js";
import Product from "../models/Product.js";

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json({
            success: true,
            count: products.length,
            data: products
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }

})

router.get('/:id', async (req, res) => {
    try {


        const product = await Product.findById(req.params.id)

        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product Not Found'
            })
        }

        res.status(200).json({
            success: true,
            data: product
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
})

export default router