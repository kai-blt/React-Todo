import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      toDoText: '',
      listData: []
    }     
  }

  //If component mounted, check to see if there's local storage. If so, set state to that saved data
  componentDidMount() {
    console.log(localStorage.length)
    if (localStorage.length > 0) {
      this.setState({listData: [...this.state.listData, ...JSON.parse(localStorage.getItem('listData'))]})
      console.log(this.state.listData)
    }
  }

  //If a component updates, add the todo to storage
  componentDidUpdate() {    
    localStorage.setItem('listData', JSON.stringify(this.state.listData))
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
    console.log(localStorage)
  }


  //Form Input handler
  updateText = (e) => {
    this.setState({toDoText: e.target.value})
  }

  //Todo item on click handler toggle completed or not
  toDoToggle = (itemId) => {  
    //If ids are equal, set completed true on item
    
    //Re-Render list with toggled item completed
    this.setState({ listData: this.state.listData.map(item => {
      if (item.id === itemId) {
        return {...item, completed: !item.completed }
      } else {
        return item;
      }
    })})
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
        <h1>To Do List</h1>
        <TodoForm submit={this.addListItem} updateText={this.updateText} clearToDo={this.clearToDo} />
        <TodoList listData={this.state.listData} toDoToggle={this.toDoToggle}/>
      </div>
    );
  }
}

export default App;
