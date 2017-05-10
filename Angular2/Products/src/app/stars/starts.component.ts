import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css'],
})
export class StarsComponent  {
    @Input()
    score: number;
    @Output()
    ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    getScore(score: number): number[] {
        return score ? this.getScore(score - 1).concat(score) : [];
    }

    onClick() {
        this.ratingClicked.emit(`La calificación de este producto es: ${this.score}`)
    }
}
