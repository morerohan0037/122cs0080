const express = require('express');
const router = express.Router();
const numbersController = require('./controllers/numbersController');

router.get('/numbers/:numberid', numbersController.getNumbers);

module.exports = router;
