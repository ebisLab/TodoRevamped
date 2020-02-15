import React from 'react';
import TodoList from '../Class/components/TodoComponents/TodoList';
import './styles.css';
import TodoForm from '../Class/components/TodoComponents/TodoForm';

const taskItem = [
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
  // you will need a place to store your state in this component.


  constructor(){
    super();
    this.state = {
      todoItemList : taskItem,
      dataText: ''
    }
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  toggleItem = clickedId =>{
    console.log('clicked this outside map')
    const newTaskList = this.state.todoItemList.map(item => {
      console.log('clicked this inside map')
      if (item.id === clickedId) {
        //loop through the array
        //find the item we clicked ===> id, i
        return {
          ...item,
          completed: !item.completed //if true change to false, or vice versa
        };
      } else {
        console.log('item is untouched')
        return item; //gets returned untouched
      }
    })
    this.setState({ // you always have to pass in an object. 
todoItemList: newTaskList
    })
  }

  // 1. Passed down form, it is here because thats where the main state resides. 
  addNewItem = itemText =>{
const newTaskItem = { //2.
  task: itemText, //3. if I don't have data pass in parameter
  id: Date.now(),
  completed: false
}

//4. Set state call
this.setState({
  //update grociery list
  todoItemList: [...this.state.todoItemList, newTaskItem]
})
  }

  //remove checked off items
  removeList = itemTask =>{
    console.log('Item(s) should be removed now')
    this.setState({
  todoItemList: this.state.todoItemList.filter(item =>{
    return !item.completed
  })
      
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addNewItem={this.addNewItem} removeList={this.removeList}/>
        <TodoList taskItem ={this.state.todoItemList} toggleItem={this.toggleItem} />
     
      </div>
    );
  }
}

export default App;
