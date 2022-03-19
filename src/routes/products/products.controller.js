const { getAllProducts } = require('../../models/products/products.model');

function httpGetAllProducts(req, res) {
  return res.status(200).json(getAllProducts());
}

function httpAddProduct() {

}

module.exports = {
  httpGetAllProducts,
  httpAddProduct
}