import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends React.Component {
  constructor() {
    super();

    this.state = [
      {
        task: 'Organize Garage',
        id: 1528817077286,
        completed: false
      }
    ];
  }

  render() {
    return (
      <div>
        <h2>To Do List</h2>
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}

export default App;
