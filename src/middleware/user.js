const schema = require('../schema/user');

const userMiddleware = {
  loginValidation: (req, _res, next) => {
    schema.login(req.body);
    next();
  },
};

module.exports = userMiddleware;
