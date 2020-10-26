import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      toDoText: '',
      itemsToClear: [],
      listData: 
        [
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
        ]
    }   
  }


  //Form Submit Handler
  addListItem = (e) => {
    //Prevent default form behaviour
    e.preventDefault();

    //Create new task from state
    const newTask = {
      task: this.state.toDoText,
      id: Math.random() * 100,
      completed: false
    }

    //Spread the existant array and add in new task
    this.setState({listData: [...this.state.listData, newTask]})
  }


  //Form Input handler
  updateText = (e) => {
    this.setState({toDoText:   e.target.value})
  }

  //Todo item on click handler
  toDoClick = (e) => {
    e.preventDefault();

    //If ids are equal, set completed true on item
    this.state.listData.map(item => {
      if (item.id === Number(e.target.id)) {
       item.completed = true;
      }      
    })

    //Re-Render by updating state
    this.setState({listData: this.state.listData})
  }

  //Clear item handler
  clearToDo = (e) => {
    e.preventDefault();

    //Filter out all completed items and set state to new data
    this.setState({listData: this.state.listData.filter(item => item.completed === false)})
  }


  render() {
    return (
      <div>
        <h2>To Do List</h2>
        <TodoForm submit={this.addListItem} updateText={this.updateText} clearToDo={this.clearToDo} />
        <TodoList listData={this.state.listData} toDoClick={this.toDoClick}/>
      </div>
    );
  }
}

export default App;
