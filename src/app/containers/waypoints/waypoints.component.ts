import {Input, Component, ChangeDetectionStrategy} from '@angular/core';

@Component({selector: 'app-waypoints',
  template: `
    <md-toolbar>
      <span>Waypoints</span>
    </md-toolbar>
    <app-waypoint [waypoint]="waypoint"
          *ngFor="let waypoint of selectedTour.waypoints">
    </app-waypoint>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WaypointsComponent {
  @Input() selectedTour;
}
