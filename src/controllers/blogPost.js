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
  show: async (req, res) => {
    const { id } = req.params;
    const post = await service.show(id);
    if (!post) {
      const error = new Error('Post does not exist');
      error.name = 'NotFoundError';
      throw error;
    }
    res.status(200).json(post);
  },
  update: async (req, res) => {
    const { title, content } = req.body;
    const { id } = req.params;
    const payload = {
      title,
      content,
      postId: id,
      userId: req.userId,
    };
    const updatedPost = await service.update(payload);
    res.status(200).json(updatedPost);
  },
  destroy: async (req, res) => {
    await service.destroy(req.params, req.userId);
    res.status(204).send();
  },
};

module.exports = blogpostController;
