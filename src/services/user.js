const { User } = require('../database/models');
const auth = require('./auth');

const userService = {
  index: async () => { },
  login: async (body) => {
    const user = await User.findOne({
      attributes: { exclude: ['image', 'id', 'createdAt', 'updatedAt'] },
      where: { email: body.email },
    });

    // retornar token
    if (user && user.password === body.password) {
      const { password, ...userWithoutPassword } = user.dataValues;
      const token = auth.createToken(userWithoutPassword);
      return token;
    }

    const error = new Error('Invalid fields');
    error.name = 'BadRequest';
    throw error;
  },
  show: async (_id) => { },
  store: async () => { },
  update: async () => { },
  destroy: async () => { },
};

module.exports = userService;
