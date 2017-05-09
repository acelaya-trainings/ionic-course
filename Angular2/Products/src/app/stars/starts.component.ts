import { Component, Input } from '@angular/core';

@Component({
  selector: 'stars',
  templateUrl: './stars.component.html',
})
export class StarsComponent  {
    @Input()
    score: number;

    getScore(score: number): number[] {
        return score ? this.getScore(score - 1).concat(score) : [];
    }
}
