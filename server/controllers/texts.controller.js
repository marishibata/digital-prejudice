const Text = require('../models/texts.schema')
const googleTTS = require('google-tts-api');
var txtomp3 = require("text-to-mp3");
const textToMp3 = require('text-to-mp3');

// POST request for MVP with node's googleTTS package
// when submit button is hit, messages are stored on db
const postText = async (req, res) => {
  try {
    const { content } = req.body;
    // console.log(content);
    // const contentTTSURL = await getTextToSpeech(content); // this was moved over from postNewAudio
    // console.log(contentTTSURL);
    const textToMp3file = await getTextToMp3(content); // grabs text and convert to mp3 when submit button is hit
    const newText = new Text({
      content,
      // url: contentTTSURL
      audio: textToMp3file, // this would save the file onto db which we don't want to do?
    });
    await newText.save();
    res.status(201).send(newText);
  } catch (err) {
    console.log(err)
    res.status(400).send('unable to submit text message')
  }
}

const getTextToMp3 = (content) => {
  textToMp3.getMp3(content).then(function (binaryStream) {
    var file = fs.createWritestream("FileName.mp3");
    file.write(binaryStream);
    file.end();
  })
    .catch(function (err) {
      console.log("error", err)
    })
}


// for MVP
const getTextToSpeech = async (content) => {
  try {
    const url = await googleTTS.getAudioUrl(content, { // put "content" param instead of hello world
      lang: 'en',
      host: 'https://translate.google.com',
    });
    console.log((url), 'url')
    return url;
  } catch (err) {
    console.error(err);
  }
};

// don't need this for MVP
// might need to getAllText from DB to turn the strings into audio one by 
const getText = async (req, res) => {
  try {
    const texts = await Text.find();
    res.status(200).send(texts);
  } catch (err) {
    res.status(400).send('unable to find text messages')
  }
}

// ok so didn't need this for Google TTS, audio generated during postText request
const postNewAudio = async (req, res) => {
  try {
    const contentTTSURL = await getTextToSpeech(content);
    const newAudio = Audio({
      content: contentTTSURL,
    })
    await newAudio.save(); // this would be in cloudinary so don't need this??
    res.status(200).send(newAudio);
  }
  catch (err) {
    res.status(400);
    console.error(err);
  }
}


module.exports = { getText, postText };