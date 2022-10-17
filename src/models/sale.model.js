const connection = require('./connection');

const findAll = async () => {
  const [result] = await connection.execute('SELECT * FROM StoreManager.sales');
  return result;
};

const findByID = async (id) => {
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

module.exports = {
  findAll,
  findByID,
  insertSale,
};