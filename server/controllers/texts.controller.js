const Text = require('../models/texts.schema')
const textToSpeech = require('@google-cloud/text-to-speech');
const fs = require('fs');
const util = require('util');

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
})

// Create Google TTS client
const client = new textToSpeech.TextToSpeechClient();

const postText3 = async (req, res) => {
  console.log('before try');
  try {
    const { content } = req.body;
    console.log(content);
    const contentTTSmp3 = await quickStart(content); // this was moved over from postNewAudio
    // console.log(contentTTSURL);
    const newText = new Text({
      content,
      audio: contentTTSmp3
    });
    await newText.save();
    res.status(201).send(newText);
  } catch (err) {
    console.log(err)
    res.status(400).send('unable to submit text message')
  }
}

const quickStart = async (content) => {

  const request = {
    input: { text: content },
    voice: { languageCode: 'en-US', ssmlGender: 'NEUTRAL' },
    audioConfig: { audioEncoding: 'MP3' },
  };
  console.log(request, 'request');

  // Performs the text-to-speech request
  const [response] = await client.synthesizeSpeech(request);
  console.log(response, 'response');

  // Write the binary audio content to local filepath - should not need this as we want to upload onto cloudinary
  // const writeFile = util.promisify(fs.writeFile);
  // await writeFile('output.mp3', response.audioContent, 'binary');
  // console.log('Audio content written to file: output.mp3');

  // https://cloudinary.com/documentation/upload_images
  cloudinary.v2.uploader
    .upload(response.audioContent, options, {
      resource_type: "video",
    })
    .then((result) => {
      console.log("successfully sent audio", JSON.stringify(result))
    });


}


// -------------- //

// POST request for MVP with node's googleTTS package - when submit button is hit, messages are stored on db
// will go back to this if new POST request with text-to-mp3 package fails
// const postText = async (req, res) => {
//   try {
//     const { content } = req.body;
//     // console.log(content);
//     const contentTTSURL = await getTextToSpeech(content); // this was moved over from postNewAudio
//     // console.log(contentTTSURL);
//     const newText = new Text({
//       content,
//       url: contentTTSURL
//     });
//     await newText.save();
//     res.status(201).send(newText);
//   } catch (err) {
//     console.log(err)
//     res.status(400).send('unable to submit text message')
//   }
// }

// // original googleTTS API Node package working for for MVP - this is currently NOT active
// // https://www.npmjs.com/package/google-tts-api
// const getTextToSpeech = async (content) => {
//   try {
//     const url = await googleTTS.getAudioUrl(content, { // put "content" param instead of hello world
//       lang: 'en',
//       host: 'https://translate.google.com',
//     });
//     console.log((url), 'url')
//     return url;
//   } catch (err) {
//     console.error(err);
//   }
// };


module.exports = { postText3 };