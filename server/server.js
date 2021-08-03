const express = require('express');
const cors = require('cors');
const textToSpeech = require('@google-cloud/text-to-speech');
var cloudinary = require('cloudinary').v2;

require('dotenv').config();

const router = require('./router/router');

const PORT = process.env.PORT || 3010
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server now listening on ${PORT} 🦄`);
})