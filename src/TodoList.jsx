import React, { Component } from 'react';
import Todo from './Todo';

export default class TodoList extends Component {
  render() {
    return (
      <ul>{this.renderTodos()}</ul>
    );
  }
  renderTodos() {
    const { todos, onClickCheckbox } = this.props;
    return todos.map(todo => (
      <Todo
        key={todo.id}
        onClickCheckbox={onClickCheckbox}
        { ...todo }
      />
    ));
  }
}
