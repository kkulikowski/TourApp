import { Action } from '@ngrx/store';

import { Todo } from '../models/todo.interface';

export const GET_TODOS = 'GET_TODOS';
export const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
export const GET_TODOS_ERROR = 'GET_TODOS_ERROR';

export class GetTodosAction implements Action {
  readonly type = GET_TODOS;

  // constructor (public payload: Todo[]) { }
}

export class GetTodosSuccessAction implements Action {
  readonly type = GET_TODOS_SUCCESS;

  constructor (public payload: Todo[]) { }
}

export class GetTodosErrorAction implements Action {
  readonly type = GET_TODOS_ERROR;

  constructor (public payload: any) { }
}

export type Actions
  = GetTodosAction
  | GetTodosSuccessAction
  | GetTodosErrorAction;
