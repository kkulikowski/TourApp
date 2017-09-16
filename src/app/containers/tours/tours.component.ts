import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { Tour } from '../../models/tour.interface';

@Component({selector: 'app-tours',
  template: `
    <md-toolbar>
      <span>Tours</span>
    </md-toolbar>
    <form name="newTourForm" (submit)="addTour(tourName.value)">
      <md-form-field>
        <input mdInput #tourName name="tourName" required>
        <p *ngIf="error">Tour with that name already exists</p>
      </md-form-field>
    </form>
    <md-nav-list>
      <md-list-item *ngFor="let tour of tours">
        <app-tour [tour]="tour" (onRemoveTour)="handleRemoveTour($event)" (onSelectTour)="handleSelectTour($event)">
        </app-tour>
      </md-list-item>
    </md-nav-list>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToursComponent {
  @Input() tours;
  error = false;

  @Output() onAddTour = new EventEmitter<string>();
  @Output() onRemoveTour = new EventEmitter<Tour>();
  @Output() onSelectTour = new EventEmitter<Tour>();

  addTour(tourName: string) {
    if (!!this.tours.filter(tour => tour.name === tourName)[0]) {
      this.error = true;
    } else {
      this.error = false;
      this.onAddTour.emit(tourName);
    }
  }

  handleRemoveTour($event: Tour) {
    this.onRemoveTour.emit($event);
  }

  handleSelectTour($event: Tour) {
    this.onSelectTour.emit($event);
  }
}
