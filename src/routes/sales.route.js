const express = require('express');

const route = express.Router();
const saleController = require('../controllers/sale.controller');
const {
  validateProductId, validateQuantity, validateQuantityExists,
} = require('../middlewares/sale.validation');

route.get('/', saleController.getSales);
// route.get('/:id', productController.getProductById);
route.post('/',
  validateProductId, validateQuantity, validateQuantityExists, saleController.addSale);

module.exports = route;