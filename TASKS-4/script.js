// script.js
const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const progress = document.getElementById("progress");

let isPlaying = false;

// ✅ Updated with working online MP3 URLs
const songs = [
  {
    title: "LoFi Track 1",
    artist: "LoFi Artist",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  },
  {
    title: "LoFi Track 2",
    artist: "LoFi Artist",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  }
];

let currentSong = 0;

function loadSong(song) {
  document.getElementById("title").innerText = song.title;
  document.getElementById("artist").innerText = song.artist;
  audio.src = song.src;
}

function playSong() {
  audio.play();
  isPlaying = true;
  playBtn.innerText = "⏸️";
}

function pauseSong() {
  audio.pause();
  isPlaying = false;
  playBtn.innerText = "▶️";
}

playBtn.addEventListener("click", () => {
  isPlaying ? pauseSong() : playSong();
});

prevBtn.addEventListener("click", () => {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  loadSong(songs[currentSong]);
  playSong();
});

nextBtn.addEventListener("click", () => {
  currentSong = (currentSong + 1) % songs.length;
  loadSong(songs[currentSong]);
  playSong();
});

audio.addEventListener("timeupdate", () => {
  const progressPercent = (audio.currentTime / audio.duration) * 100;
  progress.style.width = `${progressPercent}%`;
});

// Load the first song on page load
loadSong(songs[currentSong]);
