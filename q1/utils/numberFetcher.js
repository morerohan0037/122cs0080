const axios = require('axios');
const { TEST_SERVER_API_BASE, TIMEOUT_MS } = require('../config');

const endpoints = {
  p: "/primes",
  f: "/fibo",
  e: "/even",
  r: "/rand"
};

module.exports = async function fetchNumbers(id) {
  const source = axios.CancelToken.source();

  const timeout = setTimeout(() => {
    source.cancel(`Request exceeded ${TIMEOUT_MS}ms`);
  }, TIMEOUT_MS);

  try {
    const response = await axios.get(`${TEST_SERVER_API_BASE}${endpoints[id]}`, {
      cancelToken: source.token
    });
    clearTimeout(timeout);
    return response.data.numbers || [];
  } catch (err) {
    clearTimeout(timeout);
    console.warn(`Fetch failed for ID ${id}:`, err.message);
    return [];
  }
};
