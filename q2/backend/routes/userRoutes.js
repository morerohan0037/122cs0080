const express = require('express');
const router = express.Router();
const { getTopUsers } = require('../controllers/userController');

router.get('/top-users', getTopUsers);

module.exports = router;
