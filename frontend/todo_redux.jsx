import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {fetchTodos, createTodos} from './util/todo_api_util';

import { requestTodos } from './actions/todo_actions';
window.requestTodos = requestTodos;
import allTodos from './reducers/selector';
import Root from './components/root';
window.allTodos = allTodos;
document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById('content');
  ReactDOM.render(<Root store={configureStore()}/>, rootEl);
  window.store = configureStore();
});
