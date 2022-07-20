'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const blogPost = {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      // createdAt: {
      //   field: 'published',
      //   type: Sequelize.DATE,
      //   allowNull: false,
      //   // defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      // },
      // updatedAt: {
      //   field: 'updated',
      //   type: Sequelize.DATE,
      //   allowNull: false,
      //   // defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      // },
      published: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updated: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    };
    await queryInterface.createTable('BlogPosts', blogPost);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('BlogPosts');
  },
};
