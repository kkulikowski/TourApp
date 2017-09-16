import {Component, Input, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';
import {Tour} from '../../models/tour.interface';

@Component({
  selector: 'app-tour',
  template: `
    <div>
      <a mdLine (click)="selectTour(tour)">
      {{ tour.name }}
      <md-icon *ngIf="tour.selected">keyboard_arrow_right</md-icon>
      </a>
      <md-icon (click)="handleRemoveTour(tour)">remove</md-icon>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TourComponent {
  @Input() tour;

  @Output() onRemoveTour = new EventEmitter<Tour>();
  @Output() onSelectTour = new EventEmitter<Tour>();

  selectTour(tour) {
    this.onSelectTour.emit(tour);
  }

  handleRemoveTour(tour) {
    this.onRemoveTour.emit(tour);
  }

}
