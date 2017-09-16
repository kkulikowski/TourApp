import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { Waypoint } from '../../models/waypoint.interface';

@Component({selector: 'app-waypoints',
  template: `
    <md-card>
      <md-card-title>
        Waypoints
      </md-card-title>

      <md-card-content>
        <form name="newWaypointForm" #newWaypointForm (submit)="addWaypoint(newWaypointForm, waypoint.value)">
          <md-form-field>
            <input mdInput #waypoint name="waypoint" required placeholder="New Waypoint">
          </md-form-field>
        </form>
        <md-nav-list>
          <md-list-item *ngFor="let waypoint of selectedTour.waypoints">
            <app-waypoint [waypoint]="waypoint" (onRemoveWaypoint)="handleRemoveWaypoint($event)">
            </app-waypoint>
          </md-list-item>
        </md-nav-list>
      </md-card-content>
    </md-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WaypointsComponent {
  @Input() selectedTour;

  @Output() onAddWaypoint = new EventEmitter<any>();
  @Output() onRemoveWaypoint = new EventEmitter<Waypoint>();

  addWaypoint(newWaypointForm, waypointName: string) {
    newWaypointForm.reset();
    this.onAddWaypoint.emit({waypoint: {location: waypointName}, selectedTour: this.selectedTour});
  }

  handleRemoveWaypoint($event: Waypoint) {
    this.onRemoveWaypoint.emit($event);
  }
}
