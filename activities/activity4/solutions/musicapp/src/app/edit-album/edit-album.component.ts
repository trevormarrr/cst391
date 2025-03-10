import { Component, OnInit } from '@angular/core';
import { Album } from '../models/albums.model';
import { ActivatedRoute } from '@angular/router';
import { MusicServiceService } from '../service/music-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-album',
  templateUrl: './edit-album.component.html',
  styleUrl: './edit-album.component.css',
  standalone: false
})
export class EditAlbumComponent implements OnInit {
  album: Album | null = null;
  wasSubmitted: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private service: MusicServiceService,
    private location: Location
  ) { }

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

  onSubmit() {
    if (this.album) {
      this.service.updateAlbum(this.album, () => {
        console.log("Album updated successfully");
        this.wasSubmitted = true;
      });
    }
  }

  onCancel() {
    this.location.back();
  }
}
