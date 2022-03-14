const express = require('express');

const productsRouter = express.Router();

productsRouter.get('/', httpGetAllLaunches);
productsRouter.post('/', httpAddLaunch);

module.exports = productsRouter;