import {Component, Input, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';
import {Waypoint} from '../../models/waypoint.interface';

@Component({
  selector: 'app-waypoint',
  template: `
    <div fxLayout="row">
      <a mdLine>
      {{waypoint.location}}
      </a>
      <md-icon (click)="handleRemoveWaypoint(waypoint)">delete</md-icon>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WaypointComponent {
  @Input() waypoint;
  @Output() onRemoveWaypoint = new EventEmitter<Waypoint>();

  handleRemoveWaypoint(waypoint) {
    this.onRemoveWaypoint.emit(waypoint);
  }
}
