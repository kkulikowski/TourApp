import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Tour } from './models/tour.interface';
import { AppState } from './models/state.interface';
import { Store } from '@ngrx/store';
import * as toursActions from './store/tours.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tours: Observable<Tour[]>;
  title = 'Tour App';
  tileHeight = '200px';

  constructor(private store: Store<AppState>) {
    // this.store.dispatch(new toursActions.GetTodosAction());
    this.tours = store.select(state => state.tours);
  }
}
