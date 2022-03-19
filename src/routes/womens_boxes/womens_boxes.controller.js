const { getAllWomensBoxes } = require('../../models/womens_boxes/womens_boxes.model');

function httpGetAllWomensBoxes(req, res) {
  return res.status(200).json(getAllWomensBoxes());
}


module.exports = {
  httpGetAllWomensBoxes,
}