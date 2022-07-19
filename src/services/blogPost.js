// const { BlogPost, Category, User } = require('../database/models');
const models = require('../database/models');
const categoryService = require('./category');
const postCategoryService = require('./postCategory');

const blogPost = {
  index: async () => {
    const posts = await models.BlogPost.findAll({
      include: [{
        model: models.User,
        as: 'user',
        attributes: { exclude: ['createdAt', 'updatedAt', 'password'] },
      },
      {
        model: models.Category,
        as: 'categories',
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        through: { attributes: [] },
      }],
    });

    return posts;
  },
  show: async (_id) => { },
  store: async ({ title, content, categoryIds }, userId) => {
    const categoriesFound = await categoryService.showByArray(categoryIds);
    if (categoriesFound.length === categoryIds.length) {
      const post = await models.BlogPost.create({
        title,
        content,
        categoryIds,
        userId,
        published: Date.now(),
        updated: Date.now(),
      });

      const dataToStore = categoryIds.map((categoryId) => ({ postId: post.id, categoryId }));
      await postCategoryService.storeByArray(dataToStore);
      return post;
    }
    const error = new Error('"categoryIds" not found');
    error.name = 'BadRequest';
    throw error;
  },
  update: async () => { },
  destroy: async () => { },
};

module.exports = blogPost;
