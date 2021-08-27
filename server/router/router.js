const express = require('express');
const { postText } = require('../controllers/texts.controller');
const router = express.Router();

router.post('/texts', postText);

module.exports = router;