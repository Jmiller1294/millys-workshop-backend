const { getAllWeddingBoxes } = require('../../models/wedding_boxes/wedding_boxes.model');

function httpGetAllWeddingBoxes(req, res) {
  res.status(200).json(getAllWeddingBoxes());
}

module.exports = {
  httpGetAllWeddingBoxes,
}