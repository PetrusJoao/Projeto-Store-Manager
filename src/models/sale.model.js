const camelize = require('camelize');
const connection = require('./connection');

const findAllSales = async () => {
  const [result] = await connection.execute('SELECT * FROM StoreManager.sales');
  return result;
};

const findBySaleID = async (id) => {
  const [result] = await connection.execute(
    // trecho editado com a orientação e ajuda do amigo Willian Portela
    // https://github.com/will-796
   `SELECT date, product_id, quantity
    FROM StoreManager.sales_products as saleProduct
    INNER JOIN StoreManager.sales as sales
    ON saleProduct.sale_id = sales.id
    WHERE saleProduct.sale_id = ?`,
    [id],
  );
  return camelize(result);
};

const insertSale = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales VALUE ()',
  );
  // console.log('insertId: ', insertId);
  return insertId;
};

const insertSaleProduct = async (saleId, { productId, quantity }) => {
  const result = await connection.execute(
    'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
    [saleId, productId, quantity],
    );

  return result;
};

const findAllSaleProduct = async () => {
  const [result] = await connection.execute(
    // trecho editado com a orientação e ajuda do amigo Willian Portela
    // https://github.com/will-796
    `SELECT sale_id, date, product_id, quantity
    FROM StoreManager.sales_products as saleProduct
    INNER JOIN StoreManager.sales as sales
    ON saleProduct.sale_id = sales.id`,
  );
  return camelize(result);
};

module.exports = {
  findAllSales,
  findBySaleID,
  insertSale,
  insertSaleProduct,
  findAllSaleProduct,
};