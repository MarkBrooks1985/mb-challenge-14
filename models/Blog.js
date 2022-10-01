const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Blog extends Model {}

Blog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
  },
  {
    sequelize,
  }
);

module.exports = Blog;
