const { GetAllHolidayBoxes } = require('../../models/holiday_boxes/holiday_boxes.model');

function httpGetAllHolidayBoxes(req, res) {
  return res.status(200).json(GetAllHolidayBoxes());
}

module.exports = {
  httpGetAllHolidayBoxes
}