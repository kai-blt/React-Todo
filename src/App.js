import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends React.Component {
  constructor() {
    super();


    //Initialize List Data
    this.listData = [
      {
        task: 'Organize Garage',
        id: 1,
        completed: false
      },
      {
        task: 'Clean House',
        id: 2,
        completed: false
      },
      {
        task: 'Read Book',
        id: 3,
        completed: false
      }
    ];
  }

  render() {
    return (
      <div>
        <h2>To Do List</h2>
        <TodoForm />
        <TodoList listData={this.listData}/>
      </div>
    );
  }
}

export default App;
