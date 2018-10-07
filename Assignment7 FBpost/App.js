import React, { Component } from 'react';
import FBpost from './components/FBpost/FBpost'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FBpost description="Hello world" />
      </div>
    );
  }
}

export default App;
