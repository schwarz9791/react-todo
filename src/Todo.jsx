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
          onClick={this.handleDelete.bind(this)}>
          Delete
        </button>
      </li>
    )
  }
  handleChange() {
    this.props.onClickCheckbox(this.props.id);
  }
  handleDelete() {
    if (!this.props.complete) {
      if (window.confirm("This todo is not completed. Are you sure delete it?")) {
        this.props.onClickDelete(this.props.id);
      }
    } else {
      this.props.onClickDelete(this.props.id);
    }
  }
}
