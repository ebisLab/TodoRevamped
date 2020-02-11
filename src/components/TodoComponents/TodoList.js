import React from 'react';

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList =(props)=>{
    return(
        <div>
    <h1>TodoList</h1>
    {props.taskItem.map(item => <li>{item.task}</li>)}
    </div>
    )
}
export default TodoList;
