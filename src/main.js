let audioTrack = WaveSurfer.create({
  container: ".audio",
  waveColor: "#cbcdd7",
  progressColor: "#bf6c5e",
  barWidth: 2,
});

const audioFile = "./assets/audio/wy00-war-yankee-trailer-v2-2020.mp3";
const audioFileName = audioFile.split("/").pop();

// Get Audio Duration
// const getDuration = (file) => {

//   }

// const audioDuration = getDuration(audioFile);
// console.log("duration: ", audioDuration);

audioTrack.load(audioFile);
const audioDuration = audioTrack.getDuration(audioFile);
console.log("duration: ", audioDuration);

audioTrack.on("ready", function () {
  console.log("Download Complete! Ready to Play!");
});

const trackName = (document.getElementById("track").innerHTML = audioFileName);

const playBtn = document.querySelector(".play-btn");
const stopBtn = document.querySelector(".stop-btn");
const muteBtn = document.querySelector(".mute-btn");
const volumeSlider = document.querySelector(".volume-slider");

playBtn.addEventListener("click", () => {
  audioTrack.playPause();
  if (audioTrack.isPlaying()) {
    playBtn.classList.add("playing");
    console.log("Playing...");
  } else {
    playBtn.classList.remove("playing");
    console.log("Paused...");
  }
});

stopBtn.addEventListener("click", () => {
  audioTrack.stop(0);
  playBtn.classList.remove("playing");
  console.log("Stopped!");
});

volumeSlider.addEventListener("mouseup", () => {
  changeVolume(volumeSlider.value);
});

const changeVolume = (volume) => {
  audioTrack.setVolume(volume);
  if (volume == 0) {
    muteBtn.classList.add("muted");
  } else {
    muteBtn.classList.remove("muted");
  }
};

muteBtn.addEventListener("click", () => {
  if (muteBtn.classList.contains("muted")) {
    muteBtn.classList.remove("muted");
    audioTrack.setVolume(0.5);
    volumeSlider.value = 0.5;
  } else {
    audioTrack.setVolume(0);
    muteBtn.classList.add("muted");
    volumeSlider.value = 0;
  }
});
