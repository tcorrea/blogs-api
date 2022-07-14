const service = require('../services/category');

const categoryController = {
  index: async (_req, _res) => { },
  show: async (_req, _res) => { },
  store: async (req, res) => {
    const { id, name } = await service.store(req.body);
    res.status(201).json({ id, name });
  },
  update: async (_req, _res) => { },
  destroy: async (_req, _res) => { },
};

module.exports = categoryController;
