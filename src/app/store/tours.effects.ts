import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ADD_TOUR, REMOVE_TOUR } from './tours.actions';
import { ToursService } from './tours.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ToursEffects {
  constructor( private actions$: Actions,
               private toursService: ToursService ) {
  }

  // @Effect() getWaypoints$ = this.actions$
  //   .ofType(ADD_WAYPOINT)
  //   .switchMap(action =>
  //     this.toursService.doSomething()
  //       // if success, dispatch actions and pass payload with object
  //       .map(tours => ({type: SOME_ACTION_SUCCESS, payload: somePayload}))
  //       // if fail, dispatch error action - you can add notification or something here
  //       .catch(() => Observable.of({type: SOME_ACTION_ERROR})));
}
