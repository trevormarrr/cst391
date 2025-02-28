import { Component, OnInit } from '@angular/core';
import { Album } from '../models/Album';
import { Track } from '../models/Track';
import { MusicServiceService } from '../service/music-service.service';

@Component({
  selector: 'app-create-album',
  templateUrl: './create-album.component.html',
  styleUrl: './create-album.component.css',
  standalone: false
})
export class CreateAlbumComponent implements OnInit {
	album: Album = new Album(Math.floor(Math.random() * 1000000), '', '', '', 0, '', []);
	tracksRaw: string = '';
	wasSubmitted: boolean = false;

	constructor(private service: MusicServiceService) { }

	ngOnInit() { }

	public onSubmit() {
		const tracks: Track[] = this.parseTracks(this.tracksRaw);
		this.album.Tracks = tracks;
		const status = this.service.createAlbum(this.album);
		console.log('The return from createAlbum() was ' + status);
		this.wasSubmitted = true;
	}

	private parseTracks(rawTracks: string): Track[] {
		const tracks: Track[] = [];
		const lines = rawTracks.split('\n');

		lines.forEach((line, index) => {
			const [title, lyrics, video] = line.split(':');
			tracks.push(new Track(Math.floor(Math.random() * 1000000), index + 1, title, lyrics || '', video || ''));
		});

		return tracks;
	}
}

