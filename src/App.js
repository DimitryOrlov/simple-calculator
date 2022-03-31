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
    if(state.overwrite) {
      return {
        ...state,
        currentOperand: payload.digit,
        overwrite: false,
      }
    }
    if(payload.digit === "0" && state.currentOperand === "0") return state
    if(payload.digit === "," && state.currentOperand.includes(",")) return state
    return {
      ...state,
      currentOperand: `${state.currentOperand || ""}${payload.digit}`
    }
  case ACTIONS.CLEAR:
    if(state.currentOperand == null) {
      return {
        currentOperand: null
      }
    }
    return {
      currentOperand: null
    }
  case ACTIONS.CHOOSE_OPERATION:
    if(state.currentOperand == null && state.prevOperand == null) {
      return state;
    }

    if(state.currentOperand == null) {
      return {
        ...state,
        operation: payload.operation
      }
    }

    if(state.prevOperand == null) {
      return {
        ...state, 
        operation: payload.operation,
        prevOperand: state.currentOperand,
        currentOperand: null
      }
    }
    return {
      ...state,
      prevOperand: evaluate(state),
      operation: payload.operation,
      currentOperand: 0,
      overwrite: true,
    };
  case ACTIONS.DELETE_DIGIT:
    if(state.overwrite) {
      return {
        ...state,
        overwrite: false,
        currentOperand: null,
      }
    }
    if(state.currentOperand == null) return state;
    if(state.currentOperand.length === 1) {
      return {
        ...state,
        currentOperand: null
      }
    }

    if(state.currentOperand == 0) {
      return {
        ...state,
        currentOperand: null
      }
    }

    return {
      ...state,
      // remove last digit from operand
      currentOperand: state.currentOperand.slice(0, -1)
    };
  case ACTIONS.EVALUATE:
    if(state.operation == null || state.currentOperand == null || state.prevOperand == null) {
      return state;
    }

    return {
      ...state, 
      prevOperand: null,
      currentOperand: evaluate(state),
      operation: null
    };
  default: throw new Error();
  }
}

// evaluate math function
function evaluate({ currentOperand, prevOperand, operation }) {
  const prev = parseFloat(prevOperand);
  const current = parseFloat(currentOperand);
  if(isNaN(prev) || isNaN(current)) return "";
  let computation = "";
  switch(operation) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "*":
      computation = prev * current;
      break;
    case "/":
      computation = prev / current;
      break;
    default: throw new Error();
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
          <OperationButton gridArea='div' operation="/" dispatch={dispatch} />
          <OperationButton gridArea='mul' operation="*" dispatch={dispatch} />
          <OperationButton gridArea='minus' operation="-" dispatch={dispatch} />
          <OperationButton gridArea='plus' operation="+" dispatch={dispatch} />
          {/* special */}
          <button style={{gridArea: 'equal'}} onClick={() => dispatch({type: ACTIONS.EVALUATE})}>=</button>
          <button style={{gridArea: 'clear'}} onClick={() => dispatch({type: ACTIONS.CLEAR})}>AC</button>
          <button style={{gridArea: 'del'}} onClick={() => dispatch({type: ACTIONS.DELETE_DIGIT})}>del</button>
          <button style={{gridArea: 'percent'}} onClick={() => console.log("%")}>%</button>
        </div>
      </div>
    </div>
  );
}

export default App;
