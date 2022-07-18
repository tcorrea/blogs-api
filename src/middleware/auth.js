// const schema = require('../schema/user');
const { validateToken } = require('../services/auth');

const authMiddleware = {
  required: (req, _res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
      const tokenNotFoundError = new Error('Token not found');
      tokenNotFoundError.name = 'UnauthorizedError';
      throw tokenNotFoundError;
    }
    const { id } = validateToken(authorization);
    req.userId = id;
    next();
  },
};

module.exports = authMiddleware;
