import configureStore from '../store/store';

function allTodos (state) {
  let keys = Object.keys(state.todos);

  return keys.map( (todo) => {
    return state["todos"][todo];
  });
}


export default allTodos;
