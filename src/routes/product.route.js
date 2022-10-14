const express = require('express');

const route = express.Router();
const productController = require('../controllers/product.controller');
const validateName = require('../middlewares/product.validation');

route.get('/', productController.getProducts);
route.get('/:id', productController.getProductById);
route.post('/', validateName, productController.addProduct);

module.exports = route;