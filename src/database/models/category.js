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

  // User.associate = (db) => {
  //   User.hasMany(db.Pet, { as: 'pets', foreignKey: 'userId' });
  // }

  return Category;
};

module.exports = createCategory;
