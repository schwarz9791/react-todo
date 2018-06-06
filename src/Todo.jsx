import React, { Component } from 'react';

export default class Todo extends Component {
  render() {
    const { text } = this.props;
    return (
      <li>
        <label>
          <input type='checkbox' />
          {text}
        </label>
      </li>
    )
  }
}
