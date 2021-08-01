const Text = require('../models/texts.schema')
const googleTTS = require('google-tts-api');
var txt2mp3 = require("text-to-mp3");

// POST request for MVP with node's googleTTS package - when submit button is hit, messages are stored on db
// will go back to this if new POST request with text-to-mp3 package fails
const postText = async (req, res) => {
  try {
    const { content } = req.body;
    // console.log(content);
    const contentTTSURL = await getTextToSpeech(content); // this was moved over from postNewAudio
    // console.log(contentTTSURL);
    const newText = new Text({
      content,
      url: contentTTSURL
    });
    await newText.save();
    res.status(201).send(newText);
  } catch (err) {
    console.log(err)
    res.status(400).send('unable to submit text message')
  }
}

// original googleTTS API Node package working for for MVP - this is currently NOT active
// https://www.npmjs.com/package/google-tts-api
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

// NEW POST request - NOT WORKING YET
// currently trying to modify this to make it work with text-to-mp3 package instead
const postText2 = async (req, res) => {
  try {
    const { content } = req.body;
    // console.log(content);
    const textToMp3file = await getTxt2mp3(content); // grabs text and convert to mp3 when submit button is hit
    // console.log(textToMp3file);
    const newText = new Text({
      content,
      audio: textToMp3file, // this would save the file onto db which we don't want to do....?
    });
    await newText.save();
    res.status(201).send(newText);
  } catch (err) {
    console.log(err)
    res.status(400).send('unable to submit text message')
  }
}

// currently attempting to use alternative Node package that converts text to mp32 
// https://www.npmjs.com/package/text-to-mp3
const getTxt2mp3 = (content) => {
  txt2mp3.getMp3(content).then(function (binaryStream) {
    var file = fs.createWritestream("FileName.mp3");
    file.write(binaryStream);
    file.end();
  })
    .catch(function (err) {
      console.log("error", err)
    })
}

// Alternative option to save locally if Cloudinary doesn't work....
const saveTxt2mp3 = (content) => {
  txtomp3.saveMP3(content, "FileName.mp3", function (err, localMp3Path) {
    if (err) {
      console.log(err);
      return;
    }
    console.log("File saved :", localMp3Path); //"File saved : /home/enrico/WebstormProjects/textToMp3/FileName.mp3"
  });
}


// currently not using this boilerplate, might need this if I need to to get texts/mp3 links from DB to play audio via url
const getText = async (req, res) => {
  try {
    const texts = await Text.find();
    res.status(200).send(texts);
  } catch (err) {
    res.status(400).send('unable to find text messages')
  }
}


module.exports = { postText, postText2 };