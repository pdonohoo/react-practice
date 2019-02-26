import React, { Component } from 'react';

class Movies extends Component{

    state = {
        input: '',
        moviesToWatch: ['Lord of the rings, ', ' Baywatch, ', ' Harry potter, ', ' The Accountant, ', ' Black Hawk Down, ', 'Mulan, ', 'Toy Story, ', 'Sixteen Candles,'],
      }
      
      printScreen = (event) => this.setState({
        input: event.target.value
      });
     
      
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
              <div>Text display:{this.state.input} </div>
              </div>
    
              <ul> 
              {items}
              </ul>

            </div>
    
   
          </div>
        );
     }
}

export default Movies;

