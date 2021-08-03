// SAMPLE CODE I FOUND SOMEWHERE FOR REFERENCE, NOT USING
// const cloudinary = require('cloudinary').v2;
// const http = require('http');

// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.API_KEY,
//   api_secret: process.env.API_SECRET
// })

// const fetchAudio = async filename => {
//   const url = await cloudinary.url(`${process.env.AUDIO_FOLDER_PATH}/${filename}`, { resource_type: "video", sign_url: true })
//   console.log(`
//         Cloudinary URL generated:
//         filename: ${filename}
//         folder: ${process.env.AUDIO_FOLDER_PATH}
//         url:${url}
//     `)
//   return new Promise((res, rej) => {
//     http.get(url, response => {
//       const status = response.statusCode;
//       const message = response.statusMessage;
//       const buffer = [];
//       response.on('data', data => buffer.push(data));
//       response.on('end', () => res(Buffer.concat(buffer)));
//       response.on('error', err => rej({ status, message: err.message }))
//       if (![200].includes(response.statusCode)) rej({ status, message })
//     })
//   })
// }

// module.exports = { fetchAudio };