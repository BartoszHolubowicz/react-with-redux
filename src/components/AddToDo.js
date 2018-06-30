import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactHowler from 'react-howler';
import uuidv1 from 'uuid';

import { addToDo } from '../actions/index';

class AddToDo extends Component {
  constructor() {
    super();
    this.state = { input: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value
    });
  }
  handleClick() {
    const { input } = this.state;
    const { addToDo } = this.props;
    const id = uuidv1();
    addToDo({ id, title: input, completed: false });
    if (input === "E")
      this.setState({ playing: true });
    this.setState({ input: "" });
  }
  handleEnter(e) {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  }
  render() {
    const { input } = this.state;
    return (
      <div className="input-group mb-3">
        <ReactHowler src={'https://bartoszholubowicz.bitbucket.io/E.mp3'} playing={this.state.playing} />
        <input id="todo-input" type="text" className="form-control" placeholder="New To Do name..." aria-label="New To Do name" aria-describedby="basic-addon2" onChange={this.handleChange} value={input} />
        <div className="input-group-append">
          <button className="btn btn-success" type="button" onClick={this.handleClick}>Add</button>
        </div>
      </div>
    );
  }
  componentDidMount() {
    document.querySelector("#todo-input").addEventListener('keydown', this.handleEnter);
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToDo: toDo => dispatch(addToDo(toDo))
  }
}

AddToDo = connect(null, mapDispatchToProps)(AddToDo);

export default AddToDo;