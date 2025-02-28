import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicServiceService } from '../service/music-service.service';
import { Artist } from '../models/Artist';

@Component({
  selector: 'app-list-artists',
  standalone: false,
  templateUrl: './list-artists.component.html',
  styleUrl: './list-artists.component.css'
})
export class ListArtistsComponent implements OnInit {
  selectedArtist: Artist | null = null;
  artists: Artist[] = [];

  constructor(private route: ActivatedRoute, private service: MusicServiceService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log("Getting data....");
      this.artists = this.service.getArtists();
      this.selectedArtist = null;
    });
  }

  onSelectArtist(artist: Artist) {

    this.selectedArtist = artist;

    }
}
