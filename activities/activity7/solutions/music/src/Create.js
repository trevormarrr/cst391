import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Create = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [album, setAlbum] = useState({
        title: '',
        artist: '',
        description: '',
        year: '',
        image: ''
    });

    useEffect(() => {
        if (id) {
            const fetchAlbum = async () => {
                try {
                    const response = await axios.get(`http://localhost:5001/albums/${id}`);
                    setAlbum(response.data);
                } catch (error) {
                    console.error('Error fetching album:', error);
                }
            };
            fetchAlbum();
        }
    }, [id]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setAlbum(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (id) {
                await axios.put(`http://localhost:5001/albums/${id}`, album);
            } else {
                await axios.post('http://localhost:5001/albums', album);
            }
            navigate('/');
        } catch (error) {
            console.error('Error saving album:', error);
        }
    };

    return (
        <div className="container">
            <h2>{id ? 'Edit Album' : 'Create New Album'}</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        name="title"
                        value={album.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Artist</label>
                    <input
                        type="text"
                        className="form-control"
                        name="artist"
                        value={album.artist}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                        className="form-control"
                        name="description"
                        value={album.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Year</label>
                    <input
                        type="number"
                        className="form-control"
                        name="year"
                        value={album.year}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Image URL</label>
                    <input
                        type="text"
                        className="form-control"
                        name="image"
                        value={album.image}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    {id ? 'Update Album' : 'Create Album'}
                </button>
            </form>
        </div>
    );
};

export default Create;