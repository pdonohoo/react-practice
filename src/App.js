import React, { Component } from 'react';
import './App.css';

class App extends Component {
 
state = {
  eventChange: ''
}

printScreen = (a) => this.setState({
  eventChange: a.target.value
})
  

  render() {
    return (
      <div>
        <div>text box: <input onChange={this.printScreen} type="text" /></div>
        <div>Text display:{this.state.eventChange} </div>
      </div>
    );
  }
}

export default App;
