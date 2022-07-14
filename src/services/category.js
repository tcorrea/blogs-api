const { Category } = require('../database/models');

const categoryService = {
  index: async () => { },
  show: async () => { },
  store: async ({ name }) => {
    const category = await Category.create({ name });
    return category;
  },
  update: async () => { },
  destroy: async () => { },
};

module.exports = categoryService;
