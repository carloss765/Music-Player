import React from 'react';

const PlayList = ({ songs, setCurrentSongIndex, currentSongIndex }) => {
    return (
        <div className="playlist-container">
          <div className="playlist">
            <h3>Playlist</h3>
            <ul className="song-list">
              {songs.map((song, index) => (
                <li
                  key={index}
                  onClick={() => setCurrentSongIndex(index)}
                  className={`song-item ${index === currentSongIndex ? 'active' : ''}`}
                >
                  <img src={song.image} alt={song.title} className="song-thumbnail" />
                  <div className="song-details">
                    <span className="song-title">{song.title}</span>
                    <span className="song-artist">{song.artist}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
};

export default PlayList;