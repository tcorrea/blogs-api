const service = require('../services/user');

const user = {
  index: async (_req, _res) => { },
  login: async (req, res) => {
    const token = await service.login(req.body);
    res.status(200).json({ token });
  },
  store: async (req, res) => {
    const token = await service.store(req.body);
    res.status(201).json({ token });
  },
  show: async (_req, _res) => { },
  update: async (_req, _res) => { },
  destroy: async (_req, _res) => { },
};

module.exports = user;
