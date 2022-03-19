const weddingBoxes = [
  {
    name: 'Engaged Box',
    price: '$95.00'
  },
  {
    name: 'Bride Box',
    price: '$100.00'
  }
]

function getAllWeddingBoxes() {
  return weddingBoxes;
}

module.exports = {
  getAllWeddingBoxes,
}