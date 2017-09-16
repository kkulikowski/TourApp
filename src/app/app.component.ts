import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Todo } from './models/todo.interface';
import { State } from './models/state.interface';
import { Store } from '@ngrx/store';
import * as todosActions from './store/todos.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: Observable<Todo[]>;
  title = 'Angular ngrx Boilerplate';

  constructor(private store: Store<State>) {
    this.store.dispatch(new todosActions.GetTodosAction());
    this.todos = store.select('todos');
  }
}
