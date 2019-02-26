import React, { Component } from 'react';

class Calculator extends Component{




render(){
    return(
            <div> 
                <h2>Calculator</h2>
                <input  id='n1' type='text'/> 
                <div>+</div>
                <input  id='n2' type='text'/>  <br/> <br/>
                <button onClick='' type='button'>click me to add numbers together</button>
                <div>Number Total:  </div>
            </div>
        );
    }   
}

export default Calculator;