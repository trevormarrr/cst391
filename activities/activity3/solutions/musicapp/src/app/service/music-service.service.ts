import { Injectable } from '@angular/core';

// Importing sample music data from a JSON file
import exampledata from '../../data/sample-music-data.json';

// Importing the models for Album, Artist, and Track
import { Album } from '../models/Album';
import { Artist } from '../models/Artist';
import { Track } from '../models/Track';

// Injectable service to provide music-related data throughout the application
@Injectable({ providedIn: 'root' })
export class MusicServiceService {
  // Private arrays to store artists and albums data
  private readonly artists: Artist[] = [];
  private readonly albums: Album[] = [];

  // Constructor initializes the service by populating artists and albums
  constructor() {
    this.createArtists();
    this.createAlbums();
  }

  /**
   * Populates the artists array with predefined artist data.
   * Currently, it only adds "The Beatles".
   */
  private createArtists(): void {
    this.artists.push(new Artist(0, 'The Beatles'));
  }

  /**
   * Populates the albums array by reading from the imported example data.
   * Filters the data to include only albums by "The Beatles".
   */
  private createAlbums(): void {
    exampledata.forEach((data: any) => {
      if (data.artist === 'The Beatles') {
        // Mapping track data to Track model
        const tracks = data.tracks.map((trackData: any) =>
          new Track(trackData.id, trackData.number, trackData.title, trackData.lyrics, trackData.video)
        );
        // Creating an Album instance and adding it to the albums array
        const album = new Album(data.id, data.title, data.artist, data.description, data.year, data.image, tracks);
        this.albums.push(album);
      }
    });
  }

  /**
   * Returns the list of artists available in the service.
   * @returns An array of Artist objects.
   */
  public getArtists(): Artist[] {
    return this.artists;
  }

  /**
   * Returns the list of albums for a given artist.
   * Currently, it returns all albums without filtering by artist.
   * @param artist - The name of the artist.
   * @returns An array of Album objects.
   */
  public getAlbums(artist: string): Album[] {
    return this.albums; // Should ideally filter albums by artist
  }

  /**
   * Retrieves a specific album by its ID and artist name.
   * @param artist - The name of the artist.
   * @param id - The ID of the album.
   * @returns An Album object if found, otherwise undefined.
   */
  public getAlbum(artist: string, id: number): Album | undefined {
    const album = this.albums.find((a) => a.Artist === artist && a.Id === id);

    if (album) {
      // Creating a deep copy of the album to prevent mutation
      const tracks = album.Tracks.map((track) =>
        new Track(track.Id, track.Number, track.Title, track.Lyrics, track.Video)
      );
      return new Album(album.Id, album.Title, album.Artist, album.Description, album.Year, album.Image, tracks);
    }

    return undefined;
  }

  /**
   * Adds a new album to the albums array.
   * @param album - The Album object to be added.
   */
  public createAlbum(album: Album): void {
    this.albums.push(album);
  }

  /**
   * Updates an existing album in the albums array.
   * @param album - The updated Album object.
   */
  public updateAlbum(album: Album): void {
    const index = this.albums.findIndex((a) => a.Id === album.Id);

    if (index !== -1) {
      this.albums.splice(index, 1, album);
    }
  }

  /**
   * Deletes an album from the albums array by its ID.
   * @param id - The ID of the album to be deleted.
   * @param artist - The name of the artist (currently unused in deletion logic).
   */
  public deleteAlbum(id: number, artist: string): void {
    const index = this.albums.findIndex((a) => a.Id === id);

    if (index !== -1) {
      this.albums.splice(index, 1);
    }
  }
}
