// Seleciona os elementos HTML para controle do player de música
const playlistSongs = document.getElementById('playlist-songs');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const nextButton = document.getElementById('next');
const previousButton = document.getElementById('previous');
const shuffleButton = document.getElementById('shuffle');

// Define um array de músicas, onde cada música é representada como um objeto com propriedades específicas
const allSongs = [
  {
    id: 0,
    title: "Numb",
    artist: "Link Park",
    duration: "3:07",
    src: "my-musics/Numb (Official Music Video) [4K UPGRADE] – Linkin Park.mp3"
  }, 
  {
    id: 1,
    title: "Jigsaw Falling Into Place",
    artist: "Radiohead",
    duration: "4:18",
    src: "my-musics/Radiohead - Jigsaw Falling Into Place.mp3",
  }, 
  {
    id: 2,
    title: "Savior",
    artist: "Rise Against",
    duration: "4:01",
    src: "my-musics/Rise Against - Savior (Official Music Video).mp3",
  },
  {
    id: 3,
    title: "November Rain",
    artist: "Guns N' Roses",
    duration: "9:16",
    src: "my-musics/Guns N' Roses - November Rain.mp3",
  },
  {
    id: 4,
    title: "The Emptiness Machine",
    artist: "Link Park",
    duration: "3:20",
    src: "my-musics/The Emptiness Machine (Official Music Video) - Linkin Park.mp3",
  },
  {
    id: 5,
    title: "Lovers in Japan",
    artist: "Coldplay",
    duration: "3:57",
    src: "my-musics/Coldplay - Lovers In Japan (Official Video).mp3",
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

// Cria uma instância do objeto Audio para controlar a reprodução de músicas
const audio = new Audio(); 

// Define o objeto userData que armazena as músicas, a música atual e o tempo da música atual. Basicamente são os dados de controle de usuário
let userData = {
  songs: [...allSongs], // Cria uma cópia do array allSongs e a atribui à propriedade songs
  currentSong: null, // Inicialmente, não há música sendo reproduzida
  songCurrentTime: 0 // O tempo atual da música é 0
};

const playSong = (id) => {
  const song = userData?.songs.find((song) => song.id === id); //Verifica qual a música que o usuário escolheu
  //Acessa as propiedades do objeto audio
  audio.src = song.src; //Atribui o audio no objeto
  audio.title = song.title; //Atribui o título no no objeto
  //Objeto audio como parâmtero

  if(userData?.currentSong === null || userData?.currentSong.id !== song.id){
    audio.currentTime = 0;
  } else {
    audio.currentTime = userData?.songCurrentTime;
  }
  
  //Adiciona o som atual apenas para fazer validação e analisar o som atual está tocando
  userData.currentSong = song;

  //Vai mudar a estilização o Css
  playButton.classList.add("playing");
  highlightCurrentSong();
  setPlayerDisplay();
  setPlayButtonAccessibleText();
  audio.play();
};

const pauseSong = () => {
  userData.songCurrentTime = audio.currentTime;
  playButton.classList.remove("playing");
  audio.pause();
};

const playNextSong = () => {
  let currentSongIndex = getCurrentSongIndex();
  //Icrementa para o próximo som
  currentSongIndex++;
  console.log(currentSongIndex);
  //Se há próxima música, toca ela; senão, reinicia a lista e toca a primeira música.
  currentSongIndex <= userData?.songs.length - 1 ? playSong(userData?.songs[currentSongIndex].id) : (currentSongIndex = 0, userData.currentSong = null, playButton.click());
};

const playPreviousSong = () => {
  let currentSongIndex = getCurrentSongIndex();
  currentSongIndex--;
  console.log(currentSongIndex);
  //Se não há uma música anterior, reinicia a lista e toca a primeira música; senão, toca a música anterior.
  currentSongIndex < 0  ? (currentSongIndex = userData?.songs.length - 1, playSong(userData?.songs[currentSongIndex].id)) : playSong(userData?.songs[currentSongIndex].id);
};

const shuffle = () => {
  userData?.songs.sort(() => Math.random() - 0.5);
  //Reinicia o som clicado no botão clicar
  userData.currentSong = null;
  userData.songCurrentTime = 0;
  renderSongs(userData?.songs);
  //Pausa o som
  pauseSong();
  //Adicona um novo som no painel
  setPlayerDisplay();
  setPlayButtonAccessibleText();
}

const deleteSong = (id) => {
  if(userData?.currentSong?.id === id) {
    userData.currentSong = null;
    userData.songCurrentTime = 0;
    pauseSong();
    setPlayerDisplay();
  }
  //Sem o {} já acontece o retorno implícito.
  //Se for falso, não adiciona
  userData.songs = userData?.songs.filter((song) => song.id !== id);
  renderSongs(userData?.songs);
  highlightCurrentSong(); 
  setPlayButtonAccessibleText();
  //Se a playlist for vazia, reinicia a playlist
  if(userData?.songs.length === 0){
    //Cria um elemento DOM
    const resetButton = document.createElement('button');
    //Cria um texto para um elemento DOM
    const resetText = document.createTextNode("Reset Playlist");
    //Cria um id e arialLabel para o dom
    resetButton.id = "reset";
    resetButton.ariaLabel = "Reset playlist";
    //O appendChild() adiciona o elemento DOM ao filho
    resetButton.appendChild(resetText);
    playlistSongs.appendChild(resetButton);

    resetButton.addEventListener('click', () => {
      userData.songs = [...allSongs];
      renderSongs(sortSongs());
      setPlayButtonAccessibleText();
      //Remove o elemento
      resetButton.remove();
    })
  } 
}

const setPlayerDisplay = () => {
  const songTitle = document.getElementById("player-song-title");
  const songArtist = document.getElementById("player-song-artist");
  songTitle.innerText = userData.currentSong.title;
  songArtist.innerText = userData.currentSong.artist;
};

//O segundo argumento é a função
pauseButton.addEventListener("click", pauseSong);
nextButton.addEventListener("click", playNextSong);
previousButton.addEventListener("click", playPreviousSong);
shuffleButton.addEventListener("click", shuffle);
audio.addEventListener("ended", () => {
  //Se o som atual for menor que o lenght do array então há uma próxima música
  const currentSongIndex = getCurrentSongIndex();
  const nextSongExists = currentSongIndex < userData.songs.length - 1 ? true : false;
  //Se o som existe toca o próximo som
  if(nextSongExists){
    playNextSong();
  }else{
    userData.currentSong = null;
    userData.songCurrentTime = 0;
    pauseSong();
    setPlayerDisplay();
    highlightCurrentSong();
    setPlayButtonAccessibleText();
  }
});



const getCurrentSongIndex = () => {
  //Index do som atual (a posição do array)
  return userData?.songs.indexOf(userData?.currentSong);
};

playButton.addEventListener('click', () =>{
  if(userData?.currentSong ===  null){
    playSong(userData?.songs[0].id);
  } else {
    //Toca o som atual
    playSong(userData?.currentSong.id);
  }
});

const highlightCurrentSong = () => {
  //Pega todos os sons
  const playlistSongElements = document.querySelectorAll('.playlist-song');
  console.log(playlistSongElements);
  //Id do som atual
  const songToHighlight = document.getElementById(`song-${userData?.currentSong?.id}`);
  playlistSongElements.forEach((songEl) => {
    //Irá remover o parâmetro de cada elemento
    songEl.removeAttribute("aria-current");
  });
  if(songToHighlight){
    //Adiciona o parâmetro somente no som atual
    songToHighlight.setAttribute("aria-current", "true");
  }
};

// Função que renderiza a lista de músicas na interface do usuário
const renderSongs = (array) => {
  // Usa o método map para criar uma lista HTML das músicas
  const songsHTML = array.map((song) => { 
    return `<li id="song-${song.id}" class="playlist-song">
      <button class="playlist-song-info" onclick="playSong(${song.id})">
        <span class="playlist-song-title">${song.title}</span>
        <span class="playlist-song-artist">${song.artist}</span>
        <span class="playlist-song-duration">${song.duration}</span>
      </button>
      <button class="playlist-song-delete" aria-label="Delete ${song.title}" onclick="deleteSong(${song.id})">
        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8" cy="8" r="8" fill="#4d4d62"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/>
        </svg>
      </button>
    </li>`
  }).join(" "); // Junta todos os elementos da lista em uma única string

  // Define o HTML da lista de músicas no elemento playlistSongs
  playlistSongs.innerHTML = songsHTML;
};

//Ficará mais acessível para qual som será tocado
const setPlayButtonAccessibleText = () => {
  //Adiciona ao song a música atual ou a primeira música
  const song = userData?.currentSong || userData?.songs[0];
  //Se há título no song .title, então coloca o play com o nome do song
  playButton.setAttribute("aria-label", song?.title ? `Play ${song.title}` : "Play");
}

//Irá mostrar os Sons em ordem alfabética
const sortSongs = () => {
  userData?.songs.sort((a, b) => {
    //title está acessando o título do objeto
    if (a.title < b.title) {
      return -1;
    }

    if(a.title > b.title){
      return 1;
    }

    return 0;
  });

  console.log(userData?.songs);
  return userData?.songs;
};

// Chama a função renderSongs para exibir as músicas na interface do usuário
//renderSongs(userData?.songs); //Tem um objeto dentro de um objeto
renderSongs(sortSongs()); //Vai passar todos os objetos na ordem alfabetica.