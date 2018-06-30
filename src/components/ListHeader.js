import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changeListTitle, changeListDescription } from '../actions/index';

class ListHeader extends Component {
  constructor() {
    super();
    this.handleClickTitle = this.handleClickTitle.bind(this);
    this.handleClickDescription = this.handleClickDescription.bind(this);
  }
  handleClickTitle() {
    const { listTitle, changeListTitle } = this.props;
    let title = prompt("Enter new ToDo list title:", listTitle);
    if (title !== null)
      changeListTitle(title);
  }
  handleClickDescription() {
    const { listDescription, changeListDescription } = this.props;
    let desc = prompt("Enter new ToDo list description:", listDescription);
    if (desc !== null)
      changeListDescription(desc);
  }
  render() {
    const { listTitle, listDescription } = this.props;
    return (
      <div className="jumbotron">
        <h1 className="display-4" onClick={this.handleClickTitle}>{listTitle}</h1>
        <p className="lead" onClick={this.handleClickDescription}>{listDescription}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { 
    listTitle: state.listTitle,
    listDescription: state.listDescription
  };
}
const mapDispatchToProps = dispatch => {
  return {
    changeListTitle: title => dispatch(changeListTitle(title)),
    changeListDescription: desc => dispatch(changeListDescription(desc))
  }
}

ListHeader = connect(mapStateToProps, mapDispatchToProps)(ListHeader);

export default ListHeader;