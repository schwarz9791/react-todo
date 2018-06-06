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
      </li>
    )
  }
  handleChange() {
    this.props.onClickCheckbox(this.props.id);
  }
}
