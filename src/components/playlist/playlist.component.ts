import { Component, OnInit } from '@angular/core';
import { Event } from '_debugger';
import { PlaylistService } from '../../service/playlist.service';
import { Track } from '../../model/track';

@Component({
    selector: 'playlist',
    templateUrl: 'playlist.component.html',
    styleUrls: ['./playlist.component.scss']
})

export class PlaylistComponent implements OnInit {

    playlist: [Track];
    currentTrack: Track;

    constructor(private playlistService: PlaylistService) { };

    ngOnInit(): void { 
        this.playlist = this.playlistService.getPlaylist();
        this.playlistService.getSubjectCurrentTrack().subscribe( (currentTrack) => {
            console.debug(`PlayList receive the new Track : ${currentTrack.title}`);
            this.currentTrack = currentTrack;
        });
    };

    pickASong(index: number): void { 
        this.playlistService.selectATrack(index);
    };
}