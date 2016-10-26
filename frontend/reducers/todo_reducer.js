import { RECEIVE_TODOS, REQUEST_TODOS } from '../actions/todo_actions';
import { fetchTodos, createTodos } from '../util/todo_api_util.js';
const _defaultState = {
  "1": {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  "2": {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  },
};

function TodosReducer (oldState = _defaultState, action) {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_TODOS:
      let newState = {};
      action.todos.forEach(todo => newState[todo.id] = todo);
      return newState;
    default:
      return oldState;
  }
}

export default TodosReducer;
