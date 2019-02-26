import React, { Component } from 'react';
import Movies from './Movies';
import Calculator from './Calculator';
import './App.css';
import MovieGenerator from './MovieGenerator';

class App extends Component {
 


  render() {
    
    return (
      <div>
        
        <Movies/> 
        <MovieGenerator/> <hr/>
        <Calculator/>

      </div>
    );
  }
}

export default App;
