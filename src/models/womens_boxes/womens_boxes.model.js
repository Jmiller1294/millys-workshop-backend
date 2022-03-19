const womensBoxes = [
  {
    name: 'Bath Box',
    price: '$17.99', 
  },
  {
    name: 'Pamper Box',
    price: '$39.99'
  }
]

function getAllWomensBoxes() {
  return womensBoxes;
}

module.exports = {
  getAllWomensBoxes,
}