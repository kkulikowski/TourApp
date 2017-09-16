import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { GET_TODOS, GET_TODOS_SUCCESS, GET_TODOS_ERROR } from './todos.actions';
import { TodosService } from './todos.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodosEffects {
  constructor( private actions$: Actions,
               private todosService: TodosService ) {
  }

  @Effect() getTodos$ = this.actions$
    .ofType(GET_TODOS)
    .switchMap(action =>
      this.todosService.getTodos()
        // if success, dispatch actions and pass payload with todos
        .map(todos => ({type: GET_TODOS_SUCCESS, payload: todos}))
        // if fail, dispatch error action - you can add notification or something here
        .catch(() => Observable.of({type: GET_TODOS_ERROR})));
}
