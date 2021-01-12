import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './components/Todo.css'

const tasks = [
  {
    task: 'Task 1',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Task 2',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      tasks: tasks
    }
  }

  handleTaskMarkThrough = (itemId) => {
    this.setState({
      tasks: this.state.tasks.map(tasks => {
        if( itemId === tasks.id) {
          return {
            ...tasks,
            completed: !tasks.completed
          }
        }
        console.log(tasks.completed)
        return tasks;
      })
    });
  }

  handleTaskAdd = ( taskName ) => {
    const task = {
      task: taskName,
      id: Date.now(),
      completed: false
    }
    const newTasks = [...this.state.tasks, task];

    this.setState({
      tasks: newTasks
    })
  }

  clearTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.filter((task) => !task.completed)
    });
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h1>Todo App!</h1>
        <TodoList tasks={this.state.tasks} handleTaskMarkThrough={this.handleTaskMarkThrough} clearTask={this.clearTask}/>
        <TodoForm handleTaskAdd={this.handleTaskAdd}/>
      </div>
    );
  }
}

export default App;
