import React, { useState } from 'react';

const AddSong = ({ onAddSong }) => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !artist || !file || !image) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    const newSong = {
      title,
      artist,
      src: URL.createObjectURL(file), // Crea una URL temporal para el archivo de audio
      image: URL.createObjectURL(image), // Crea una URL temporal para la imagen
    };

    onAddSong(newSong); // Llama a la función para añadir la canción
    setTitle('');
    setArtist('');
    setFile(null);
    setImage(null);
  };

  return (
    <div className="add-song-container">
      <h3>Añadir Canción</h3>
      <form className="add-song-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Artista"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
        </div>
        <div className="form-group file-input-container">
          <input
            type="file"
            accept="audio/*"
            onChange={(e) => setFile(e.target.files[0])}
            className="file-input"
          />
        </div>
        <div className="form-group file-input-container">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="file-input"
          />
        </div>
        <button type="submit" className="submit-button">Añadir</button>
      </form>
    </div>
  );
};

export default AddSong;