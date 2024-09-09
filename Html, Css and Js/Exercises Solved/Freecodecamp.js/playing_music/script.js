
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
  const songsHTML = array.map(); //Is used to iterate through an array and return a new array. To use .map it uses a 'callback function'which is a function that is passed to another function as an argument
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