import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WaypointsComponent } from './containers/waypoints/waypoints.component';
import { WaypointComponent } from './components/waypoint/waypoint.component';
import { ToursComponent } from './containers/tours/tours.component';
import { TourComponent } from './components/tour/tour.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { ToursEffects } from './store/tours.effects';
import { tours } from './store/tours.reducer';
import { ToursService } from './store/tours.service';

// Operators, uncomment the ones that you will use
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/switchMap';
// import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/withLatestFrom';
// import 'rxjs/add/operator/distinct';
// import 'rxjs/add/operator/distinctUntilKeyChanged';
// import 'rxjs/add/operator/distinctUntilChanged';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/takeUntil';
// import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/timer';
// import 'rxjs/add/observable/combineLatest'; import 'rxjs/add/observable/zip';

// Material Imports
import {
  // MdAutocompleteModule,
  MdButtonModule,
  // MdButtonToggleModule,
  // MdCardModule,
  // MdCheckboxModule,
  // MdChipsModule,
  MdCoreModule,
  // MdDatepickerModule,
  // MdDialogModule,
  // MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  // MdNativeDateModule,
  // MdPaginatorModule,
  // MdProgressBarModule,
  // MdProgressSpinnerModule,
  // MdRadioModule,
  // MdRippleModule,
  // MdSelectModule,
  // MdSidenavModule,
  // MdSliderModule,
  // MdSlideToggleModule,
  // MdSnackBarModule,
  // MdSortModule,
  // MdTableModule,
  // MdTabsModule,
  MdToolbarModule,
  // MdTooltipModule,
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    WaypointsComponent,
    WaypointComponent,
    ToursComponent,
    TourComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({tours}),
    /**
     * Store devtools instrument the store retaining past versions of state
     * and recalculating new states. This enables powerful time-travel
     * debugging.
     *
     * To use the debugger, install the Redux Devtools extension for either
     * Chrome or Firefox
     *
     * See: https://github.com/zalmoxisus/redux-devtools-extension
     * to turn it off on production:
     * !environment.production ? StoreDevtoolsModule.instrument() : []
     */
    StoreDevtoolsModule.instrument(),
    /**
     * EffectsModule.run() sets up the effects class to be initialized
     * immediately when the application starts.
     *
     * See: https://github.com/ngrx/effects/blob/master/docs/api.md#run
     */
    EffectsModule.forRoot([
      ToursEffects
    ]),
    FormsModule,
    /**
     * Material Imports
     */
    // MdAutocompleteModule,
    MdButtonModule,
    // MdButtonToggleModule,
    // MdCardModule,
    // MdCheckboxModule,
    // MdChipsModule,
    MdCoreModule,
    // MdDatepickerModule,
    // MdDialogModule,
    // MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    // MdNativeDateModule,
    // MdPaginatorModule,
    // MdProgressBarModule,
    // MdProgressSpinnerModule,
    // MdRadioModule,
    // MdRippleModule,
    // MdSelectModule,
    // MdSidenavModule,
    // MdSliderModule,
    // MdSlideToggleModule,
    // MdSnackBarModule,
    // MdSortModule,
    // MdTableModule,
    // MdTabsModule,
    MdToolbarModule,
    // MdTooltipModule,
  ],
  providers: [ToursService],
  bootstrap: [AppComponent]
})
export class AppModule { }
