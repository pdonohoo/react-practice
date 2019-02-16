import React, { Component } from 'react';
import './App.css';

class App extends Component {
 
state = {
  input: '',
  moviesToWatch: ['Lord of the rings', 'Baywatch', 'Harry potter', 'The Accountant', 'Black Hawk Down', 'Mulan', 'Toy Story', 'Sixteen Candles'],
  
}

printScreen = (event) => this.setState({
  input: event.target.value
});

randomMovie = () => {
  const randomIndex = Math.floor(Math.random()*this.state.moviesToWatch.length)
  const movie = this.state.moviesToWatch[randomIndex]
  alert(movie)
};

  render() {
    return (
      <div>
        <div>text box: <input onChange={this.printScreen} type="text" /></div>
        <div>Text display:{this.state.input} </div>
        <div>Movie Generator: <button type="button" onClick={this.randomMovie}> generate random movie</button></div>
      </div>
    );
  }
}

export default App;
