const express = require('express');
const cors = require('cors');
const googleTTS = require('google-tts-api');
const txtomp3 = require("text-to-mp3");

require('dotenv').config();

const router = require('./router/router');

const PORT = process.env.PORT || 3010
const app = express();

app.use(cors());
app.use(express.json());
// app.use(googleTTS());
app.use(router);


app.listen(PORT, () => {
  console.log(`Server now listening on ${PORT} 🦄`);
})