import React from 'react';

const Todo = (props) =>{
return(
    <li onClick={() => props.toggleItem(props.item.id)} //props.item.id  ====> clickedId
    className={`item${props.item.completed ? ' completed' : ''}`}
    // className="selected"
    >{props.item.task}</li>
    // <li>Hello</li>

)
}

export default Todo