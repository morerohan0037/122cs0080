const { fetchFromAPI } = require('../services/apiService');

const getTopUsers = async (req, res) => {
  try {
    const posts = await fetchFromAPI('/posts');

    const commentCounts = {};

    posts.forEach(post => {
      const userId = post.userId;
      commentCounts[userId] = (commentCounts[userId] || 0) + post.comments.length;
    });

    const sorted = Object.entries(commentCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([userId]) => userId);

    const users = await fetchFromAPI('/users');

    const topUsers = users.filter(user => sorted.includes(user.id));
    res.json(topUsers);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get top users' });
  }
};

module.exports = { getTopUsers };
