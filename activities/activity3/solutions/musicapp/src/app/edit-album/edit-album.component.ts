import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../models/Album';
import { MusicServiceService } from '../service/music-service.service';

@Component({
  selector: 'app-edit-album',
  imports: [],
  templateUrl: './edit-album.component.html',
  styleUrl: './edit-album.component.css'
})
export class EditAlbumComponent implements OnInit
{
  album!:Album;
  tracksRaw:string = "";
  wasSubmitted:boolean = false;

  constructor(private route: ActivatedRoute, private service: MusicServiceService, private location: Location) { }

  ngOnInit() {
    let artist = this.route.snapshot.paramMap.get('artist');
    let id = Number.parseInt(this.route.snapshot.paramMap.get('id')!);
    console.log("The ID is " + id);
    console.log("The Artist is " + artist);

/*
    this.service.getAlbum(artist, id, (album:Album) => {
      this.album = album;
      for(let x=0;x < this.album.Tracks.length;++x)
      {
        this.tracksRaw = this.tracksRaw + this.album.Tracks[x].Title;
        if(this.album.Tracks[x].Lyrics != null && this.album.Tracks[x].Lyrics != '')
          this.tracksRaw = this.tracksRaw + ';' + this.album.Tracks[x].Lyrics;
        if(this.album.Tracks[x].Video != null && this.album.Tracks[x].Video != '')
          this.tracksRaw = this.tracksRaw + ';' + this.album.Tracks[x].Video;
        this.tracksRaw = this.tracksRaw + '\n';
      }
    });

*/
  }

  public onCancel() {
    console.log("I am going back");
    //this.location.back();
  }

  public onSubmit() {

/*
    this.service.updateAlbum(this.album, (status:any) =>
    {
      console.log("The return from updateAlbum() was " + status);
      this.wasSubmitted = true;
    });
*/
  }

}

