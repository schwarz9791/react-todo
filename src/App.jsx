import React, { Component } from 'react';
import TodoList from './TodoList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, text: 'aaa' },
        { id: 2, text: 'bbb' },
      ]
    }
  }
  render() {
    return (
      <div>
        <TodoList
          todos={this.state.todos}
          />
      </div>
    );
  }
}
