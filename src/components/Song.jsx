import PropTypes from 'prop-types';

const Songs = ({ songs, onSelectSong, currentSongIndex }) => {
    if (!songs || songs.length === 0) {
        return <div className="songs">No songs available</div>;
    }

    return (
        <div className="songs">
            <h3>Playlist</h3>
            <ul>
                {songs.map((song, index) => (
                    <li 
                        key={index} 
                        onClick={() => onSelectSong(index)}
                        className={currentSongIndex === index ? 'active' : ''}
                    >
                        <span className="song-title">{song.title}</span>
                        <span className="song-artist">{song.artist}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

Songs.propTypes = {
    songs: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            artist: PropTypes.string.isRequired
        })
    ).isRequired,
    onSelectSong: PropTypes.func.isRequired,
    currentSongIndex: PropTypes.number
};

export default Songs;