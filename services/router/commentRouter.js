const express = require('express');
const commentController = require('../controller/commentController');
const adminController = require('../controller/adminController');

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(commentController.getCommentsOnPost)
  .post(commentController.setPostId, commentController.createComment);

router
  .route('/created')
  .get(adminController.protect, commentController.getAllCreatedComments)

router
  .route('/:id')
  .get(commentController.getComment);
  
module.exports = router;
