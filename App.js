import React, { Component } from 'react';
import Header from './components/layouts/Header'
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

import './App.css';
import Counter from './components/Counter';
import Forms from './components/Forms';

class App extends Component {
  state ={
    todos:[
      {
        id: 1,
        title: 'move out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'clean laundry',
        completed: true
      },
      {
        id: 3,
        title: 'Repair bed \u{1F923}',
        completed: false
      }
    ]
  };

  markComplete = (id) =>{
    // console.log(id)

    // change completed state when the checkbox is clicked (onChange)
    this.setState({
      todos: this.state.todos.map( todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }

  // delete todo item
  delTodo = (id) => {
    // console.log(id)
    this.setState({
      // copy everything in state using ... (spread operator)
      todos : [...this.state.todos.filter( todo => todo.id !== id)]
    });
  }

  // add new todo item
  addTodo = (title) =>{
    console.log(title);
    const newTodo ={
      id : 4,
      title,
      completed : false
    }
    this.setState({
      todos : [...this.state.todos, newTodo]
    })
  }
  render() {
    return (
      <div className="App container">
        <Header />
        <AddTodo  addTodo = { this.addTodo }/>
        {/* embed component into main app */}
        {/* pass data to component through props */}
        <div className="todolist" style = {{ backgroundColor:'#f4f4f4' }}>
          <Todos todos = { this.state.todos } 
            markComplete = { this.markComplete }
            delTodo = { this.delTodo}
          />
        </div>
        <Forms />
      </div>
    );
  }
}

export default App;
