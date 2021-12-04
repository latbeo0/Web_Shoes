const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        imgPrimary: { type: String, required: true },
        imgSecondary: { type: String, required: true },
        listImg: { type: Array },
        gender: { type: Array },
        productLine: { type: String },
        category: { type: String },
        collections: { type: String },
        material: { type: String },
        state: { type: String },
        price: { type: Number, required: true },
        style: { type: String },
        inStock: { type: Boolean, default: false },
        detail: { type: Array },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Products', ProductSchema);
