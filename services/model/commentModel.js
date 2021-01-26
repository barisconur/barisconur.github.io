const mongoose = require('mongoose');
const validator = require('validator');

const commentSchema = new mongoose.Schema(
  {
    comment: {
      type: String,
      maxlength: [100, 'A title length must be less than 100'],
      required: [true, 'A post must have a title'],
    },
    nickname: {
      type: String,
      required: [true, 'Please define a nickname for your comments'],
      maxlength: [40, 'A nickname length must be less than 40'],
    },
    email: {
     type: String,
     required: [true, 'A user must have an email'],
     trim: true,
     lowecase: true,
     validate: [validator.isEmail, 'It is not a valid email address'],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
    isVerifiedByAdmin: {
      type: Boolean,
      default: false,
    },
    isEmailConfirmedByUser: {
      type: Boolean,
      default: false,
    },
    post: {
      type: mongoose.Schema.ObjectId,
      ref: 'Post',
      required: [true, 'A comment must belong to a post'],
    },
  }
);

commentSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'post',
    select: 'title',
  });

  next();
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
