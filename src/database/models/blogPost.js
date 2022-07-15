const sequelize = require("sequelize");

const createBlogPost = (sequelize, DataTypes) => {

  const MODEL_NAME = 'BlogPost';

  const attributes = {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  };

  const options = { tableName: 'BlogPosts' };

  const BlogPost = sequelize.define(MODEL_NAME, attributes, options);
  BlogPost.associate = (db) => {
    BlogPost.belongsTo(db.User, { as: 'user', foreignKey: 'userId' });
  };

  return BlogPost;
};

module.exports = createBlogPost;
