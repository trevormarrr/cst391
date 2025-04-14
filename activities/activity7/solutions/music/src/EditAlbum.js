import React, { useState } from 'react';
import dataSourse from './dataSource';
import { useNavigate } from 'react-router-dom';

const EditAlbum = (props) => {
    // Initialize state with album data from props
    const album = props.album || {};
    const newAlbumCreation = !props.album;
    const navigate = useNavigate();

    const [albumId] = useState(album.albumId);  // Keep albumId immutable
    const [albumTitle, setAlbumTitle] = useState(album.title || '');
    const [artist, setArtist] = useState(album.artist || '');
    const [description, setDescription] = useState(album.description || '');
    const [year, setYear] = useState(album.year || '');
    const [image, setImage] = useState(album.image || '');

    const updateTitle = (event) => {
        setAlbumTitle(event.target.value);
    };
    const updateArtist = (event) => {
        setArtist(event.target.value);
    };
    const updateDescription = (event) => {
        setDescription(event.target.value);
    };
    const updateYear = (event) => {
        setYear(event.target.value);
    };
    const updateImage = (event) => {
        setImage(event.target.value);
    };

    const saveAlbum = async (album) => {
        try {
            const albumData = {
                title: album.title,
                artist: album.artist,
                description: album.description,
                year: parseInt(album.year),
                image: album.image,
                tracks: [] // Always include empty tracks array
            };

            console.log('Sending album data:', albumData);

            let response;
            if (newAlbumCreation) {
                response = await dataSourse.post('/albums', albumData);
            } else {
                albumData.id = parseInt(album.albumId);
                response = await dataSourse.put('/albums', albumData);
            }

            if (response && response.status === 200) {
                props.onEditAlbum(navigate);
            }
        } catch (error) {
            console.error('Save album error:', error);
            alert('Error saving album: ' + (error.response?.data?.message || error.message));
        }
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        saveAlbum({
            albumId: albumId,
            title: albumTitle,
            artist: artist,
            description: description,
            year: year,
            image: image
        });
    };

    const handleCancle = () => {
        navigate("/")
    }

    return (
        <div className='container'>
            <form onSubmit={handleFormSubmit}>
                <h1>{newAlbumCreation ? "Create New" : "Edit"}  Album</h1>
                <div className="form-group">
                    <label htmlFor="albumTitle">Album Title</label>
                    <input type="text" className="form-control" id="albumTitle" placeholder="Album Title" value={albumTitle} onChange={updateTitle} />
                    <label htmlFor="albumArtist">Artist</label>
                    <input type="text" className="form-control" id="albumArtist" placeholder="Artist" value={artist} onChange={updateArtist} />
                    <label htmlFor="albumDescription">Description</label>
                    <input type="text" className="form-control" id="albumDescription" placeholder="Description" value={description} onChange={updateDescription} />
                    <label htmlFor="albumYear">Year</label>
                    <input type="text" className="form-control" id="albumYear" placeholder="Album Year" value={year} onChange={updateYear} />
                    <label htmlFor="albumImage">Image</label>
                    <input type="text" className="form-control" id="albumImage" placeholder="Album Image" value={image} onChange={updateImage} />
                </div>
                <div style={{ margin: 10 }}>
                    <button type="button" className="btn btn-secondary" onClick={handleCancle}>Cancel</button>
                    <button type="submit" className="btn btn-warning">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default EditAlbum;