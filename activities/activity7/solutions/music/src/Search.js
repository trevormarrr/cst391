import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Album from './Album';
import OneAlbum from './OneAlbum';

const Search = (props) => {
    const { id } = useParams();

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get('http://localhost:5001/albums');
                props.setAlbums(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, []);

    if (props.showOne && id) {
        const album = props.albums.find(album => album.albumId === parseInt(id));
        return album ? <OneAlbum album={album} /> : <div>Album not found</div>;
    }

    const filteredAlbums = props.albums.filter(album => {
        return album.title.toLowerCase().includes(props.phrase.toLowerCase()) ||
               album.artist.toLowerCase().includes(props.phrase.toLowerCase()) ||
               album.description.toLowerCase().includes(props.phrase.toLowerCase());
    });

    return (
        <div className='container'>
            <h1>Albums</h1>
            <div className='row'>
                {filteredAlbums.map(album => (
                    <div className='col-sm-4' key={album.albumId}>
                        <Album album={album} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Search;