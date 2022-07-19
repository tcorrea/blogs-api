const schema = require('../schema/post');

const postMiddleware = {
  store: (req, _res, next) => {
    schema.store(req.body);
    next();
  },
  update: (req, _res, next) => {
    schema.update(req.body);
    next();
  },
};

module.exports = postMiddleware;
