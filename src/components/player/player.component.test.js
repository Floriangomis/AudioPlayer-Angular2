/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { PlayerComponent } from './player.component';

describe('Player Component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
        declarations: [
            PlayerComponent
        ],
        });
        TestBed.compileComponents();
    });

    it('should create the Player Component', async(() => {
        const fixture = TestBed.createComponent(PlayerComponent);
        const app = fixture.debugElement.componentInstance;
        app.play();
        expect(app).toBeTruthy();
    }));


});
