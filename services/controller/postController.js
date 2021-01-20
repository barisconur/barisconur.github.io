const Post = require('../model/postModel');
const AppError = require('../utils/appError');
const catchAsyncErr = require('../utils/catchAsyncErr');

exports.getAllPublishedPosts = catchAsyncErr(async (req, res) => {
  const posts = await Post.find({isPublished: true });
  res.status(200).json({
    status: 'success',
    posts: posts,
  });
});

exports.getAllCreatedPosts = catchAsyncErr(async (req, res) => {
  const posts = await Post.find({isPublished: false });

  res.status(200).json({
    status: 'success',
    posts: posts,
  });
});

exports.getPost =catchAsyncErr(async (req, res, next) => {
  const post = await Post.findById(req.params.id);
  if (!post) return next(new AppError('Post is not found',404));

  res.status(200).json({
    status: 'success',
    post: post,
  });
});

exports.createPost = catchAsyncErr(async (req, res) => {
  await Post.create(req.body);

  res.status(201).json({
    status: 'success',
    message: 'Post was successfully added to database',
  });
});

exports.deletePost = catchAsyncErr(async (req, res, next) => {
  const post = await Post.findByIdAndDelete(req.params.id);
  if (!post) return next(new AppError('Post is not found', 404)); 
  
  res.status(204).json({
    status: 'success',
    message: 'Post was successfully deleted from database',
  });
})