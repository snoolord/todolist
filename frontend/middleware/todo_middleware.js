import {fetchTodos} from '../util/todo_api_util';
import { REQUEST_TODOS, RECEIVE_TODOS, requestTodos, receiveTodos } from '../actions/todo_actions';


const TodoMiddleware = ({ store, dispatch }) => next => action => {
  switch(action.type) {
    case (REQUEST_TODOS):
      const success = ( data ) => dispatch(receiveTodos(data));
      const error = e => alert(e);
      fetchTodos(success, error);
      return next(action);
    default:
      return next(action);
  }
};

export default TodoMiddleware;
