const sequelize = require("sequelize");

const createBlogPost = (sequelize, DataTypes) => {

  const MODEL_NAME = 'BlogPost';

  const attributes = {
    // id: { type: DataTypes.INTEGER, primaryKey: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    // createdAt: DataTypes.DATE,
    // updatedAt: DataTypes.DATE,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  };

  // const options = { tableName: 'BlogPosts' };
  const options = { tableName: 'BlogPosts', timestamps: false };

  const BlogPost = sequelize.define(MODEL_NAME, attributes, options);

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, { as: 'user', foreignKey: 'userId' });
  };
  return BlogPost;
};

module.exports = createBlogPost;
