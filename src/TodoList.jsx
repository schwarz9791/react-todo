import React, { Component } from 'react';
import Todo from './Todo';

export default class TodoList extends Component {
  render() {
    return (
      <ul>{this.renderTodos()}</ul>
    );
  }
  renderTodos() {
    const { todos, onClickCheckbox, onClickDelete } = this.props;
    return todos.map(todo => (
      <Todo
        key={todo.id}
        onClickCheckbox={onClickCheckbox}
        onClickDelete={onClickDelete}
        { ...todo }
      />
    ));
  }
}
