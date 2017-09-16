import {Component, Input, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-waypoint',
  template: `
    <p>{{waypoint.location}}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WaypointComponent {
  @Input() waypoint;
}
