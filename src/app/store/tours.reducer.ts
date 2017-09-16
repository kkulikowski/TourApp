import * as toursActions from './tours.actions';
import { Tour } from '../models/tour.interface';

export class ToursState {
  data: Tour[];
  selectedTour: Tour;
}

const DEFAULT_TOUR = {
  name: 'Default Tour',
  waypoints: [
    { location: 'Trysil' },
    { location: 'Hafjell' }
  ],
  driverData: 'no data yet'
};

const initialState: ToursState = {
  data: [
    DEFAULT_TOUR
  ],
  selectedTour: DEFAULT_TOUR
};

export function tours( state = initialState, action: toursActions.Actions ) {
  switch (action.type) {
    case toursActions.ADD_TOUR:
      return {
        ...state,
        data: [...state.data, { name: action.payload, waypoints: [], driverData: ''}],
        error: null
      };

    case toursActions.REMOVE_TOUR:
      const newTourArray = state.data.filter( (tour, index) => action.payload.name !== tour.name );
      return {
        ...state,
        data: newTourArray,
        error: null
      };

    case toursActions.SELECT_TOUR:
      return {
        ...state,
        selectedTour: action.payload
      };

    case toursActions.ADD_WAYPOINT:
      const updatedTour = {...action.payload.selectedTour, waypoints: [...state.selectedTour.waypoints, action.payload.waypoint]};
      const updatedTours = state.data.filter( (tour, index) => action.payload.selectedTour.name !== tour.name);
      return {
        ...state,
        data: [...updatedTours, updatedTour],
        selectedTour: updatedTour,
        error: null
      };

    case toursActions.REMOVE_WAYPOINT:
      const tourWithRemovedWaypoint = {...state.selectedTour, waypoints: state.selectedTour.waypoints
        .filter((waypoint, index) => action.payload.location !== waypoint.location)};
      const updatedToursWithoutWaypoing = state.data.filter( (tour, index) => state.selectedTour.name !== tour.name);
      return {
          ...state,
          data: [...updatedToursWithoutWaypoing, tourWithRemovedWaypoint],
          selectedTour: tourWithRemovedWaypoint,
          error: null
        };

    default:
      return state;
  }
}
