const kahaniSuno = new Audio("./sound/kahani suno.mp3");
const phlevMai = new Audio("./sound/phle v m.mp3");
const random = new Audio("./sound/random.mp3");
const tumhiHo = new Audio("./sound/Tum hi ho.mp3");

const prevBtn = document.querySelector(".prev");
const mainBtn = document.querySelector(".main");
const nextBtn = document.querySelector(".next");
const songName = document.querySelector(".song-name");
const playPauseIcon = document.querySelector("#play-pause-icon");

const songs = [
  { ele: kahaniSuno, audioName: "Kahani suno 2.0" },
  { ele: phlevMai, audioName: "pehele bhi main" },
  { ele: random, audioName: "Tum ho(Rockstar)" },
  { ele: tumhiHo, audioName: "Tum hi ho" },
];

for (const song of songs) {
  song.ele.addEventListener("ended", () => {
    updateSong("next");
    playPauseSong();
  });
}

let current = 0;
let currentSong = songs[current].ele;
songName.textContent = songs[current].audioName;

mainBtn.addEventListener("click", () => {
  playPauseSong();
});
nextBtn.addEventListener("click", () => {
  updateSong("next");
  playPauseSong();
});
prevBtn.addEventListener("click", () => {
  updateSong("prev");
  playPauseSong();
});

const updateSong = (e) => {
  currentSong.pause();
  currentSong.currentTime = 0;

  if (e === "next") {
    current++;
    if (current > songs.length - 1) {
      current = 0;
    }
  }
  if (e === "prev") {
    current--;
    if (current < 0) {
      current = songs.length - 1;
    }
  }
  currentSong = songs[current].ele;
  songName.textContent = songs[current].audioName;
};

const playPauseSong = () => {
  if (currentSong.paused) {
    currentSong.play();
    playPauseIcon.className = "ph ph-pause";
  }
  else {
    currentSong.pause();
    playPauseIcon.className = "ph ph-play";
  };
};
