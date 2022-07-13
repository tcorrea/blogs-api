'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const category = {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    };
    await queryInterface.createTable('Categories', category);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Categories');
  },
};
