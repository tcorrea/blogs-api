const { Category } = require('../database/models');

const categoryService = {
  index: async () => {
    const categories = await Category.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });

    return categories;
  },
  show: async () => { },
  store: async ({ name }) => {
    const category = await Category.create({ name });
    return category;
  },
  update: async () => { },
  destroy: async () => { },
};

module.exports = categoryService;
