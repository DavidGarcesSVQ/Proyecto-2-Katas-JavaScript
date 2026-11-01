// EJERCICIO 38
const users38 = [
  { name: 'Alberto', favoritesSounds: { waves: { format: 'mp3', volume: 50 }, rain: { format: 'ogg', volume: 60 }, firecamp: { format: 'mp3', volume: 80 } } },
  { name: 'Antonio', favoritesSounds: { waves: { format: 'mp3', volume: 30 }, shower: { format: 'ogg', volume: 55 }, train: { format: 'mp3', volume: 60 } } },
  { name: 'Santiago', favoritesSounds: { shower: { format: 'mp3', volume: 50 }, train: { format: 'ogg', volume: 60 }, firecamp: { format: 'mp3', volume: 80 } } },
  { name: 'Laura', favoritesSounds: { waves: { format: 'mp3', volume: 67 }, wind: { format: 'ogg', volume: 35 }, firecamp: { format: 'mp3', volume: 60 } } }
];
let totalVolume38 = 0;
let totalSounds38 = 0;
for (let user of users38) {
  for (let sound in user.favoritesSounds) {
    totalVolume38 += user.favoritesSounds[sound].volume;
    totalSounds38++;
  }
}
const averageVolume38 = totalVolume38 / totalSounds38;
console.log('Volumen total:', totalVolume38);
console.log('Número de sonidos:', totalSounds38);
console.log('Volumen medio:', averageVolume38);
