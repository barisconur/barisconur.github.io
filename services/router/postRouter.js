const express = require('express');
const postController = require('../controller/postController');

const router = express.Router();

router
  .route('/')
  .get(postController.getAllPublishedPosts)
  .post(postController.createPost);

router
  .route('/created')
  .get(postController.getAllCreatedPosts)

router
  .route('/:id')
  .get(postController.getPost)
  .post(postController.createPost)
  .patch(postController.updatePost)
  .delete(postController.deletePost);
  
module.exports = router;
