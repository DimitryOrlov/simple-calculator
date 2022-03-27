import './App.css';
import { useReducer, useState } from 'react';
import DigitButton from './components/DigitButton';
import OperationButton from './components/OperationButton'

const initialState = {
  prevOperand: null,
  currentOperand: 0,
  operation: '',
  overwrite: false,
}

export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  CHOOSE_OPERATION: 'choose-operation',
  EVALUATE: 'evaluate',
}

// reducer for manage state
function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case ACTIONS.ADD_DIGIT:
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`
      }
      default:
        return {...state}
  }
}

// main component
function App() {
  const [{ currentOperand, prevOperand, operation}, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App-wrapper">
      <div className="App">
        <div className="output">
          <div className="previous-operand">{prevOperand} {operation}</div>
          <div className="current-operand">{currentOperand}</div>
        </div>
        <div className="buttons-wrapper">
          {/* numbers and comm */}
          <DigitButton gridArea='zero' digit="0" dispatch={dispatch} />
          <DigitButton gridArea='one' digit="1" dispatch={dispatch} />
          <DigitButton gridArea='two' digit="2" dispatch={dispatch} />
          <DigitButton gridArea='three' digit="3" dispatch={dispatch} />
          <DigitButton gridArea='four' digit="4" dispatch={dispatch} />
          <DigitButton gridArea='five' digit="5" dispatch={dispatch} />
          <DigitButton gridArea='six' digit="6" dispatch={dispatch} />
          <DigitButton gridArea='seven' digit="7" dispatch={dispatch} />
          <DigitButton gridArea='eight' digit="8" dispatch={dispatch} />
          <DigitButton gridArea='nine' digit="9" dispatch={dispatch} />
          <DigitButton gridArea='comm' digit="." dispatch={dispatch} />
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
