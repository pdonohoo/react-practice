import React, { Component } from 'react';

class MovieGenerator extends Component{

state = {
    moviesToWatch: ['Lord of the rings, ', ' Baywatch, ', ' Harry potter, ', ' The Accountant, ', ' Black Hawk Down, ', 'Mulan, ', 'Toy Story, ', 'Sixteen Candles,'],
}

randomMovie = () => {
    const randomIndex = Math.floor(Math.random()*this.state.moviesToWatch.length)
    const movie = this.state.moviesToWatch[randomIndex]
    alert(movie)
};

render(){
    return(
        <div id='items'>Movie Generator: <button type="button" onClick={this.randomMovie}> generate random movie </button></div>
    );
}
}

export default MovieGenerator;