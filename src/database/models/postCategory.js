const sequelize = require("sequelize");

const createPostCategory = (sequelize, DataTypes) => {

  const MODEL_NAME = 'PostCategory';

  const attributes = {
    postId: {
      type: DataTypes.INTEGER,
      // references: { model: 'BlogPost', key: 'id' },
      // primaryKey: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      // references: { model: 'Category', key: 'id' },
      // primaryKey: true,
    }
  };

  const options = { tableName: 'PostCategories', timestamps: false };

  const PostCategory = sequelize.define(MODEL_NAME, attributes, options);

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogPosts',
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
  };

  return PostCategory;
};

module.exports = createPostCategory;
