import * as toursActions from './tours.actions';

const initialState = {
  data: [
    {
      name: 'Default Tour',
      waypoints: [
        { location: 'Trysil' },
      ],
      driverData: 'no data yet'
    }
  ]
};

export function tours( state = initialState, action: toursActions.Actions ) {
  switch (action.type) {
    case toursActions.ADD_TOUR:
      return {
        ...state,
        data: [...state.data, action.payload],
        error: null
      };

    case toursActions.REMOVE_TOUR:
      const newTourArray = state.data.filter( (tour, index) => action.payload.name !== tour.name );
      return {
        ...state,
        tours: newTourArray,
        error: null
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
