const express = require('express');

//Routers
const productsRouter = require('./products/products.router');

const api = express.Router();

api.use('/products', productsRouter);

module.exports = api;