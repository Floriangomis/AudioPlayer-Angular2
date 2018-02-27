import { Injectable } from '@angular/core';
import { Track } from '../model/track';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class PlaylistService {

    playlist: [Track] = [
        {
            title: 'Do for love - Tupac',
            link: 'https://dc382.4shared.com/img/n82_JNsIce/81078929/dlink__2Fdownload_2Fn82_5FJNsIce_2F2Pac_5F-_5FDo_5FFor_5FLove.mp3_3Fsbsr_3D2feec5bc19f2bcf44f4bee377eded5e79d0_26bip_3DODYuMTc3LjQuODA_26lgfp_3D52_26bip_3DODYuMTc3LjQuODA/preview.mp3',
            cover: 'https://i1.sndcdn.com/artworks-000301660641-6x3gor-t500x500.jpg'
        },
        {
            title: 'Galate - Nekfeu',
            link: 'https://dc698.4shared.com/img/LxFiE8wjce/2e81256f/dlink__2Fdownload_2FLxFiE8wjce_2FNekfeu_5F-_5FSaturne_5F_5Ffeat_5FSneazzy.mp3_3Fsbsr_3D35c1d9b8cf900d8d9dbab86289a158af9d0_26bip_3DODYuMTc3LjQuODA_26lgfp_3D52_26bip_3DODYuMTc3LjQuODA/preview.mp3',
            cover: 'https://i1.sndcdn.com/artworks-000298629111-zerc8s-t500x500.jpg'
        },
        {
            title: 'Plume - Nekfeu',
            link: 'https://dc622.4shared.com/img/-P3Iwdy2ce/11e5d980/dlink__2Fdownload_2F-P3Iwdy2ce_2FNekfeu_5F-_5FPlume.mp3_3Fsbsr_3Dae238231e6183d1ec5e15e0a02924fd29d0_26bip_3DODYuMTc3LjQuODA_26lgfp_3D52_26bip_3DODYuMTc3LjQuODA/preview.mp3',
            cover: 'https://i1.sndcdn.com/artworks-000292226010-e3pp2p-t500x500.jpg'
        }  
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