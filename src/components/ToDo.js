import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleCompletion } from '../actions/index';

class ToDo extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const { todoId, toggleCompletion } = this.props;
    toggleCompletion(todoId);
  }
  render() {
    const { title, completed } = this.props;
    return (
      completed ?
      <li className="list-group-item list-group-item-success" onClick={this.handleClick}>{title}</li> :
      <li className="list-group-item" onClick={this.handleClick}>{title}</li>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleCompletion: id => dispatch(toggleCompletion(id))
  }
}

ToDo = connect(null, mapDispatchToProps)(ToDo);

export default ToDo;