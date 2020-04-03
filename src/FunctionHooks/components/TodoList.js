import React from 'react';
import Todo from './Todo'

const TodoList = (props) =>{

    return(
        <div>
           <h2>Function Todolist</h2> 
            {props.taskItem.map(item=>(
  <Todo key={item.id} item={item} toggleItem={props.toggleItem} />))}
        </div>
    )
}

export default TodoList;