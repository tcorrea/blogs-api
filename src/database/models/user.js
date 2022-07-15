const sequelize = require("sequelize");

const createUser = (sequelize, DataTypes) => {

  const MODEL_NAME = 'User';

  const attributes = {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    image: DataTypes.STRING,
    // createdAt: {
    //   field: 'created_at',
    //   type: DataTypes.DATE,
    // },
    // updatedAt: {
    //   field: 'updated_at',
    //   type: DataTypes.DATE,
    // },
  };

  const options = { tableName: 'Users' };

  const User = sequelize.define(MODEL_NAME, attributes, options);

  User.associate = (db) => {
    User.hasMany(db.BlogPost, { as: 'blogPosts', foreignKey: 'userId' });
  };

  return User;
};

module.exports = createUser;
