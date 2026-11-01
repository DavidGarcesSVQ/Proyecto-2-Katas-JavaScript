// EJERCICIO 30
const tracks30 = [
  { title: 'Enter Sandman', genre: 'Metal' }, { title: 'Back in Black', genre: 'Rock' },
  { title: 'Bohemian Rhapsody', genre: 'Rock' }, { title: 'Blinding Lights', genre: 'Pop' },
  { title: 'Old Town Road', genre: 'Country' }, { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
  { title: 'Bad Guy', genre: 'Pop' }, { title: 'Thunderstruck', genre: 'Rock' },
  { title: 'Hotel California', genre: 'Rock' }, { title: 'Stairway to Heaven', genre: 'Rock' }
];
const tracksByGenre30 = {};
for (let track of tracks30) {
  if (!tracksByGenre30[track.genre]) tracksByGenre30[track.genre] = [];
  tracksByGenre30[track.genre].push(track);
}
console.log(tracksByGenre30);
