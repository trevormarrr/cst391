import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreateAlbumComponent } from './create-album/create-album.component';
import { ListArtistsComponent } from './list-artists/list-artists.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateAlbumComponent,
    ListArtistsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
