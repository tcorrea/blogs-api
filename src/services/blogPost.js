const { BlogPost } = require('../database/models');
const categoryService = require('./category');
const postCategoryService = require('./postCategory');

const blogPost = {
  index: async () => { },
  show: async (_id) => { },
  store: async ({ title, content, categoryIds }, userId) => {
    const categoriesFound = await categoryService.showByArray(categoryIds);
    if (categoriesFound.length === categoryIds.length) {
      const post = await BlogPost.create({
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
