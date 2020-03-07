const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv/config');

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Imports Routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);
// app.use('/users', usersRoute);

// Middlewares
app.use('/posts', () => {
    console.log('This is a middleware running')
});

// Routes
app.get('/', (req, res) => {
    res.send('We are on home');
});

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
    console.log('connected to DB')
);

// How to we start listening to the server
app.listen(3000);