const { productModel } = require('../models/index');

const findAllProducts = async () => {
  const result = await productModel.findAll();

  return { type: null, message: result };
};

const findProductById = async (id) => {
  const result = await productModel.findByID(Number(id));
  if (!result) {
    return { type: 'erro', message: 'Product not found' };
  }
  return { type: null, message: result };
};

const createProduct = async (name) => {
  const product = await productModel.insertProduct(name);
  const result = await productModel.findByID(product);
  if (!result) {
    return { type: 'erro', message: 'Product not added' };
  }
  return { type: null, message: result };
};

module.exports = {
  findAllProducts,
  findProductById,
  createProduct,
};