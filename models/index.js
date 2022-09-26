const User = require("./User");
const Blog = require("./Blog");
const Comment = require("./Comment");

User.hasMany(Blog, {
  foreignKey: "id",
  onDelete: "CASCADE",
});

Blog.belongsTo(User, {
  foreignKey: "id",
});

User.hasMany(Comment, {
  foreignKey: "id",
  onDelete: "CASCADE",
});

Comment.belongsTo(User, {
  foreignKey: "id",
});

Blog.hasMany(Comment, {
  foreignKey: "id",
  onDelete: "CASCADE",
});

Comment.belongsTo(Blog, {
  foreignKey: "id",
});

module.exports = { User, Blog, Comment };
