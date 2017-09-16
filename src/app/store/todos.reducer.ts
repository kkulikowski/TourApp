import * as todosActions from './todos.actions';
import { Todo } from '../models/todo.interface';

export interface TodosState {
  data: Todo[];
  pending: boolean;
  error: any;
}

const initialState: TodosState = {
  data: [],
  pending: false,
  error: null
};

export function todos( state = initialState, action: todosActions.Actions ) {
  switch (action.type) {
    case todosActions.GET_TODOS:
      return {
        ...state,
        pending: true,
        error: null
      };

    case todosActions.GET_TODOS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        pending: false,
        error: null
      };

    case todosActions.GET_TODOS_ERROR:
    return {
      ...state,
      pending: false,
      error: 'Error' // it should be error from effect
    };

    default:
      return state;
  }
}
