const express = require('express');
const {
  httpGetAllProducts,
  httpAddProduct
} = require('./products.controller');

const productsRouter = express.Router();

productsRouter.get('/', httpGetAllProducts);
productsRouter.post('/', httpAddProduct);

module.exports = productsRouter;