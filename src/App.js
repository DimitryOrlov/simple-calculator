import './App.css';
import { useReducer, useState } from 'react';

// main component
function App() {

  return (
    <div className="App-wrapper">
      <div className="App">
        <div className="output">
          <div className="previous-operand">0</div>
          <div className="current-operand">0</div>
        </div>
        <div className="buttons-wrapper">
          {/* numbers and comm */}
          <button style={{gridArea: 'zero'}} onClick={() => console.log("0")}>0</button>
          <button style={{gridArea: 'one'}} onClick={() => console.log("1")}>1</button>
          <button style={{gridArea: 'two'}} onClick={() => console.log("2")}>2</button>
          <button style={{gridArea: 'three'}} onClick={() => console.log("3")}>3</button>
          <button style={{gridArea: 'four'}} onClick={() => console.log("4")}>4</button>
          <button style={{gridArea: 'five'}} onClick={() => console.log("5")}>5</button>
          <button style={{gridArea: 'six'}} onClick={() => console.log("6")}>6</button>
          <button style={{gridArea: 'seven'}} onClick={() => console.log("7")}>7</button>
          <button style={{gridArea: 'eight'}} onClick={() => console.log("8")}>8</button>
          <button style={{gridArea: 'nine'}} onClick={() => console.log("9")}>9</button>
          <button style={{gridArea: 'comm'}} onClick={() => console.log(".")}>.</button>
          {/* math operators */}
          <button style={{gridArea: 'div'}} onClick={() => console.log("/")}>/</button>
          <button style={{gridArea: 'mul'}} onClick={() => console.log("*")}>*</button>
          <button style={{gridArea: 'minus'}} onClick={() => console.log("-")}>-</button>
          <button style={{gridArea: 'plus'}} onClick={() => console.log("+")}>+</button>
          {/* special */}
          <button style={{gridArea: 'equal'}} onClick={() => console.log("=")}>=</button>
          <button style={{gridArea: 'clear'}} onClick={() => console.log("AC")}>AC</button>
          <button style={{gridArea: 'del'}} onClick={() => console.log("del")}>del</button>
          <button style={{gridArea: 'percent'}} onClick={() => console.log("%")}>%</button>
        </div>
      </div>
    </div>
  );
}

export default App;
