import React, { Component } from 'react';

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({

      text: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.trim()) {
      this.props.onAddTask(this.state.text);
      this.setState({
        text: '',
      });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="task-form">
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="Enter task"
          className="flex justify-center mt-5 items-center z-index-100 pt-2"
        />
        <button type="submit" className="hover:from-pink-600 hover:to-pueple-600">Add</button>
      </form>
    );
  }
}

export default TaskForm;