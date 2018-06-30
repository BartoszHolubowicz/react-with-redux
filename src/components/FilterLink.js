import React, { Component } from 'react';
import { connect } from 'react-redux';

import { filterToDos } from '../actions/index';

class FilterLink extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    const { filterType, filterToDos } = this.props;
    filterToDos(filterType);
  }
  render() {
    const { text, filter, filterType } = this.props;
    const isActive = filter === filterType ? true : false;

    if (isActive)
      return (
        <button type="button" className="btn btn-secondary" disabled>{text}</button>
      );

    return (
      <button type="button" className="btn btn-secondary" onClick={this.handleClick}>{text}</button>
    );
  }
}

const mapStateToProps = state => {
  return { filter: state.filter };
}
const mapDispatchToProps = dispatch => {
  return {
    filterToDos: filterType => dispatch(filterToDos(filterType))
  }
}

FilterLink = connect(mapStateToProps, mapDispatchToProps)(FilterLink);

export default FilterLink;