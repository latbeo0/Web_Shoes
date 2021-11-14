require('dotenv').config({ path: __dirname + '/configs/config.env' });

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoute = require('./routes/auth');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to mongodb
const URI = process.env.MONGODB_URL;
mongoose
    .connect(URI, {
        useNewUrlParser: true,
        // useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to mongodb'))
    .catch((err) => {
        console.log(err);
    });

// Routes
app.use('/api/auth', authRoute);

// Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
});
