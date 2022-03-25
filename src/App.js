import './App.css';
import { useReducer, useState } from 'react';
import DigitButton from './components/DigitButton';
import OperationButton from './components/OperationButton'

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
          <DigitButton gridArea='zero' digit="0"/>
          <DigitButton gridArea='one' digit="1"/>
          <DigitButton gridArea='two' digit="2"/>
          <DigitButton gridArea='three' digit="3"/>
          <DigitButton gridArea='four' digit="4"/>
          <DigitButton gridArea='five' digit="5"/>
          <DigitButton gridArea='six' digit="6"/>
          <DigitButton gridArea='seven' digit="7"/>
          <DigitButton gridArea='eight' digit="8"/>
          <DigitButton gridArea='nine' digit="9"/>
          <DigitButton gridArea='comm' digit="."/>
          {/* math operators */}
          <OperationButton gridArea='div' operation="/"/>
          <OperationButton gridArea='mul' operation="*"/>
          <OperationButton gridArea='minus' operation="-"/>
          <OperationButton gridArea='plus' operation="+"/>
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
