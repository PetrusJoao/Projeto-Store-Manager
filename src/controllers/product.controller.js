const { productService } = require('../services');

const getProducts = async (_request, response) => {
  const { message } = await productService.findAllProducts();
  response.status(200).json(message);
};

const getProductById = async (request, response) => {
  const { id } = request.params;
  const { type, message } = await productService.findProductById(id);
  if (type) {
    return response.status(404).json({ message });    
  }
  response.status(200).json(message);
};

const addProduct = async (request, response) => {
  const { name } = request.body;
  const { type, message } = await productService.createProduct(name);
  if (type) {
    return response.status(400).json({ message });    
  }
  response.status(201).json(message);
};

const updateProduct = async (request, response) => {
  const { name } = request.body;
  const { id } = request.params;
  const { type, message } = await productService.editProduct(id, name);
  if (type) {
    return response.status(404).json({ message });    
  }
  response.status(200).json(message);
};

module.exports = {
  getProducts,
  getProductById,
  addProduct,
  updateProduct,
};