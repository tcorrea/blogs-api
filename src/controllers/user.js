const service = require('../services/user');

const userController = {
  index: async (_req, res) => {
    const users = await service.index();
    res.status(200).json(users);
  },
  login: async (req, res) => {
    const token = await service.login(req.body);
    res.status(200).json({ token });
  },
  store: async (req, res) => {
    const token = await service.store(req.body);
    res.status(201).json({ token });
  },
  show: async (req, res) => {
    const { id } = req.params;
    const user = await service.show(id);
    res.status(200).json(user);
  },
  // update: async (_req, _res) => { },
  destroy: async (req, res) => {
    await service.destroy(req.userId);
    res.status(204).send();
  },
};

module.exports = userController;
