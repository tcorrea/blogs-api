const schema = require('../schema/user');

const userMiddleware = {
  fieldValidation: (req, _res, next) => {
    schema.store(req.body);
    next();
  },
};

module.exports = userMiddleware;
