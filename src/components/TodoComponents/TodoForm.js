import React, { Component } from 'react';

export default class TodoForm extends Component {
    constructor(){ //1.
        super(); //2.
        this.state ={ //3
            newTask: '' //banana word but must match name value in input
        }
    }

    handleChange = e =>{
        //5. update state
        this.setState({
        //6. pass in object
        // [e.target.name]: e.target.value //<---option 1 -- for multiple inputs this is how you controlled all of them
        newTask: e.target.value // <--option 2. since there's one input
        })

    }

    render(){
        return(
            <form>
                <input type="text" name="newTask" 
                value={this.state.newTask} 
                placeholder="Add your task here" 
                onChange={this.handleChange}/>
                <button>Add</button>
            </form>
        )
    }

}

