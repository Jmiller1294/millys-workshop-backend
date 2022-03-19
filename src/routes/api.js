const express = require('express');

//Routers
const productsRouter = require('./products/products.router');
const holidayBoxesRouter = require('./holiday_boxes/holiday_boxes.router');
const mensBoxesRouter = require('./mens_boxes/mens_boxes.router');

const api = express.Router();

//api routes
api.use('/products', productsRouter);
api.use('/holidays', holidayBoxesRouter);
api.use('/mens', mensBoxesRouter);

module.exports = api;