import {Input, Component, ChangeDetectionStrategy} from '@angular/core';

@Component({selector: 'app-waypoints',
  template: `
    aloha waypoints
    <app-waypoint [waypoint]="waypoint"
          *ngFor="let waypoint of waypoints">
    </app-waypoint>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WaypointsComponent {
  @Input() waypoints;
}
