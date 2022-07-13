'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const postsCategories = {
      postId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'BlogPosts',
          key: 'id',
        },
        primaryKey: true,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Categories',
          key: 'id',
        },
        primaryKey: true,
      }
    };
    await queryInterface.createTable('PostCategories', postsCategories);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('PostCategories');
  }
};
