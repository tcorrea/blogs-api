const service = require('../services/blogPost');

const blogpostController = {
  index: async (_req, res) => {
    const posts = await service.index();
    res.status(200).json(posts);
  },
  store: async (req, res) => {
    const post = await service.store(req.body, req.userId);
    res.status(201).json(post);
  },
  // show: async (req, res) => {
  //   const { id } = req.params;
  //   const user = await service.show(id);
  //   res.status(200).json(user);
  // },
  // update: async (_req, _res) => { },
  // destroy: async (_req, _res) => { },
};

module.exports = blogpostController;
