const { Category } = require('../database/models');

const categoryService = {
  index: async () => { },
  show: async (_id) => { },
  store: async ({ name }) => {
    const category = await Category.create({ name });
    return category;
  },
  update: async () => { },
  destroy: async () => { },
};

module.exports = categoryService;
