const { saleModel, productModel } = require('../models/index');

const findAllSales = async () => {
  const result = await saleModel.findAllSaleProduct();
  return { type: null, message: result };
};

const findSaleById = async (id) => {
  const result = await saleModel.findBySaleID(Number(id));
  if (result.length === 0) { return { type: 'SALE_NOT_FOUND', message: 'Sale not found' }; }
  // console.log(result.length);
  return { type: null, message: result };
};

const createSale = async (sales) => {
  const products = await Promise
    .all(sales.map(async (product) => productModel.findByID(product.productId)));
  const productIdValidation = products.every((item) => item);
  Promise.all(products);
  if (!productIdValidation) return { type: 404, message: 'Product not found' };

  const sale = await saleModel.insertSale();
  
  const promisses = sales.map(async (item) => {
  saleModel.insertSaleProduct(sale, item);
});

  Promise.all(promisses);
  return { type: null, message: { id: sale, itemsSold: sales } };
};

module.exports = {
  findAllSales,
  findSaleById,
  createSale,
};