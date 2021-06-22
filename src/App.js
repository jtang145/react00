// import logo from './logo.svg';
import { Component } from 'react';
import Footer from './componets/Footer';
import Header from './componets/Header';
import List from './componets/List';
import './App.css';

export default class App extends Component{
  state = {todos:[
    {id:'001', name:'Eat', done:true},
    {id:'002', name:'Sleep', done:true},
    {id:'003', name: 'Coding', done:false},
    {id:'004', name: 'Jogging', done:false},
  ]};

  //Used to pass value from Header to App
  addTodo = (newNameObj)=>{
    const {todos} = this.state;
    //combine the values, new value as first item
    const newTodos = [newNameObj, ...todos]
    //update list
    this.setState({todos: newTodos})
  }

  deleteTodo = (id)=>{
    const {todos} = this.state
    const newList = todos.filter((todoItem)=>{
      return todoItem.id !== id
    })
    this.setState({todos: newList})
  }

  itemCheckAction = (id, isDone)=>{
    const {todos} = this.state
    const updatedList = todos.map((toDoItem)=>{
      if(toDoItem.id === id){
        return {...toDoItem, done:isDone}
      }else{
        return toDoItem;
      }
    })
    this.setState({todos: updatedList})
  }

  checkAllItems = (isCheck)=>{
    const {todos} = this.state
    const checkedItems = todos.map((todoItem)=>{
      return {...todoItem, done:(isCheck?true:false)}
    })
    this.setState({todos: checkedItems})
  }

  clearAllDoneItems = ()=>{
    const {todos} = this.state
    const notDones = todos.filter((todoItem)=>{
      return !todoItem.done;
    })
    this.setState({todos: notDones})
  }

  render(){
    const {todos} = this.state

    return (
      <div>
        <Header addTodo={this.addTodo}/>
        <List todos={todos} updateTodos={this.itemCheckAction} deleteTodo={this.deleteTodo}/>
        <Footer todos={todos} checkAllItems={this.checkAllItems} clearAllDones={this.clearAllDoneItems}/>
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
