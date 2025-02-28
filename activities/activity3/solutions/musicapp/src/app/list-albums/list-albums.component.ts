import { Component, Input, OnInit } from '@angular/core';
import { MusicServiceService } from '../service/music-service.service';
import { Album } from '../models/Album';
import { Artist } from '../models/Artist';

@Component({
  selector: 'app-list-albums',
  imports: [],
  templateUrl: './list-albums.component.html',
  styleUrl: './list-albums.component.css'
})
export class ListAlbumsComponent implements OnInit {

  @Input() artist: Artist | null = null;
  albums: Album[] = [];
  selectedAlbum: Album | null = null;


  constructor(private service: MusicServiceService) { }

  ngOnInit() {
    if (this.artist) {
      this.albums = this.service.getAlbums(this.artist.Name);
    }
  }

  public onSelectAlbum(album: Album) {
    console.log("Selected Album of " + album.Title);
    this.selectedAlbum = album;
  }


}
