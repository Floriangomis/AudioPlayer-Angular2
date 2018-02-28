import { Injectable } from '@angular/core';
import { Track } from '../model/track';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class PlaylistService {

    playlist: [Track] = [
        {
            title: 'Dive (Full Album)',
            link: 'https://dc602.4shared.com/img/H2WjHIByce/9d361b8/dlink__2Fdownload_2FH2WjHIByce_2FTycho_5F-_5FDive_5FFull_5FAlbum.mp3_3Fsbsr_3D5ff55b096a02e3d5e3999e2997835a8c9d0_26bip_3DODYuMTc3LjQuODA_26lgfp_3D52_26bip_3DODYuMTc3LjQuODA/preview.mp3',
            cover: 'https://i1.sndcdn.com/artworks-000298629111-zerc8s-t500x500.jpg',
            artist: 'Tycho'
        },
        {
            title: 'Awake',
            link: 'https://dc706.4shared.com/img/eohxDhaIba/5808801/dlink__2Fdownload_2FeohxDhaIba_2FTycho_5F_5F_5FAwake.mp3_3Fsbsr_3D82a923b7fc1ccf19ff880048d89da1519d0_26bip_3DODYuMTc3LjQuODA_26lgfp_3D52_26bip_3DODYuMTc3LjQuODA/preview.mp3',
            cover: 'https://i1.sndcdn.com/artworks-000060116506-zfp3zc-t500x500.jpg',
            artist: 'Tycho'
        },
        {
            title: 'The Science of Pattern',
            link: 'https://dc742.4shared.com/img/ZU_V2bLnce/6c013650/dlink__2Fdownload_2FZU_5FV2bLnce_2FTycho_5F-_5FThe_5FScience_5Fof_5FPattern.mp3_3Fsbsr_3D3cb2c9ac112df079e2ca37cb52cf8e3b9d0_26bip_3DODYuMTc3LjQuODA_26lgfp_3D52_26bip_3DODYuMTc3LjQuODA/preview.mp3',
            cover: 'https://i1.sndcdn.com/artworks-000060116506-zfp3zc-t500x500.jpg',
            artist: 'Tycho'
        },
        {
            title: 'Do for love',
            link: 'https://dc382.4shared.com/img/n82_JNsIce/81078929/dlink__2Fdownload_2Fn82_5FJNsIce_2F2Pac_5F-_5FDo_5FFor_5FLove.mp3_3Fsbsr_3D2feec5bc19f2bcf44f4bee377eded5e79d0_26bip_3DODYuMTc3LjQuODA_26lgfp_3D52_26bip_3DODYuMTc3LjQuODA/preview.mp3',
            cover: 'https://i1.sndcdn.com/artworks-000301660641-6x3gor-t500x500.jpg',
            artist: 'Tupac'
        },
    ];

    indexSong: number = 0;
    currentTrack: BehaviorSubject<Track> = new BehaviorSubject(this.playlist[this.indexSong]);
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
        this.currentTrack.next( this.playlist[this.indexSong] );
    };

    getSubjectCurrentTrack(): BehaviorSubject<Track> {
        return this.currentTrack;
    };
    
    getPlaylist(): [Track] {
        return this.playlist;
    };
}