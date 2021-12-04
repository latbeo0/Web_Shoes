const Products = require('../models/productModel');
const jwt = require('jsonwebtoken');

const productCtrl = {
    createProduct: async (req, res) => {
        const newProduct = new Products(req.body);

        try {
            await newProduct.save();

            res.status(200).json({ msg: 'Product has been created' });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    updateProduct: async (req, res) => {
        try {
            await Products.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body,
                },
                { new: true }
            );

            res.status(200).json({ msg: 'Updated product success' });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    deleteProduct: async (req, res) => {},
    getProduct: async (req, res) => {
        try {
            const product = await Products.findById(req.params.id);
            res.status(200).json({ product });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    getAllProduct: async (req, res) => {
        try {
            let products;
            products = await Products.find();

            res.status(200).json({ products });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
};

module.exports = productCtrl;
