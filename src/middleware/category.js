const schema = require('../schema/category');

const categoryMiddleware = {
  fieldValidation: (req, _res, next) => {
    schema.store(req.body);
    next();
  },
};

module.exports = categoryMiddleware;
