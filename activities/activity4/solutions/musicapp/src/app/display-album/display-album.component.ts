import { Component, Input, OnInit } from '@angular/core';
import { Album } from '../models/albums.model';
import { ActivatedRoute } from '@angular/router';
import { MusicServiceService } from '../service/music-service.service';

@Component({
  selector: 'app-display-album',
  templateUrl: './display-album.component.html',
  styleUrl: './display-album.component.css',
  standalone: false
})
export class DisplayAlbumComponent implements OnInit {
  @Input() album?: Album;

  constructor(private route: ActivatedRoute, private service: MusicServiceService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const albumId = parseInt(params['id']);
      this.service.getAlbumById(albumId, (albums: Album[]) => {
        if (albums && albums.length > 0) {
          this.album = albums[0];
        }
      });
    });
  }
}
