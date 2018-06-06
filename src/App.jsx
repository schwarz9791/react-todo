import React, { Component } from 'react';
import TodoList from './TodoList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }
  render() {
    return (
      <div>
        <input
          type='text'
          ref='input'
          placeholder='Input todo'
        />
      <button onClick={() => this.addTodo(this.refs.input.value)}>Add</button>
        <TodoList
          todos={this.state.todos}
          onClickCheckbox={this.completeTodo.bind(this)}
          onClickDelete={this.deleteTodo.bind(this)}
          />
      </div>
    );
  }
  addTodo(text) {
    this.setState({
      todos: [...this.state.todos, {
        id: Date.now(),
        complete: false,
        text,
      }]
    }, this.clearInput())
  }
  deleteTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }
  completeTodo(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.complete = !todo.complete;
        }
        return todo;
      })
    });
  }
  clearInput() {
    this.refs.input.value = '';
  }
}
