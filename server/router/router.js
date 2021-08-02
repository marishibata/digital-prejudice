const express = require('express');
const { postText, postText3 } = require('../controllers/texts.controller');
const router = express.Router();

// router.post('/texts', postText);
router.post('/texts', postText3);

module.exports = router;