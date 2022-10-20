const validateProductId = (req, res, next) => {
  const sales = req.body;
  for (let index = 0; index < sales.length; index += 1) {
    const sale = sales[index];
    if (!sale.productId) {
      return res.status(400).json({
        message: '"productId" is required',
      });
    }
  }
    next();
};

const validateQuantityExists = (req, res, next) => {
  const sales = req.body;
  const resultado = { status: 0, message: '' };
  for (let index = 0; index < sales.length; index += 1) {
    const sale = sales[index];
    if (sale.quantity === undefined) {
      resultado.status = 400;
      resultado.message = '"quantity" is required';
    }
  }
  if (resultado.status) {
    return res.status(resultado.status).json({
      message: resultado.message,
      });
  }
  next();
};

const validateQuantity = (req, res, next) => {
  const sales = req.body;
  const resultado = { status: 0, message: '' };
  for (let index = 0; index < sales.length; index += 1) {
    const sale = sales[index];
    if (sale.quantity === 0 || sale.quantity < 0) {
      resultado.status = 422;
      resultado.message = '"quantity" must be greater than or equal to 1';
    }
  }
  if (resultado.status) {
    return res.status(resultado.status).json({
      message: resultado.message,
      });
  }
  next();
};

const validateSaleId = (req, res, next) => {
  const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        message: 'Sale not found',
      });
    }
    next();
};

module.exports = {
  validateProductId,
  validateQuantity,
  validateQuantityExists,
  validateSaleId,
};