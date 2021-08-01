
const SoundVFX = () => {

  // ThreeJS audiolistener docs
  // https://threejs.org/docs/#api/en/audio/AudioListener

  const listener = new THREE.AudioListener();
  camera.add(listener);


  // create a global audio source
  const sound = new THREE.Audio(listener);

  // load a sound and set it as the Audio object's buffer
  const audioLoader = new THREE.AudioLoader();
  console.log("File from server :", localMp3Path); // File saved
  audioLoader.load(localMp3Path, function (buffer) {
    sound.setBuffer(buffer);
    sound.setLoop(true);
    sound.setVolume(0.5);
    sound.play();
  });


  // play multiple files 
  for (let i = 0; i < audioFiles.length; i++) {
    audioLoader.load(audioFiles.get(i), function (buffer) {
      sound.setBuffer(buffer);
      sound.setLoop(true);
      sound.setVolume(0.5);
      sound.play();
    });
  }
}

export default SoundVFX;
