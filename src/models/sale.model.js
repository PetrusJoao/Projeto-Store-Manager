const connection = require('./connection');

const findAllSales = async () => {
  const [result] = await connection.execute('SELECT * FROM StoreManager.sales');
  return result;
};

const findBySaleID = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.sales WHERE id = ?', [id],
  );
  return result;
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

module.exports = {
  findAllSales,
  findBySaleID,
  insertSale,
  insertSaleProduct,
};