import React from 'react';
import Todo from './Todo'

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList =(props)=>{
    return(
        <div>
    <h1>TodoList</h1>
    {props.taskItem.map(item => <Todo key={item.id} item={item} />)}
    </div>
    )
}
export default TodoList;
