const Comment = require('../model/commentModel');
const Post = require('../model/postModel');
const AppError = require('../utils/appError');
const catchAsyncErr = require('../utils/catchAsyncErr');

exports.getCommentsOnPost = catchAsyncErr(async (req, res) => {
  const comments = await Comment.find({
    post: req.params.post_id,
    isVerifiedByAdmin: true,
    isEmailConfirmedByUser: true,
  });

  res.status(200).json({
    status: 'success',
    comments: comments,
  });
});

exports.getAllCreatedComments = catchAsyncErr(async (req, res) => {
  const comments = await Comment.find();

  res.status(200).json({
    status: 'success',
    comments: comments,
  });
});

exports.getComment = catchAsyncErr(async (req, res, next) => {
  const comment = await Comment.findById(req.params.id);
  if (!comment) { 
    return next(new AppError('No comment found with that ID', 400));
  }
  
  res.status(200).json({
    status: 'success',
    comment: comment,
  });
})

exports.setPostId = catchAsyncErr(async(req, res, next) => {
  req.body.post = req.params.post_id;
  next();
});

exports.createComment = catchAsyncErr(async (req, res, next) => {
  const post = await Post.findOne({_id: req.params.id, isPublished: true});
  if (!post) return next(new AppError('There is no post found in this blog', 400));
  await Comment.create(req.body);

  res.status(201).json({
    status: 'success',
    message: 'Comment was successfully added to database',
  });
});