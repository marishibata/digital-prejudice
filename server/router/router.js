const express = require('express');
const { postText3 } = require('../controllers/texts.controller');
const router = express.Router();

router.post('/texts', postText3);

module.exports = router;