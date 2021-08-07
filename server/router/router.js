const express = require('express');
const { postText } = require('../controllers/texts.controller');
const router = express.Router();

router.post('/texts', postText3);

module.exports = router;