import React, { Component } from 'react';

export default class TodoForm extends Component {

    render(){
        return(
            <form>
                <input placeholder="Add your task here" />
                <button>Add</button>
            </form>
        )
    }

}

