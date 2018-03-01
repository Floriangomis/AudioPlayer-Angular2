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
    playlistTrack: any;

    constructor(private playlistService: PlaylistService) { };

    ngOnInit(): void { 
        this.playlist = this.playlistService.getPlaylist();
        this.playlistService.getSubjectCurrentTrack().subscribe( (playlistTrack) => {
            this.playlistTrack = playlistTrack;
        });
    };

    pickASong(index: number): void { 
        this.playlistService.selectATrack(index);
    };
}