const express = require('express');

//Routers
const productsRouter = require('./products/products.router');
const holidayBoxesRouter = require('./holiday_boxes/holiday_boxes.router');
const mensBoxesRouter = require('./mens_boxes/mens_boxes.router');
const WomensBoxesRouter = require('./womens_boxes/womens_boxes.router');
const weddingBoxesRouter = require('./wedding_boxes/wedding_boxes.router');

const api = express.Router();

//api routes
api.use('/products', productsRouter);
api.use('/holidays', holidayBoxesRouter);
api.use('/mens', mensBoxesRouter);
api.use('/womens', WomensBoxesRouter);
api.use('/weddings', weddingBoxesRouter);


module.exports = api;