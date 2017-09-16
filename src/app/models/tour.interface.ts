import { Waypoint } from './waypoint.interface';

export interface Tour {
  name: string;
  waypoints: Waypoint[];
  driverData: string;
}
