const schema = require('../schema/login');

const loginMiddleware = {
  fieldValidation: (req, _res, next) => {
    schema.login(req.body);
    next();
  },
};

module.exports = loginMiddleware;
