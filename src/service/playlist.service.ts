import { Injectable } from '@angular/core';
import { Track } from '../model/track';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class PlaylistService {

    playlist: [Track] = [
        {
            title: 'Cabrioli',
            link: 'https://www.1010diy.com/mp3?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dl98fXGtGkqg&quality=128k',
            cover: 'https://static.qobuz.com/images/covers/22/29/3614979352922_600.jpg',
            artist: 'Moussa'
        },
        {
            title: 'Oh Shit !',
            link: 'https://www.1010diy.com/mp3?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D1-Mjw96lYgU&quality=128k',
            cover: 'https://images.genius.com/8d153823e72b48bc9b05be97f7d27141.1000x1000x1.jpg',
            artist: 'Injury Reserve'
        },
        {
            title: 'All this money',
            link: 'https://www.1010diy.com/mp3?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DjcZ1Te9-1go&quality=128k',
            cover: 'https://images.genius.com/8d153823e72b48bc9b05be97f7d27141.1000x1000x1.jpg',
            artist: 'Injury Reserve'
        },
        {
            title: 'TTKTV',
            link: 'https://www.1010diy.com/mp3?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DUjD221A8RjQ&quality=128k',
            cover: 'https://t2.genius.com/unsafe/220x0/https%3A%2F%2Fimages.genius.com%2F48180d50daa0299ecab0c2993e418019.1000x1000x1.jpg',
            artist: 'Injury Reserve'
        }
    ];

    indexSong: number = 0;
    currentTrack: BehaviorSubject<{}> = new BehaviorSubject(this.playlist[this.indexSong]);
    currentTime: number = 0;
    duration: number = 0;

    constructor() {

    };

    init(): void {
        this.updateCurrentSong();
    };

    nextSong(): void {
        if( (this.indexSong + 1) >= this.playlist.length ) {
            this.indexSong = 0;
        } else {
            this.indexSong++;
        }
        this.updateCurrentSong();
    };

    previousSong(): void {
        if( (this.indexSong - 1) < 0 ) {
            this.indexSong = (this.playlist.length-1);
        } else {
            this.indexSong--;
        }
        this.updateCurrentSong();
    };

    resetPlaylist(): void {
        this.indexSong = 0;
        this.updateCurrentSong();
    };
    
    selectATrack(index: number): void {
        this.indexSong = index;
        this.updateCurrentSong();
    };

    updateCurrentSong(): void {
        let current = this.playlist[this.indexSong];
        let previous = ((this.indexSong-1) >= 0) ? this.playlist[this.indexSong-1] : this.playlist[this.playlist.length-1];
        let next = ((this.indexSong+1) >= this.playlist.length) ? this.playlist[0] : this.playlist[this.indexSong+1];

        this.currentTrack.next( [
            previous,
            current,
            next 
        ]);
    };

    getSubjectCurrentTrack(): BehaviorSubject<{}> {
        return this.currentTrack;
    };
    
    getPlaylist(): [Track] {
        return this.playlist;
    };
}