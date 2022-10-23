const express = require('express');

const route = express.Router();
const productController = require('../controllers/product.controller');
const validateName = require('../middlewares/product.validation');

route.get('/', productController.getProducts);
route.get('/:id', productController.getProductById);
route.post('/', validateName, productController.addProduct);
route.put('/:id', productController.updateProduct);
route.delete('/:id', productController.deleteProduct);

module.exports = route;