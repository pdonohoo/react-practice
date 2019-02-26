import React, { Component } from 'react';
import './App.css';

class App extends Component {
 
state = {
  input: '',
  moviesToWatch: ['Lord of the rings, ', ' Baywatch, ', ' Harry potter, ', ' The Accountant, ', ' Black Hawk Down, ', 'Mulan, ', 'Toy Story, ', 'Sixteen Candles,'],
}

printScreen = (event) => this.setState({
  input: event.target.value
});

randomMovie = () => {
  const randomIndex = Math.floor(Math.random()*this.state.moviesToWatch.length)
  const movie = this.state.moviesToWatch[randomIndex]
  alert(movie)
};

addMovieToList = () => this.setState ({
  moviesToWatch: this.state.moviesToWatch.concat(' ' + [this.state.input] + ', ')
});



  render() {
    const items = this.state.moviesToWatch.map((movie) =>
    <li>{movie}<button onClick={this.clearMovie} id='clear'>x</button></li>
    )
    return (
      <div>
        <div id='top'> 
          <div id='title'>Key-Logger</div><br></br>
          <div>Text Box: <input onChange={this.printScreen} type="text" /> 
          <button onClick={this.addMovieToList}>add to the movie list</button>
          <div id='items'>Text display:{this.state.input} </div>
          </div>
          <ul> 
          {items}
        </ul>
        </div>

        <br></br>
        
        <div id='items'>Movie Generator: <button type="button" onClick={this.randomMovie}> generate random movie</button></div>

        
        
      </div>
    );
  }
}

export default App;
