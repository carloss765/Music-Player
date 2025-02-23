import { useState } from 'react';
import Player from './components/Player';
import PlayList from './components/PlayList';
import AddSong from './components/AddSong'; // Importa el componente AddSong
import './App.css';

const App = () => {
  const [songs, setSongs] = useState([
    {
      title: 'Socio',
      artist: 'Eladio Carrion Ft. Luar La L',
      src: '/songs/Socio.mp3',
      image: '/imgs/Socio.jpeg', // Ruta de la imagen
    },
    {
      title: 'TOKICHA',
      artist: 'jcastle x Hades66',
      src: '/songs/TOKICHA.mp3', // Asegúrate de que el archivo exista
      image: '/imgs/TOKICHA.jpeg', // Ruta de la imagen
    },
    {
      title: 'Que Pasaria...',
      artist: 'Rauw Alejandro & Bad Bunny',
      src: '/songs/Qué Pasaría....mp3', // Asegúrate de que el archivo exista
      image: '/imgs/Que Pasaria....jpeg', // Ruta de la imagen
    },
    {
      title: 'TATE QUIETA',
      artist: 'ROA',
      src: '/songs/TATE QUIETA.mp3', // Asegúrate de que el archivo exista
      image: '/imgs/TATE QUIETA.jpeg', // Ruta de la imagen
    },
    {
      title: 'Dile a El',
      artist: 'Rauw Alejandro',
      src: '/songs/Dile a Él.mp3', // Asegúrate de que el archivo exista
      image: '/imgs/Dile a El.jpeg', // Ruta de la imagen
    }

  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const handleAddSong = (newSong) => {
    setSongs([...songs, newSong]);
    setCurrentSongIndex(songs.length); // Cambia a la nueva canción automáticamente
  };

  return (
    <div className="app">
      <PlayList
        songs={songs}
        setCurrentSongIndex={setCurrentSongIndex}
        currentSongIndex={currentSongIndex}
      />
      <div className="music-player-container">
        <Player
          currentSong={songs[currentSongIndex]}
          nextSong={() => setCurrentSongIndex((currentSongIndex + 1) % songs.length)}
          prevSong={() => setCurrentSongIndex((currentSongIndex - 1 + songs.length) % songs.length)}
        />
        <AddSong onAddSong={handleAddSong} />
      </div>
    </div>
  );
};

export default App;