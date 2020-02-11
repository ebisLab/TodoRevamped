import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
// import TodoForm from './components/TodoComponents/TodoForm'

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
      todoItemList : taskItem
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
        return item; //gets returned untouched
      }
    })
    this.setState({ // you always have to pass in an object. 
todoItemList: newTaskList
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList taskItem ={this.state.todoItemList} toggleItem={this.toggleItem} />
        {/* <TodoForm /> */}
      </div>
    );
  }
}

export default App;
