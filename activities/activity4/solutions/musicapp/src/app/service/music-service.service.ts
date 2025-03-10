import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album } from '../models/albums.model';
import { Artist } from '../models/artists.model';

@Injectable({
  providedIn: 'root'
})
export class MusicServiceService {
  private host = 'http://localhost:5001';

  constructor(private http: HttpClient) { }

  public getArtists(callback: (artists: Artist[]) => void) {
    this.http.get<any[]>(`${this.host}/artists`)
      .subscribe(data => {
        // Map the artist strings directly from the response
        let artists = data.map(item => new Artist(item.artist));
        callback(artists);
      });
  }

  public getAlbumsOfArtist(callback: (albums: Album[]) => void, artist: string) {
    this.http.get<Album[]>(`${this.host}/albums/${artist}`)
      .subscribe(albums => {
        callback(albums);
      });
  }

  public getAlbumById(id: number, callback: (albums: Album[]) => void) {
    this.http.get<Album[]>(`${this.host}/albums?albumId=${id}`)
      .subscribe(albums => {
        callback(albums);
      });
  }

  public createAlbum(album: Album, callback: () => void) {
    this.http.post(`${this.host}/albums`, album)
      .subscribe(() => callback());
  }

  public updateAlbum(album: Album, callback: () => void) {
    this.http.put(`${this.host}/albums/${album.albumId}`, album)
      .subscribe(() => callback());
  }

  public deleteAlbum(id: number, callback: () => void) {
    this.http.delete(`${this.host}/albums/${id}`)
      .subscribe(() => callback());
  }
}

