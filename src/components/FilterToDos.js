import React, { Component } from 'react';

import FilterLink from './FilterLink';

class FilterToDos extends Component {
  render() {
    return (
      <div className="btn-group" role="group" aria-label="Filter set for To Dos">
        <FilterLink className="filter-link" text="All" filterType={0} />
        <FilterLink className="filter-link" text="Uncompleted" filterType={1} />
        <FilterLink className="filter-link" text="Completed" filterType={2} />
      </div>
    );
  }
}

export default FilterToDos;