const { fetchFromAPI } = require('../services/apiService');

const getTrendingPosts = async (req, res) => {
  try {
    const posts = await fetchFromAPI('/posts');

    const sorted = posts.sort((a, b) => b.comments.length - a.comments.length);
    res.json(sorted.slice(0, 10));
  } catch (err) {
    res.status(500).json({ error: 'Failed to get trending posts' });
  }
};

const getLatestPosts = async (req, res) => {
  try {
    const posts = await fetchFromAPI('/posts');

    const sorted = posts.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    res.json(sorted.slice(0, 10));
  } catch (err) {
    res.status(500).json({ error: 'Failed to get latest posts' });
  }
};

module.exports = {
  getTrendingPosts,
  getLatestPosts,
};
