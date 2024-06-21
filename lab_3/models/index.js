'use strict'
const User = require('./user')
const Post = require('./post')
const Comment = require('./comment')
const Like = require('./like')

async function init() {
    await User.sync();
    await Post.sync();
    await Comment.sync();
    await Like.sync();
};

init();

Post.belongsTo(User);
User.hasMany(Post);
Comment.belongsTo(Post);
Comment.belongsTo(User);
Post.hasMany(Comment);
User.hasMany(Comment);
Like.belongsTo(Post);
Like.belongsTo(User);
Post.hasMany(Like);
User.hasMany(Like);

module.exports = {
    User, Post, Comment, Like
};