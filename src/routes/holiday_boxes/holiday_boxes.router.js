const express = require('express');
const { httpGetAllHolidayBoxes } = require('./holiday_boxes.controller');

const holidayBoxesRouter = express.Router();

//Routes
holidayBoxesRouter.get('/', httpGetAllHolidayBoxes);
holidayBoxesRouter.post('/',);
holidayBoxesRouter.put('/:id');
holidayBoxesRouter.delete('/:id');

module.exports = holidayBoxesRouter;