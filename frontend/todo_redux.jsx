import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {fetchTodos, createTodos} from './util/todo_api_util';

import { requestTodos } from './actions/todo_actions';
window.requestTodos = requestTodos;
import allTodos from './reducers/selector';
window.allTodos = allTodos;
document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById('content');
  ReactDOM.render(<h1>Todos App</h1>, rootEl);
  window.store = configureStore();
});
