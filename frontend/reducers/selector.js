import configureStore from '../store/store';

function allTodos (state) {
  let keys = Object.keys(state.todos);
  console.log(state, "STATE");
  console.log(keys, "KEYS");
  return keys.map( (todo) => {
    console.log(todo);
    return state["todos"][todo];
  });
}


export default allTodos;
