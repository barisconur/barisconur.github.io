const express = require('express');
const postController = require('../controller/postController');
const adminController = require('../controller/adminController');
const commentRouter = require('./commentRouter');

const router = express.Router();

router.use('/:post_id/comments', commentRouter);

router
  .route('/')
  .get(postController.getAllPublishedPosts)
  .post(adminController.protect, postController.createPost);

router
  .route('/created')
  .get(adminController.protect, postController.getAllCreatedPosts);

router
  .route('/:id')
  .get(postController.getPost)
  .post(adminController.protect, postController.createPost)
  .patch(adminController.protect, postController.updatePost)
  .delete(adminController.protect, postController.deletePost);
  
module.exports = router;
