import React, {useState, useReducer} from 'react';
import {todoReducer, initialState} from './reducers/todoReducer'
import '../App.css';

export const taskItem = [
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
//dispatch takes in an action object, and calls the reducer function with state and that action.

function App() {
  // const [state, dispatch] = useReducer(todoReducer, initialState);
  const [{todos}, dispatch] = useReducer(todoReducer, initialState);

  //determine what our state looks like 

  const [toDoItemList, setTodoItemList] =useState(taskItem);
console.log('todo item list', toDoItemList)
  const [dataText, setDataText] = useState('')

 console.log(toDoItemList, 'todo item list')

//   const toggleItem = clickedId =>{
//     console.log('clicked the outside map')
//     const newTaskList = toDoItemList.map(item => { 
//       console.log('clicked this inside map', item)

//     if (item.id === clickedId){
// console.log(clickedId ? `yes clicked ${item.task}`: 'not clicked')
//       return {...item, completed: !item.completed}

//     }
//      else{
//       console.log('item is untouched')
//       return item;
//     }
  
//   })
//   setTodoItemList(newTaskList)

//   }
 

//   const addNewItem = itemText =>{
//     console.log('adding new item', itemText)
//     const newTaskItem ={
//       task: itemText,
//       id: Date.now(),
//       completed: false
//     }
//     setTodoItemList([...toDoItemList, newTaskItem])
//   }

//   const removeList = itemTask =>{
//     console.log('it should be removed now')
//     setTodoItemList(toDoItemList.filter(item=>{
//       return !item.completed
//     }))
//   }

  console.log(dataText, '<----dataText')
  return (
    <div className="App">
<h2> This is the reducer area</h2>
<form onSubmit ={e => {
  e.preventDefault();
  dispatch({type: 'ADD_ITEM', dataText});
  setDataText('');
}}>

  <input value={dataText} 
  onChange={e => 
  (
    setDataText(e.target.value)
    )
  }/>
  <button type="submit">Add</button>
  <button type="submit"
  onClick={()=> dispatch({type: 'DELETE_TOGGLE_ITEMS' })}
  >Remove</button>
</form>

<pre>
  {JSON.stringify(todos, null, 1)}
</pre>

{todos.map((taskValue, clickedId)=> (
<div
key={taskValue.id}
onClick={()=> dispatch({type:'TOGGLE_TASK', clickedId })}
className={taskValue.completed ?'completed': ''}
>{taskValue.task}


</div>))}


    </div>
  );
}

export default App;
