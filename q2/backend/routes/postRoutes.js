const express = require('express');
const router = express.Router();
const {
  getTrendingPosts,
  getLatestPosts,
} = require('../controllers/postController');

router.get('/trending', getTrendingPosts);
router.get('/latest', getLatestPosts);

module.exports = router;
