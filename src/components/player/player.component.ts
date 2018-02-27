import { Component, OnInit, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core/src/linker/element_ref';
import { PlaylistService } from '../../service/playlist.service';
import { Track } from '../../model/track';

@Component({
    selector: 'player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

    @ViewChild('audioPlayer') player: ElementRef;

    currentTrack: Track;
    playPauseValue: string = 'Play';
    currentTime: number = 0;
    duration: number = 0;


    constructor(private playlistService: PlaylistService) { }

    ngOnInit() {
        this.bindPlayerEvent();
        
        this.playlistService.getSubjectCurrentTrack().subscribe( (currentTrack) => {
            console.debug(`Player receive the new Track : ${currentTrack.title}`);
            this.currentTrack = currentTrack;
            this.play();
        }); 
        this.playlistService.init();
    };

    bindPlayerEvent(): void {
        this.player.nativeElement.addEventListener('playing', (event) => {
            this.playPauseValue = 'Pause';
            this.duration = Math.floor(this.player.nativeElement.duration);
        });
        this.player.nativeElement.addEventListener('pause', (event) => {
            this.playPauseValue = 'Play';
        });
        this.player.nativeElement.addEventListener('ended', (event) => {
            this.nextSong();
        });
        this.player.nativeElement.addEventListener('timeupdate', (event) => {
            this.currentTime = Math.floor(this.player.nativeElement.currentTime);
        });
    };

    playBtnHandler(): void {
        if( this.player.nativeElement.paused ) {
            this.player.nativeElement.play(this.currentTime);
        } else {
            this.currentTime = this.player.nativeElement.currentTime;
            this.player.nativeElement.pause();
        }
    };

    nextSong(): void {
        this.playlistService.nextSong();
        this.play();
    };

    previousSong(): void {
        if(!this.checkSongHasStartedSinceAtleastTwoSeconds()) {
            this.playlistService.previousSong();
        } else {
            this.resetSong();
        }
        this.play();
    };

    resetSong():void {
        this.player.nativeElement.src = this.currentTrack.link;
    };

    play(): void {
        setTimeout(() => {
            this.player.nativeElement.play();
        }, 0);
    };

    checkSongHasStartedSinceAtleastTwoSeconds(): boolean {
        return this.player.nativeElement.currentTime > 2;
    };
}