import {Input, Component, ChangeDetectionStrategy} from '@angular/core';

@Component({selector: 'app-tours',
  template: `
    siema toursy
    <app-tour [tour]="tour"
          *ngFor="let tour of tours">
    </app-tour>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToursComponent {
  @Input() tours;
}
