const { getAllMensBoxes } = require('../../models/mens_boxes/mens_boxes.model');

function httpGetAllMensBoxes(req, res) {
  return res.status(200).json(getAllMensBoxes());
}

module.exports = {
  httpGetAllMensBoxes,
}