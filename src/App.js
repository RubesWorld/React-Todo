import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './components/Todo.css'

const tasks = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
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
        if(tasks.id === itemId) {
          return {
            ...tasks,
            completed: !tasks.completed
          }
        }
        return(tasks);
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


  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h1>Todo App!</h1>
        <TodoForm handleTaskAdd={this.handleTaskAdd}/>
        <TodoList tasks={this.state.tasks} handleTaskMarkThrough={this.handleTaskMarkThrough}/>
      </div>
    );
  }
}

export default App;
