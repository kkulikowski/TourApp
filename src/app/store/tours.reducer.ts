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
      const newToursAfterAdd = state.data.map( (tour) => {
        if (tour.name !== action.payload.name) { return tour; }
        return {...tour, ...action.payload};
      });
      return {
        ...state,
        tours: [...state.data, newToursAfterAdd],
        error: null
      };

    case toursActions.REMOVE_WAYPOINT:
      const newToursAfterRemove = state.data.map( (tour) => {
        if (tour.name !== action.payload.name) { return tour; }
        return {...tour, ...action.payload};
      });
      return {
        ...state,
        tours: [...state.data, newToursAfterRemove],
        error: null
      };

    default:
      return state;
  }
}
