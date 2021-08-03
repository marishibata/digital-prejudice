const Text = require('../models/texts.schema')
const textToSpeech = require('@google-cloud/text-to-speech');
const fs = require('fs');
const util = require('util');
const cloudinary = require('cloudinary').v2;
const streamifier = require('streamifier');

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
    const newText = await quickStart(content); // this was moved over from postNewAudio
    // console.log(newText);
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

  // uploading buffer file into cloudinary using .upload_stream instead of .upload
  let streamUpload = (buffer) => {
    return new Promise((resolve, reject) => {
      let stream = cloudinary.uploader.upload_stream({
        resource_type: "auto",
        public_id: "content",
        sign_url: true,
        use_filename: true,
        unique_filename: false
      }, (error, result) => {
        console.log({ error, result });
        if (result) resolve(result);
        else reject(error);
      });
      streamifier.createReadStream(buffer).pipe(stream);
    });
  }

  const upload = await streamUpload(response.audioContent)
  return await Text.create({
    url: upload.url,
    content: content,
  })

}


module.exports = { postText3 };