const express = require('express');
const { getText, postText } = require('../controllers/texts.controller');
const router = express.Router();

// 
router.get('/texts', getText);
router.post('/texts', postText);

module.exports = router;