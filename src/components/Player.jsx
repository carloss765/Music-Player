import React from 'react';

const Player = ({ currentSong, nextSong, prevSong }) => {
    return (
        <div className="player">
          <div className="song-image">
            <img src={currentSong.image} alt={currentSong.title} />
          </div>
          <h2>{currentSong.title}</h2>
          <h3>{currentSong.artist}</h3>
          <audio controls src={currentSong.src} autoPlay />
          <div className="player-controls">
            <button onClick={prevSong}>
              <i className="fas fa-backward"></i>
            </button>
            <button onClick={nextSong}>
              <i className="fas fa-forward"></i>
            </button>
          </div>
        </div>
      );
    };

export default Player;