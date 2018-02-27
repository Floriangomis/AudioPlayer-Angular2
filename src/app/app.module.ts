import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// Component
import { PlayerComponent } from '../components/player/player.component';
import { PlaylistComponent } from '../components/playlist/playlist.component';
// Service
import { PlaylistService } from '../service/playlist.service';
// Pipe
import { secondsToMinutesPipe } from '../pipe/secondsToMinutes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    PlaylistComponent,
    secondsToMinutesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PlaylistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
