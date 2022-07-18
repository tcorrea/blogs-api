const schema = require('../schema/post');

const postMiddleware = {
  fieldValidation: (req, _res, next) => {
    schema.store(req.body);
    next();
  },
};

module.exports = postMiddleware;
