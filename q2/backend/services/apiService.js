const axios = require('axios');
const { TEST_API_BASE_URL } = require('../config');
const cache = require('../utils/cache');

const fetchFromAPI = async (endpoint) => {
  const cached = cache.get(endpoint);
  if (cached) return cached;

  const response = await axios.get(`${TEST_API_BASE_URL}${endpoint}`);
  cache.set(endpoint, response.data);
  return response.data;
};

module.exports = {
  fetchFromAPI,
};
