import React, { Component } from 'react';

export default class TodoForm extends Component {
    constructor(){ //1.
        super(); //2.
        this.state ={ //3
            task: ''
        }
    }

    render(){
        return(
            <form>
                <input placeholder="Add your task here" />
                <button>Add</button>
            </form>
        )
    }

}

