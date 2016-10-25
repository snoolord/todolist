export const fetchTodos = (success, error) => {
  $.ajax({
    method: 'GET',
    url: 'api/todos',
    success,
    error
  });
};
//
// export const deleteTodos = (success, error) => {
//   $.ajax({
//     method: 'DELETE',
//     url: `api/todos/1,
//     success,
//     error
//   });
// };

export const createTodos = ( todo, success, error) => {
  $.ajax( {
    method: 'POST',
    url: 'api/todos',
    data: `${todo}`,
    success,
    error
  });
};
