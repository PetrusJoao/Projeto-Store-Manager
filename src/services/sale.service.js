const { saleModel } = require('../models/index');

const findAllSales = async () => {
  const result = await saleModel.findAll();

  return { type: null, message: result };
};

const findSaleById = async (id) => {
  const result = await saleModel.findByID(Number(id));
  if (!result) {
    return { type: 'erro', message: 'Product not found' };
  }
  return { type: null, message: result };
};

const createSale = async () => {
  const sale = await saleModel.insertSale();
  const result = await saleModel.findByID(sale);
  return { type: null, message: result };
};

module.exports = {
  findAllSales,
  findSaleById,
  createSale,
};