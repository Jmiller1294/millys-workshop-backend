const express = require('express');
const { httpGetAllMensBoxes } = require('./mens_boxes.controller');


const mensBoxesRouter = express.Router();

//Routes
mensBoxesRouter.get('/', httpGetAllMensBoxes);
mensBoxesRouter.post('/', httpGetAllMensBoxes);
mensBoxesRouter.put('/:id', httpGetAllMensBoxes);
mensBoxesRouter.delete('/:id', httpGetAllMensBoxes);

module.exports = mensBoxesRouter;
