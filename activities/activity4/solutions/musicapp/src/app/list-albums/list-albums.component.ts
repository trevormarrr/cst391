import { Component, OnInit } from '@angular/core';
import { MusicServiceService } from '../service/music-service.service';
import { Album } from '../models/albums.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-albums',
  templateUrl: './list-albums.component.html',
  styleUrl: './list-albums.component.css',
  standalone: false
})
export class ListAlbumsComponent implements OnInit {
  albums: Album[] = [];
  artistName: string = '';
  selectedAlbum: Album | null = null;

  constructor(
    private service: MusicServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.artistName = params['artist'];
      this.service.getAlbumsOfArtist((albums: Album[]) => {
        this.albums = albums;
      }, this.artistName);
    });
  }

  public onSelectAlbum(album: Album) {
    this.selectedAlbum = album;
  }
}
