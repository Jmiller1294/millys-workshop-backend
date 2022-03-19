const express = require('express');
const { httpGetAllWeddingBoxes } = require('./wedding_boxes.controller');

const weddingBoxesRouter = express.Router();

weddingBoxesRouter.get('/', httpGetAllWeddingBoxes);
weddingBoxesRouter.post('/');
weddingBoxesRouter.put('/');
weddingBoxesRouter.delete('/');

module.exports = weddingBoxesRouter;