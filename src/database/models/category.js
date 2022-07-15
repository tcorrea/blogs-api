const sequelize = require("sequelize");

const createCategory = (sequelize, DataTypes) => {

  const MODEL_NAME = 'Category';

  const attributes = {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  };

  const options = { tableName: 'Categories' };

  const Category = sequelize.define(MODEL_NAME, attributes, options);

  // Category.associate = (model) => {
  //   Category.belongsToMany(model.BlogPost, {
  //     through: 'PostCategories',
  //     // as: 'blogPosts',
  //     as: 'BlogPost',
  //     foreignKey: 'categoryId',
  //   });
  // };
  return Category;
};

module.exports = createCategory;
