const Products = require('../models/productModel');
const jwt = require('jsonwebtoken');

const productCtrl = {
    createProduct: async (req, res) => {
        const newProduct = new Products(req.body);

        try {
            const savedProduct = await newProduct.save();
            res.status(200).json(savedProduct);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    updateProduct: async (req, res) => {
        try {
            const updatedProduct = await Products.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body,
                },
                { new: true }
            );
            res.status(200).json(updatedProduct);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    deleteProduct: async (req, res) => {
        try {
            await Products.findByIdAndDelete(req.params.id);
            res.status(200).json('Product has been deleted ...');
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getProduct: async (req, res) => {
        try {
            const product = await Products.findById(req.params.id);
            res.status(200).json(product);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getAllProduct: async (req, res) => {
        const qNew = req.query.new;
        const qCategory = req.query.category;

        try {
            let products;

            if (qNew) {
                products = await Products.find()
                    .sort({ createdAt: -1 })
                    .limit(1);
            } else if (qCategory) {
                products = await Products.find({
                    categories: {
                        $in: [qCategory],
                    },
                });
            } else {
                products = await Products.find();
            }

            res.status(200).json(products);
        } catch (err) {
            res.status(500).json(err);
        }
    },
};

module.exports = productCtrl;
