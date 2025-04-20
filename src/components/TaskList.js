import React, { Component } from 'react';
import TaskItem from './TaskItem.js';

class TaskList extends Component {
  render() {
    return (
      <div className="task-list">
        {this.props.tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDeleteTask={this.props.onDeleteTask}
            onToggleComplete={this.props.onToggleComplete}
          />
        ))}
      </div>
    );
  }
}

export default TaskList;