import { Component, Input, OnInit } from '@angular/core';
import { Album } from '../models/Album';

@Component({
  selector: 'app-display-album',
  imports: [],
  templateUrl: './display-album.component.html',
  styleUrl: './display-album.component.css'
})
export class DisplayAlbumComponent implements OnInit {
  @Input() album: Album | null = null;

  constructor() { }

  ngOnInit() { }
}

