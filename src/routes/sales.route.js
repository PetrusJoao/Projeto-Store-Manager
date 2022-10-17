const express = require('express');

const route = express.Router();
const saleController = require('../controllers/sale.controller');
// const validateName = require('../middlewares/product.validation');

route.get('/', saleController.getSales);
// route.get('/:id', productController.getProductById);
route.post('/', saleController.addSale);

module.exports = route;