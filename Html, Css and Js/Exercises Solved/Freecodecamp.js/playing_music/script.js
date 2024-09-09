
const playlistSongs = document.getElementById('playlist-songs');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const nextButton = document.getElementById('next');
const previousButton = document.getElementById('previous');
const shuffleButton = document.getElementById('shuffle');
const allSongs = [
  {
    id: 0,
    title: "Numb",
    artist: "Link Park",
    duration: "3:07",
    src: "<audio controls> <source src='my-musics/Numb (Official Music Video) [4K UPGRADE] – Linkin Park.mp3' type='audio/mpeg'></audio>"
  }, 
  {
    id: 1,
    title: "Jigsaw Falling Into Place",
    artist: "Quincy Larson",
    duration: "4:18",
    src: "<audio controls> <source src='my-musics/Radiohead - Jigsaw Falling Into Place.mp3' type='audio/mpeg'></audio>",
  }, 
  {
    id: 2,
    title: "Savior",
    artist: "Rise Against",
    duration: "4:01",
    src: "<audio controls> <source src='my-musics/Rise Against - Savior (Official Music Video).mp3' type='audio/mpeg'></audio>",
  },
  {
    id: 3,
    title: "Cruising for a Musing",
    artist: "Quincy Larson",
    duration: "3:34",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/cruising-for-a-musing.mp3",
  },
  {
    id: 4,
    title: "Never Not Favored",
    artist: "Quincy Larson",
    duration: "3:35",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/never-not-favored.mp3",
  },
  {
    id: 5,
    title: "From the Ground Up",
    artist: "Quincy Larson",
    duration: "3:12",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/from-the-ground-up.mp3",
  },
  {
    id: 6,
    title: "Walking on Air",
    artist: "Quincy Larson",
    duration: "3:25",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/walking-on-air.mp3",
  },
  {
    id: 7,
    title: "Can't Stop Me. Can't Even Slow Me Down.",
    artist: "Quincy Larson",
    duration: "3:52",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/cant-stop-me-cant-even-slow-me-down.mp3",
  },
  {
    id: 8,
    title: "The Surest Way Out is Through",
    artist: "Quincy Larson",
    duration: "3:10",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/the-surest-way-out-is-through.mp3",
  },
  {
    id: 9,
    title: "Chasing That Feeling",
    artist: "Quincy Larson",
    duration: "2:43",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/chasing-that-feeling.mp3",
  }
];

const audio = new Audio(); //Web Audio API to play the songs
let userData = {//Storage the current song and time
  songs: [...allSongs], //allows you to copy all elements from one array into another. It is called spread. With spread you copy all elements of array to another 
  currentSong: null,
  songCurrentTime: 0
};
const renderSongs = (array) => { //to display songs to UI
  const songsHTML = array.map((song) => { //Is used to iterate through an array and return a new array. To use .map it uses a 'callback function'which is a function that is passed to another function as an argument
    return `<li id="song-${song.id}" class="playlist-song"></li>
    <button class="playlist-song-info">
      <span class="playlist-song-title">${song.title}</span>
      <span class="playlist-song-artist">${song.artist}</span>
      <span class="playlist-song-duration">${song.duration}</span>
    </button>
    <button class="playlist-song-delete" aria-label="Delete ${song.title}">
      <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8" fill="#4d4d62"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/></svg>
    </button>
    `;
  }).join(" "); //In join there is a separetor to join the all elements of an array
} 
/*
const printGreeting = () => { //arrow function a short way to use a function
  console.log('Hello there!'); 
}
const printMessage = org => {
  console.log(`${org} is awesome!`);
}

const addTwoNumbers = (num1, num2) => num1 * num2;
*/

//anonymous function is ideal for unique case