import React, { Component } from 'react';
import TaskForm from './components/TaskForm.js';
import TaskList from './components/TaskList.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
  }

  addTask(text) {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    this.setState({
      tasks: [...this.state.tasks, newTask],
    });
  }

  deleteTask(id) {
    this.setState({
      tasks: this.state.tasks.filter((task) => task.id !== id),
    });
  }

  toggleComplete(id) {
    this.setState({
      tasks: this.state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    });
  }

  render() {
    return (
      <div className="app-container">
        <h1>Task Tracker</h1>
        <TaskForm onAddTask={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          onDeleteTask={this.deleteTask}
          onToggleComplete={this.toggleComplete}
        />
      </div>
    );
  }
}

export default App;