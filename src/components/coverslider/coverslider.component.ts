import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Track } from 'model/track';

@Component({
    selector: 'coverslider',
    templateUrl: 'coverslider.component.html',
    styleUrls: ['coverslider.component.scss']
})

export class CoversliderComponent implements OnInit {
    
    @Input() playlistTrack: [Track];

    @ViewChild('container') container: ElementRef;

    constructor() { }

    ngOnInit() { };

    nextSlide(): void{
        let prev = this.container.nativeElement.querySelector('div.previous')
        let current = this.container.nativeElement.querySelector('div.current')
        let next = this.container.nativeElement.querySelector('div.next')
        
        current.className = "previous";
        next.className = "current";
        prev.className = "next";
    };

    previousSlide(): void{
        let prev = this.container.nativeElement.querySelector('div.previous')
        let current = this.container.nativeElement.querySelector('div.current')
        let next = this.container.nativeElement.querySelector('div.next')
        
        current.className = "next";
        next.className = "previous";
        prev.className = "current";
    };
}