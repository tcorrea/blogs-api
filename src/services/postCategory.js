const { PostCategory } = require('../database/models');

const postCategory = {
  storeByArray: async (postAndCateforyIdArr) => {
    // const storedPostCategory = await PostCategory.create({ postId, categoryId });
    const storedPostCategory = await PostCategory.bulkCreate(postAndCateforyIdArr);
    return storedPostCategory;
  },
};

module.exports = postCategory;
