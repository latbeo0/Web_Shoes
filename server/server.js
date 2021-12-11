require('dotenv').config({ path: __dirname + '/configs/config.env' });

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');

const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');
const uploadRoute = require('./routes/upload');
const productRoute = require('./routes/product');
const orderRoute = require('./routes/order');

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(
    fileUpload({
        useTempFiles: true,
    })
);

// Connect to mongodb
const URI = process.env.MONGODB_URL;
const connectDB = async () => {
    await mongoose
        .connect(URI)
        .then(() => console.log('Connected to mongodb'))
        .catch((err) => {
            console.log(err);
        });
};
connectDB();

// Routes
app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use('/api/upload', uploadRoute);
app.use('/api/product', productRoute);
app.use('/api/order', orderRoute);

// Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
});
