import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './NavBar';
import Search from './Search';
import EditAlbum from './EditAlbum';
import OneAlbum from './OneAlbum';
import dataSource from './dataSource';
import './App.css';

const App = () => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [album, setAlbum] = useState(null);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    loadAlbums();
  }, []);

  const loadAlbums = async () => {
    try {
      const response = await dataSource.get('/albums');
      setAlbums(response.data);
    } catch (error) {
      console.error('Error loading albums:', error);
    }
  };

  const onEditAlbum = async (navigate) => {
    try {
      await loadAlbums();
      navigate('/');
    } catch (error) {
      console.error('Error after edit:', error);
    }
  }

  const onSelect = (selectedAlbum) => {
    if (selectedAlbum && selectedAlbum.id) {
      setAlbum({
        ...selectedAlbum,
        albumId: selectedAlbum.id
      });
    }
  }

  return (
    <BrowserRouter>
      <NavBar setSearchPhrase={setSearchPhrase} />
      <Routes>
        <Route path="/" element={<Search phrase={searchPhrase} albums={albums} setAlbums={setAlbums} />} />
        <Route path="/create" element={<EditAlbum onEditAlbum={onEditAlbum} />} />
        <Route path="/show/:id" element={<Search phrase={""} albums={albums} setAlbums={setAlbums} showOne={true} />} />
        <Route path="/edit/:id" element={<EditAlbum album={album} onEditAlbum={onEditAlbum} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
