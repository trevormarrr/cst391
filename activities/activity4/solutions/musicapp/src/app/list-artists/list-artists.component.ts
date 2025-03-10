import { Component, OnInit } from '@angular/core';
import { MusicServiceService } from '../service/music-service.service';
import { Artist } from '../models/artists.model';

@Component({
  selector: 'app-list-artists',
  templateUrl: './list-artists.component.html',
  styleUrl: './list-artists.component.css',
  standalone: false
})
export class ListArtistsComponent implements OnInit {
  artists: Artist[] = [];
  selectedArtist: Artist | null = null;

  constructor(private service: MusicServiceService) {}

  ngOnInit() {
    this.service.getArtists((artists: Artist[]) => {
      this.artists = artists;
      console.log('Artists loaded:', this.artists);
    });
  }

  onSelectArtist(artist: Artist) {
    this.selectedArtist = artist;
  }
}
