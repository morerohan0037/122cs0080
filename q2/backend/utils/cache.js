const NodeCache = require('node-cache');
const { CACHE_TTL } = require('../config');

const cache = new NodeCache({ stdTTL: CACHE_TTL });

module.exports = cache;
