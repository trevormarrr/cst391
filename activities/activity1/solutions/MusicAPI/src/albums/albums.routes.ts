import { Router } from 'express';
import * as AlbumsController from './albums.controller';

const router = Router();

// Get all albums or album by ID (using query parameter)
router.route('/albums').get(AlbumsController.readAlbums);

// Get albums by artist
router.route('/albums/:artist').get(AlbumsController.readAlbumsByArtist);

// Create album
router.route('/albums').post(AlbumsController.createAlbum);

// Update album
router.route('/albums/:albumId').put(AlbumsController.updateAlbum);

// Delete album
router.route('/albums/:albumId').delete(AlbumsController.deleteAlbum);

export default router;