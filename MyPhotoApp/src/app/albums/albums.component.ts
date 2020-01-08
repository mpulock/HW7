import { Component, OnInit } from '@angular/core';
import { Album } from '../Album';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

myName = "";
albums: Album[] = [];

  constructor(
    private albumService: AlbumService,
  ) {
   }

  ngOnInit() {

    this.myName = "Maheen"
    //this.albums = this.albumService.getAllAlbums();//

    this.albumService.getAllAlbums()
    .subscribe(
      result => this.albums = <Album[]>result,
      err => console.error('got an error: ' + err),
      () => console.log('got a complete notification')
    );
    
  }

}
