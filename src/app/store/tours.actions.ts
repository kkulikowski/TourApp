import { Action } from '@ngrx/store';

import { Tour } from '../models/tour.interface';
import { Waypoint } from '../models/waypoint.interface';

export const ADD_TOUR = '[Tours] Add waypoint';
export const REMOVE_TOUR = '[Tours] Remove waypoint';
export const ADD_WAYPOINT = '[Tours] Add waypoint to tour';
export const REMOVE_WAYPOINT = '[Tours] Remove waypoint to tour';

export class AddTourAction implements Action {
  readonly type = ADD_TOUR;

  constructor (public payload: Tour) { }
}

export class RemoveTourAction implements Action {
  readonly type = REMOVE_TOUR;

  constructor (public payload: Tour) { }
}

export class AddWaypointAction implements Action {
  readonly type = ADD_WAYPOINT;

  constructor (public payload: Tour) { }
}

export class RemoveWaypointAction implements Action {
  readonly type = REMOVE_WAYPOINT;

  constructor (public payload: Tour) { }
}

export type Actions
  = AddTourAction
  | RemoveTourAction
  | AddWaypointAction
  | RemoveWaypointAction;
