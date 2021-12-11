const Orders = require('../models/orderModel');

const orderCtrl = {
    payment: async (req, res) => {
        try {
            const {
                listOderItems,
                addressShipping,
                itemsPrice,
                totalPrice,
                userId,
                userName,
            } = req.body;

            const newOrder = new Orders({
                listOderItems,
                addressShipping,
                itemsPrice,
                totalPrice,
                userId,
                userName,
            });

            await newOrder.save();

            res.status(200).json({ id: newOrder._id.toString() });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
};

module.exports = orderCtrl;
