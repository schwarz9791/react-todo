import React, { Component } from 'react';
import Todo from './Todo';

export default class TodoList extends Component {
  render() {
    return (
      <ul>{this.renderTodos()}</ul>
    );
  }
  renderTodos() {
    const { todos } = this.props;
    return todos.map(todo => (
      <Todo
        key={todo.id}
        { ...todo }
      />
    ));
  }
}
