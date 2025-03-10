import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicServiceService} from '../service/music-service.service';

@Component({
  selector: 'app-delete-album',
  templateUrl: './delete-album.component.html',
  styleUrls: ['./delete-album.component.css']
})
export class DeleteAlbumComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: MusicServiceService) {  }

  ngOnInit()
  {
    let artist = this.route.snapshot.paramMap.get('artist');
    let id = Number.parseInt(this.route.snapshot.paramMap.get('id')!);
    this.service.deleteAlbum(id, () => {
            console.log("The return from deleteAlbum() was " + status);
        });
  }
}
