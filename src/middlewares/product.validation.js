const validateName = (req, res, next) => {
  const { name } = req.body;
  const nameMinLength = 5;

  if (!name) {
    return res.status(400).json({
      message: '"name" is required',
    });
  }
  if (name.length <= nameMinLength) {
    res.status(422).json({
      message: '"name" length must be at least 5 characters long',
    });
    next();
  }
};

module.exports = validateName;