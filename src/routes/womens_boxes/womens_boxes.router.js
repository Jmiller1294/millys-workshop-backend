const express = require('express');
const { httpGetAllWomensBoxes } = require('./womens_boxes.controller');

const WomensBoxesRouter = express.Router();

WomensBoxesRouter.get('/', httpGetAllWomensBoxes);
WomensBoxesRouter.post('/', );
WomensBoxesRouter.put('/:id', );
WomensBoxesRouter.delete('/:id', );

module.exports = WomensBoxesRouter;