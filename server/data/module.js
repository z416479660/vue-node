// var mongoose = require('mongoose');
const mongoose = require('mongoose');
const ObjectID = mongoose.Types.ObjectId;

mongoose.connect('mongodb://localhost:27017/test93');
// 用户
var usersSchema = new mongoose.Schema({
  username: String,
  password: String,
  isAdmin:{
    type: Boolean,
    default: false
  },
  time: {
    type: String,
    default: Date.now()
  }
});
// 分类
var categorySchema = new mongoose.Schema({
  title: String,
  time: {
    type: String,
    default: Date.now()
  }
});
// 文章
var articleSchema = new mongoose.Schema({
  title: String,
  category: String,
  author: {
    type: String,
    default: 'admin'
  },
  content: String,
  time: {
    type: String,
    default: Date.now()
  },
  views:{
    type: Number,
    default: 0
  },
  like:{
    type: Number,
    default: 0
  },
  comment: {
    type: Array,
    default: []
  }
});
var commentSchema = new mongoose.Schema({
  title_id: ObjectID,
  commentator: String,
  content: String,
  time: {
    type: String,
    default: Date.now()
  }
});

Model = {
  User: mongoose.model('User', usersSchema),
  Category: mongoose.model('Category', categorySchema),
  Article: mongoose.model('Article', articleSchema),
  Comment: mongoose.model('Comment', commentSchema)
}
module.exports = Model
