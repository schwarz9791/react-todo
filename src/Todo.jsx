import React, { Component } from 'react';

export default class Todo extends Component {
  render() {
    const { text, complete } = this.props;
    return (
      <li>
        <label>
          <input
            type='checkbox'
            checked={complete}
            onChange={this.handleChange.bind(this)} />
          {text}
        </label>
        <button
          onClick={this.handleDelete.bind(this)}
          disabled={!complete}>
          Delete
        </button>
      </li>
    )
  }
  handleChange() {
    this.props.onClickCheckbox(this.props.id);
  }
  handleDelete() {
    this.props.onClickDelete(this.props.id);
  }
}
