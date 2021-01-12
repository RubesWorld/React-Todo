import React from 'react'
import Todo from './Todo'

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList = (props) => {

    return (
        <div>
            {props.tasks.map(tasks => (
                <Todo handleTaskMarkThrough={props.handleTaskMarkThrough} key={tasks.id} tasks={tasks}/>
            ))}
            <button onClick={props.clearTask} className="clear-btn">
                Clear Completed
            </button>
        </div>
    )
}

export default TodoList;

