const { User } = require('../database/models');
const auth = require('./auth');

const userService = {
  index: async () => {
    const users = await User.findAll({
      attributes: { exclude: ['password'] },
    });
    return users;
    // console.log("All users:", JSON.stringify(users, null, 2));
    // const usersWithoutPassword = users.map((user) => {
    //   const { password, ...rest } = user.dataValues;
    //   return rest;
    // });
    // return usersWithoutPassword;
  },
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

  show: async (id) => {
    const user = await User.findOne({
      attributes: { exclude: ['password'] },
      where: { id },
    });
    console.log(user);

    if (user) return user;

    const error = new Error('User does not exist');
    error.name = 'NotFoundError';
    throw error;
  },

  store: async (body) => {
    const { displayName, email, password, image } = body;
    const userFound = await User.findOne({
      attributes: { exclude: ['image', 'id', 'createdAt', 'updatedAt'] },
      where: { email },
    });
    if (userFound) {
      const error = new Error('User already registered');
      error.name = 'Conflict';
      throw error;
    }

    const user = await User.create({ displayName, email, password, image });
    if (user) {
      const token = auth.createToken({ displayName, email });
      return token;
    }
    // TODO
    return false;
  },

  update: async () => { },
  destroy: async () => { },
};

module.exports = userService;
