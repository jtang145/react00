import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Hello from "./componets/Hello/Hello"
import Module from './componets/Module';

export default class App extends Component{
  render(){
    return (
      <div>
        <Hello/>
        <Module/>
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
