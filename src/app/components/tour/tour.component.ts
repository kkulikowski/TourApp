import {Component, Input, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';
import {Tour} from '../../models/tour.interface';

@Component({
  selector: 'app-tour',
  template: `
    <div fxLayout="row">
      <a mdLine (click)="selectTour(tour)">
        {{ tour.name }}
      </a>
      <md-icon (click)="handleRemoveTour(tour)">delete</md-icon>
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
