import React from 'react'


const Todo = props => {
    const handleClick = () => {
        props.handleTaskMarkThrough(props.tasks.id)
    }

    return (
        <div onClick={handleClick} className={`task'${props.tasks.completed ? ' completed' : ''}`}>
            <p>{props.tasks.task}</p>
            
        </div>
    );
};

export default Todo;
