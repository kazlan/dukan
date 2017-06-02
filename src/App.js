import React, { Component } from 'react'
import './App.css'
import Tipodedia from './components/Tipodedia'
import Appbar from './components/Appbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Appbar />
        <Tipodedia />
      </div>
    );
  }
}

export default App;
