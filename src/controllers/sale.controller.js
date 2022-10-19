const { saleService } = require('../services');

const getSales = async (_request, response) => {
  const { message } = await saleService.findAllSales();
  response.status(200).json(message);
};

const getSaleById = async (request, response) => {
  const { id } = request.params;
  const { type, message } = await saleService.findSaleById(id);
  if (type) {
    return response.status(404).json({ message });    
  }
  response.status(200).json(message);
};

const addSale = async (request, response) => {
  const sales = request.body;
  const { type, message } = await saleService.createSale(sales);
  if (type) {
    return response.status(type).json({ message });    
  }
  response.status(201).json(message);
};

module.exports = {
  getSales,
  getSaleById,
  addSale,
};