import TodoListContainer from './todo_list_container';
import React from 'react';
import { requestTodos } from '../../actions/todo_actions';
// import allTodos from '../' for later


class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;

  }
  componentDidMount(){
    this.props.dispatch(requestTodos);
  }

  render() {
    console.log(this.props["todos"]);
    const todos = this.props["todos"].map(todo => console.log(todo));
  }


}

export default TodoList;
