import { Pipe, PipeTransform } from '@angular/core';
/*
 * Transform seconds to minutes:seconds
 * Example : 270 -> 2:30
*/
@Pipe({name: 'secondsToMinutes'})
export class secondsToMinutesPipe implements PipeTransform {
    transform(time: number): string {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        return `${minutes} : ${seconds}`;
    }
}