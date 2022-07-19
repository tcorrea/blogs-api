const models = require('../database/models');
const categoryService = require('./category');
const postCategoryService = require('./postCategory');

const index = async () => {
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
};

const show = async (id) => {
  const post = await models.BlogPost.findOne({
    where: { id },
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

  return post;
};

const store = async ({ title, content, categoryIds }, userId) => {
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
};

const update = async ({ title, content, postId, userId }) => {
  const post = await show(postId);

  if (post.userId !== userId) {
    const error = new Error('Unauthorized user');
    error.name = 'UnauthorizedError';
    throw error;
  }
  post.set({ title, content });

  await post.save();
  return post;
};

const destroy = async ({ id }, userId) => {
  const post = await show(id);

  if (!post) {
    const error = new Error('Post does not exist');
    error.name = 'NotFoundError';
    throw error;
  }

  if (post.userId !== userId) {
    const error = new Error('Unauthorized user');
    error.name = 'UnauthorizedError';
    throw error;
  }
  //   Model.destroy({
  //     where: {
  //         // criteria
  //     }
  // })

  // models.BlogPost.destroy({
  //   where: { id }
  // });

  await post.destroy();
};

// const blogPost = {
//   index: async () => {
//     const posts = await models.BlogPost.findAll({
//       include: [{
//         model: models.User,
//         as: 'user',
//         attributes: { exclude: ['createdAt', 'updatedAt', 'password'] },
//       },
//       {
//         model: models.Category,
//         as: 'categories',
//         attributes: { exclude: ['createdAt', 'updatedAt'] },
//         through: { attributes: [] },
//       }],
//     });

//     return posts;
//   },
//   show: async (id) => {
//     const post = await models.BlogPost.findOne({
//       where: { id },
//       include: [{
//         model: models.User,
//         as: 'user',
//         attributes: { exclude: ['createdAt', 'updatedAt', 'password'] },
//       },
//       {
//         model: models.Category,
//         as: 'categories',
//         attributes: { exclude: ['createdAt', 'updatedAt'] },
//         through: { attributes: [] },
//       }],
//     });

//     return post;
//   },
//   store: async ({ title, content, categoryIds }, userId) => {
//     const categoriesFound = await categoryService.showByArray(categoryIds);
//     if (categoriesFound.length === categoryIds.length) {
//       const post = await models.BlogPost.create({
//         title,
//         content,
//         categoryIds,
//         userId,
//         published: Date.now(),
//         updated: Date.now(),
//       });

//       const dataToStore = categoryIds.map((categoryId) => ({ postId: post.id, categoryId }));
//       await postCategoryService.storeByArray(dataToStore);
//       return post;
//     }
//     const error = new Error('"categoryIds" not found');
//     error.name = 'BadRequest';
//     throw error;
//   },
//   update: async ({ title, content, postId, userId }) => {

//     const post = await show(postId);

//     if (post.userId !== userId) {
//       const error = new Error('Unauthorized user');
//       error.name = 'UnauthorizedError';
//       throw error;
//     }
//     post.set({ title, content });

//     await post.save();
//     return post;
//   },
//   destroy: async () => { },
// };

// module.exports = blogPost;
module.exports = { index, show, store, update, destroy };
