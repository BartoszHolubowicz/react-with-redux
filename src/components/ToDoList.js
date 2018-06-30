import React, { Component } from 'react';
import { connect } from 'react-redux';

import { UNCOMPLETED, COMPLETED } from '../constants/filter-types';

import ToDo from './ToDo';

class ToDoList extends Component {
  render() {
    const { todos, filter } = this.props;
    const renderToDo = todo => <ToDo title={todo.title} completed={todo.completed} key={todo.id} todoId={todo.id} />

    switch(filter) {
      case UNCOMPLETED:
        return (
          <ul className="list-group">
            {todos.filter(todo => !todo.completed ? true : false).map(todo => renderToDo(todo))}
          </ul>
        );
      case COMPLETED:
        return (
          <ul className="list-group">
            {todos.filter(todo => todo.completed ? true : false).map(todo => renderToDo(todo))}
          </ul>
        );
      default:
        return (
          <ul className="list-group">
            {todos.map(todo => renderToDo(todo))}
          </ul>
        );
    }
  }
}

const mapStateToProps = state => {
  return { 
    todos: state.todos,
    filter: state.filter
  };
}

ToDoList = connect(mapStateToProps)(ToDoList);

export default ToDoList;