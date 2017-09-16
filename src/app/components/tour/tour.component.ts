import {Component, Input, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-tour',
  template: `
    <p>{{tour | json}}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TourComponent {
  @Input() tour;
}
