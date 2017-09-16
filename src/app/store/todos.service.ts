import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodosService {

  // it should be real http request
  getTodos() {
    const todos = [
      {
        id: 1,
        title: 'Do stuff',
        completed: false
      },
      {
        id: 2,
        title: 'Learn ngrx/effects',
        completed: false
      }
    ];
    return Observable.timer(1000).mapTo(todos);
  }

}
