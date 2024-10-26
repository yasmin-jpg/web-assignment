// Массив треков с информацией о каждом треке
const tracks = [
  { title: "Billie Eilish – CHIHIRO", file: "Sounds/Billie.mp3", cover: "Images/Chihiro.jpg" },
  { title: "Chase Atlantic – HEAVEN AND BACK", file: "Sounds/Chase.mp3", cover: "Images/Haeven and back.jpg" },
  { title: "Imagine Dragons – Thunder", file: "Sounds/Imagine.mp3", cover: "Images/Thunder.jpg" },
  { title: "MOLDANAZAR – Mahabbatym", file: "Sounds/MOLDANAZAR.mp3", cover: "Images/Mahabbatym.jpg" },
];

// Переменные для управления текущим треком и HTML-элементами
let currentTrackIndex = 0;
const audio = document.getElementById('audio');
const cover = document.getElementById('cover');
const title = document.getElementById('title');
const playPauseButton = document.getElementById('play-pause');
const trackListItems = document.querySelectorAll('#track-list li');

// Функция для загрузки и воспроизведения трека
function loadAndPlayTrack(index) {
  const track = tracks[index];
  audio.src = track.file;
  cover.src = track.cover;
  title.textContent = track.title;
  currentTrackIndex = index;
  audio.play();
  playPauseButton.textContent = 'Pause';
}

// Переключение воспроизведения/паузы
playPauseButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playPauseButton.textContent = 'Pause';
  } else {
    audio.pause();
    playPauseButton.textContent = 'Play';
  }
});

// Переход к следующему треку
document.getElementById('next').addEventListener('click', () => {
  currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
  loadAndPlayTrack(currentTrackIndex);
});

// Переход к предыдущему треку
document.getElementById('prev').addEventListener('click', () => {
  currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
  loadAndPlayTrack(currentTrackIndex);
});

// Обработка выбора трека из списка
trackListItems.forEach((item, index) => {
  item.addEventListener('click', () => loadAndPlayTrack(index));
});

// Загрузка первого трека при загрузке страницы
loadAndPlayTrack(currentTrackIndex);
