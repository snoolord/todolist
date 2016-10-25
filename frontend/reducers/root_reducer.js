import { combineReducers } from 'redux';
import TodosReducer from './todo_reducer';

export const RootReducer = combineReducers(
  {
    todos: TodosReducer
  }
);
