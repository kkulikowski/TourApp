import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodosComponent } from './containers/todos/todos.component';
import { TodoComponent } from './components/todo/todo.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { TodosEffects } from './store/todos.effects';
import { todos } from './store/todos.reducer';
import { TodosService } from './store/todos.service';

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

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({todos}),
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
      TodosEffects
    ]),
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
