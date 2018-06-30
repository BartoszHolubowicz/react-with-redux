import React, { Component } from 'react';

import ListHeader from './components/ListHeader';
import AddToDo from './components/AddToDo';
import ToDoList from './components/ToDoList';
import FilterToDos from './components/FilterToDos';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <ListHeader />
        <FilterToDos />
        <AddToDo />
        <ToDoList />
      </div>
    );
  }
}

export default App;