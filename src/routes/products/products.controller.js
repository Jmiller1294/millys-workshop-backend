const products = [{
  name: 'box',
  price: '17.99',
  size: 'small',
}]
 
function httpGetAllProducts(req, res) {
  return res.status(200).json(products);
}

function httpAddProduct() {

}

module.exports = {
  httpGetAllProducts,
  httpAddProduct
}